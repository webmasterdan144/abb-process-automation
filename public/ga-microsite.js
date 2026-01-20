/**
 * Gross Automation Microsite SDK v1.0.0
 *
 * Universal JavaScript SDK for tracking, announcements, and referral tracking.
 * Works on any website: static HTML, PHP, Next.js, WordPress, etc.
 *
 * Usage:
 *   <script src="ga-microsite.js"
 *     data-site-id="YOUR_SITE_ID"
 *     data-auth-key="YOUR_AUTH_KEY"
 *     data-admin-url="https://admin.grossautomation.com">
 *   </script>
 *
 * Or configure manually:
 *   <script>
 *     window.GA_CONFIG = {
 *       siteId: 'YOUR_SITE_ID',
 *       authKey: 'YOUR_AUTH_KEY',
 *       adminUrl: 'https://admin.grossautomation.com',
 *       enableTracking: true,
 *       enableAnnouncements: true,
 *       enableReferralTracking: true,
 *       respectDNT: true,
 *       debug: false
 *     };
 *   </script>
 *   <script src="ga-microsite.js"></script>
 */

(function(window, document) {
  'use strict';

  // ==========================================================================
  // Configuration
  // ==========================================================================

  const DEFAULT_CONFIG = {
    siteId: null,
    authKey: null,
    adminUrl: 'https://admin.grossautomation.com',
    enableTracking: true,
    enableAnnouncements: true,
    enableReferralTracking: true,
    respectDNT: true,
    trackAdminUsers: false,
    referralDomains: ['www.grossautomation.com', 'grossautomation.com'],
    debug: false
  };

  // Get configuration from data attributes or window.GA_CONFIG
  function getConfig() {
    const config = Object.assign({}, DEFAULT_CONFIG);

    // Check for window.GA_CONFIG first
    if (window.GA_CONFIG) {
      Object.assign(config, window.GA_CONFIG);
    }

    // Override with data attributes from script tag
    const script = document.currentScript ||
      document.querySelector('script[data-site-id]');

    if (script) {
      if (script.dataset.siteId) config.siteId = script.dataset.siteId;
      if (script.dataset.authKey) config.authKey = script.dataset.authKey;
      if (script.dataset.adminUrl) config.adminUrl = script.dataset.adminUrl;
      if (script.dataset.enableTracking !== undefined)
        config.enableTracking = script.dataset.enableTracking !== 'false';
      if (script.dataset.enableAnnouncements !== undefined)
        config.enableAnnouncements = script.dataset.enableAnnouncements !== 'false';
      if (script.dataset.enableReferralTracking !== undefined)
        config.enableReferralTracking = script.dataset.enableReferralTracking !== 'false';
      if (script.dataset.respectDnt !== undefined)
        config.respectDNT = script.dataset.respectDnt !== 'false';
      if (script.dataset.debug !== undefined)
        config.debug = script.dataset.debug === 'true';
    }

    return config;
  }

  const CONFIG = getConfig();

  // Debug logging
  function log(...args) {
    if (CONFIG.debug) {
      console.log('[GA Microsite]', ...args);
    }
  }

  function warn(...args) {
    console.warn('[GA Microsite]', ...args);
  }

  // ==========================================================================
  // Utility Functions
  // ==========================================================================

  // Generate UUID v4
  function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const r = Math.random() * 16 | 0;
      const v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  // Get or create session ID
  function getSessionId() {
    const key = 'ga_session_id';
    let sessionId = null;

    try {
      sessionId = localStorage.getItem(key);
      if (!sessionId) {
        sessionId = uuidv4();
        localStorage.setItem(key, sessionId);
      }
    } catch (e) {
      // localStorage blocked (privacy mode), use cookie fallback
      const match = document.cookie.match(new RegExp('(^| )' + key + '=([^;]+)'));
      if (match) {
        sessionId = match[2];
      } else {
        sessionId = uuidv4();
        document.cookie = key + '=' + sessionId + '; path=/; max-age=1800; SameSite=Lax';
      }
    }

    return sessionId;
  }

  // Get UTM parameters from URL
  function getUtmParams() {
    const params = new URLSearchParams(window.location.search);
    return {
      utm_source: params.get('utm_source') || '',
      utm_medium: params.get('utm_medium') || '',
      utm_campaign: params.get('utm_campaign') || ''
    };
  }

  // HMAC-SHA256 signing using Web Crypto API
  async function hmacSign(message, secret) {
    const encoder = new TextEncoder();
    const keyData = encoder.encode(secret);
    const messageData = encoder.encode(message);

    try {
      const key = await crypto.subtle.importKey(
        'raw',
        keyData,
        { name: 'HMAC', hash: 'SHA-256' },
        false,
        ['sign']
      );

      const signature = await crypto.subtle.sign('HMAC', key, messageData);
      const hashArray = Array.from(new Uint8Array(signature));
      return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    } catch (e) {
      warn('HMAC signing failed:', e);
      return null;
    }
  }

  // Check if Do Not Track is enabled
  function isDNTEnabled() {
    return navigator.doNotTrack === '1' ||
           navigator.doNotTrack === 'yes' ||
           window.doNotTrack === '1';
  }

  // Storage helper with fallback
  const storage = {
    get: function(key) {
      try {
        return localStorage.getItem(key);
      } catch (e) {
        const match = document.cookie.match(new RegExp('(^| )' + key + '=([^;]+)'));
        return match ? decodeURIComponent(match[2]) : null;
      }
    },
    set: function(key, value, days) {
      days = days || 365;
      try {
        localStorage.setItem(key, value);
      } catch (e) {
        const expires = new Date(Date.now() + days * 864e5).toUTCString();
        document.cookie = key + '=' + encodeURIComponent(value) +
          '; expires=' + expires + '; path=/; SameSite=Lax';
      }
    }
  };

  // ==========================================================================
  // Tracking Beacon Module
  // ==========================================================================

  const TrackingBeacon = {
    init: function() {
      if (!CONFIG.enableTracking) {
        log('Tracking disabled by config');
        return;
      }

      if (CONFIG.respectDNT && isDNTEnabled()) {
        log('Tracking disabled - DNT enabled');
        return;
      }

      if (!CONFIG.siteId || !CONFIG.authKey) {
        warn('Tracking requires siteId and authKey');
        return;
      }

      this.trackPageview();
      log('Tracking beacon initialized');
    },

    trackPageview: async function() {
      const sessionId = getSessionId();
      const utm = getUtmParams();
      const timestamp = Date.now();

      // Build canonical signing string (URI-encoded, pipe-delimited)
      const canonicalParts = [
        encodeURIComponent(window.location.pathname),
        encodeURIComponent(document.title || ''),
        encodeURIComponent(document.referrer || ''),
        encodeURIComponent(sessionId),
        encodeURIComponent(utm.utm_source),
        encodeURIComponent(utm.utm_medium),
        encodeURIComponent(utm.utm_campaign),
        timestamp.toString()
      ];
      const canonicalString = canonicalParts.join('|');

      // Generate HMAC signature
      const signature = await hmacSign(canonicalString, CONFIG.authKey);
      if (!signature) {
        warn('Failed to generate tracking signature');
        return;
      }

      // Build payload
      const payload = {
        site_id: CONFIG.siteId,
        path: window.location.pathname,
        title: document.title || '',
        referrer: document.referrer || '',
        session_id: sessionId,
        utm_source: utm.utm_source,
        utm_medium: utm.utm_medium,
        utm_campaign: utm.utm_campaign,
        ts: timestamp,
        signature: signature
      };

      const endpoint = CONFIG.adminUrl + '/api/microsites/track';

      // Send using sendBeacon (preferred) or fetch fallback
      if (navigator.sendBeacon) {
        const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' });
        const sent = navigator.sendBeacon(endpoint, blob);
        log('Pageview tracked via sendBeacon:', sent, payload);
      } else {
        // Fallback for older browsers
        fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-GA-Site-ID': CONFIG.siteId
          },
          body: JSON.stringify(payload),
          keepalive: true
        }).then(() => {
          log('Pageview tracked via fetch:', payload);
        }).catch(err => {
          warn('Pageview tracking failed:', err);
        });
      }
    }
  };

  // ==========================================================================
  // Announcement Popup Module
  // ==========================================================================

  const AnnouncementPopup = {
    cachedAnnouncement: null,
    etag: null,

    init: function() {
      if (!CONFIG.enableAnnouncements) {
        log('Announcements disabled by config');
        return;
      }

      this.fetchAndShow();
      log('Announcement popup initialized');
    },

    fetchAndShow: async function() {
      const endpoint = CONFIG.adminUrl + '/api/announcements/global';

      try {
        const headers = {};
        const cachedEtag = storage.get('ga_announcement_etag');
        if (cachedEtag) {
          headers['If-None-Match'] = cachedEtag;
        }

        const response = await fetch(endpoint, {
          headers,
          cache: 'no-store'
        });

        if (response.status === 304) {
          // Use cached announcement
          const cached = storage.get('ga_announcement_cached');
          if (cached) {
            this.cachedAnnouncement = JSON.parse(cached);
            this.render(this.cachedAnnouncement);
          }
          return;
        }

        if (!response.ok) {
          log('No active announcement or fetch failed');
          return;
        }

        const data = await response.json();

        // Cache the response
        const newEtag = response.headers.get('ETag');
        if (newEtag) {
          storage.set('ga_announcement_etag', newEtag);
        }
        storage.set('ga_announcement_cached', JSON.stringify(data));

        this.cachedAnnouncement = data;
        this.render(data);
      } catch (err) {
        warn('Failed to fetch announcements:', err);

        // Try to use cached version
        const cached = storage.get('ga_announcement_cached');
        if (cached) {
          this.render(JSON.parse(cached));
        }
      }
    },

    isDismissed: function(announcementId) {
      const key = 'ga_dismissed_' + announcementId;
      const dismissedAt = storage.get(key);
      return !!dismissedAt;
    },

    dismiss: function(announcementId) {
      const key = 'ga_dismissed_' + announcementId;
      storage.set(key, Date.now().toString(), 365);

      const popup = document.getElementById('ga-announcement-popup');
      if (popup) {
        popup.style.display = 'none';
      }
      log('Announcement dismissed:', announcementId);
    },

    render: function(announcement) {
      if (!announcement || !announcement.is_active) {
        return;
      }

      // Check date range
      const now = new Date();
      if (announcement.start_date && new Date(announcement.start_date) > now) {
        return;
      }
      if (announcement.end_date && new Date(announcement.end_date) < now) {
        return;
      }

      // Check if dismissed
      if (this.isDismissed(announcement.id)) {
        log('Announcement already dismissed');
        return;
      }

      // Remove existing popup if any
      const existing = document.getElementById('ga-announcement-popup');
      if (existing) {
        existing.remove();
      }

      // Style colors based on type
      const styles = {
        info: { bg: '#e3f2fd', border: '#2196f3', text: '#1565c0' },
        warning: { bg: '#fff3e0', border: '#ff9800', text: '#e65100' },
        urgent: { bg: '#ffebee', border: '#f44336', text: '#c62828' }
      };
      const style = styles[announcement.style] || styles.info;

      // Create popup element
      const popup = document.createElement('div');
      popup.id = 'ga-announcement-popup';
      popup.innerHTML = `
        <div style="
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 999999;
          background: ${style.bg};
          border-bottom: 3px solid ${style.border};
          padding: 12px 50px 12px 20px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          font-size: 14px;
          line-height: 1.5;
          color: ${style.text};
          text-align: center;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        ">
          <span>${announcement.message}</span>
          <button id="ga-announcement-close" style="
            position: absolute;
            top: 50%;
            right: 15px;
            transform: translateY(-50%);
            background: transparent;
            border: none;
            font-size: 20px;
            cursor: pointer;
            color: ${style.text};
            opacity: 0.7;
            padding: 5px 10px;
          " aria-label="Close announcement">&times;</button>
        </div>
      `;

      document.body.insertBefore(popup, document.body.firstChild);

      // Add close handler
      const self = this;
      document.getElementById('ga-announcement-close').addEventListener('click', function() {
        self.dismiss(announcement.id);
      });

      log('Announcement rendered:', announcement.id);
    }
  };

  // ==========================================================================
  // Referral Tracking Module
  // ==========================================================================

  const ReferralTracking = {
    init: function() {
      if (!CONFIG.enableReferralTracking) {
        log('Referral tracking disabled by config');
        return;
      }

      this.processLinks();
      this.observeNewLinks();
      log('Referral tracking initialized');
    },

    shouldAddUtm: function(href) {
      try {
        const url = new URL(href, window.location.origin);

        // Check if it's a target domain
        const isTargetDomain = CONFIG.referralDomains.some(domain =>
          url.hostname === domain || url.hostname.endsWith('.' + domain)
        );

        if (!isTargetDomain) return false;

        // Skip if already has UTM params
        if (url.searchParams.has('utm_source')) return false;

        return true;
      } catch (e) {
        return false;
      }
    },

    addUtmParams: function(href) {
      try {
        const url = new URL(href, window.location.origin);
        url.searchParams.set('utm_source', window.location.hostname);
        url.searchParams.set('utm_medium', 'microsite');
        url.searchParams.set('utm_campaign', 'brand-referral');
        return url.toString();
      } catch (e) {
        return href;
      }
    },

    processLink: function(link) {
      const href = link.getAttribute('href');
      if (!href || link.dataset.gaProcessed) return;

      if (this.shouldAddUtm(href)) {
        link.setAttribute('href', this.addUtmParams(href));
        link.dataset.gaProcessed = 'true';
        log('UTM added to link:', link.href);
      }
    },

    processLinks: function() {
      const links = document.querySelectorAll('a[href]');
      links.forEach(link => this.processLink(link));
    },

    observeNewLinks: function() {
      const self = this;

      // Use MutationObserver to catch dynamically added links
      if (typeof MutationObserver !== 'undefined') {
        const observer = new MutationObserver(function(mutations) {
          mutations.forEach(function(mutation) {
            mutation.addedNodes.forEach(function(node) {
              if (node.nodeType === 1) {
                if (node.tagName === 'A') {
                  self.processLink(node);
                }
                // Also check children
                const links = node.querySelectorAll ? node.querySelectorAll('a[href]') : [];
                links.forEach(link => self.processLink(link));
              }
            });
          });
        });

        observer.observe(document.body, {
          childList: true,
          subtree: true
        });
      }
    }
  };

  // ==========================================================================
  // Public API
  // ==========================================================================

  window.GAMicrosite = {
    version: '1.0.0',
    config: CONFIG,

    // Manual tracking call
    track: function(eventData) {
      if (CONFIG.enableTracking) {
        log('Manual track event:', eventData);
        // Future: implement custom event tracking
      }
    },

    // Force show announcement (for testing)
    showAnnouncement: function() {
      AnnouncementPopup.fetchAndShow();
    },

    // Clear dismissed state (for testing)
    clearDismissed: function(announcementId) {
      const key = 'ga_dismissed_' + announcementId;
      try {
        localStorage.removeItem(key);
      } catch (e) {
        document.cookie = key + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
      }
    },

    // Re-process referral links
    processReferralLinks: function() {
      ReferralTracking.processLinks();
    }
  };

  // ==========================================================================
  // Initialization
  // ==========================================================================

  function init() {
    if (!CONFIG.siteId) {
      warn('Site ID not configured. Set data-site-id or window.GA_CONFIG.siteId');
      return;
    }

    log('Initializing with config:', CONFIG);

    TrackingBeacon.init();
    AnnouncementPopup.init();
    ReferralTracking.init();

    log('SDK fully initialized');
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})(window, document);
