import { SITE_CONFIG, EXTERNAL_LINKS, CONTACT_INFO, NAV_ITEMS } from '@/lib/constants';

describe('SITE_CONFIG', () => {
  it('has correct default URL', () => {
    expect(SITE_CONFIG.url).toContain('abbautomationsales.com');
  });

  it('has required fields', () => {
    expect(SITE_CONFIG.name).toBeDefined();
    expect(SITE_CONFIG.url).toBeDefined();
    expect(SITE_CONFIG.phone).toBeDefined();
    expect(SITE_CONFIG.email).toBeDefined();
    expect(SITE_CONFIG.description).toBeDefined();
  });

  it('does not contain old domain', () => {
    expect(SITE_CONFIG.url).not.toContain('freelance800fsales');
  });
});

describe('EXTERNAL_LINKS', () => {
  it('has abbAutomationSite key', () => {
    expect(EXTERNAL_LINKS.abbAutomationSite).toBeDefined();
    expect(EXTERNAL_LINKS.abbAutomationSite).toContain('abbautomationsales.com');
  });

  it('does not contain old domain references', () => {
    const allValues = Object.values(EXTERNAL_LINKS).join(' ');
    expect(allValues).not.toContain('freelance800fsales');
  });
});

describe('CONTACT_INFO', () => {
  it('has address fields', () => {
    expect(CONTACT_INFO.address.street).toBeDefined();
    expect(CONTACT_INFO.address.city).toBe('Brookfield');
    expect(CONTACT_INFO.address.state).toBe('WI');
    expect(CONTACT_INFO.address.zip).toBe('53005');
  });
});

describe('NAV_ITEMS', () => {
  it('has expected navigation items', () => {
    const labels = NAV_ITEMS.map(item => item.label);
    expect(labels).toContain('Products');
    expect(labels).toContain('Services');
    expect(labels).toContain('Contact');
  });

  it('all items have href starting with /', () => {
    NAV_ITEMS.forEach(item => {
      expect(item.href).toMatch(/^\//);
    });
  });
});
