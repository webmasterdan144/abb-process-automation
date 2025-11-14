/**
 * Site-wide constants and configuration
 * Uses environment variables where available, with fallbacks for development
 */

export const SITE_CONFIG = {
  name: process.env.NEXT_PUBLIC_COMPANY_NAME || 'Gross Automation',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://grossautomation.com',
  phone: process.env.NEXT_PUBLIC_PHONE || '800-676-8553',
  email: process.env.NEXT_PUBLIC_EMAIL || 'info@grossautomation.com',
  description: 'Premier ABB Process Automation Solutions Provider in Wisconsin',
  tagline: 'Your Wisconsin Partner for ABB Process Automation Excellence',
} as const;

export const EXTERNAL_LINKS = {
  mainSite: process.env.NEXT_PUBLIC_MAIN_SITE_URL || 'https://www.grossautomation.com',
  freelanceSite: process.env.NEXT_PUBLIC_FREELANCE_SITE_URL || 'https://www.freelance800fsales.com',
  abbSite: 'https://new.abb.com/control-systems',
} as const;

export const ANALYTICS = {
  gtmId: process.env.NEXT_PUBLIC_GTM_ID || 'G-0F775G82W4',
} as const;

export const SOCIAL_LINKS = {
  linkedin: 'https://www.linkedin.com/company/gross-automation',
  // Add more social links as needed
} as const;

export const CONTACT_INFO = {
  address: {
    street: '3680 N. 126th St.',
    city: 'Brookfield',
    state: 'WI',
    zip: '53005',
  },
  hours: {
    weekdays: '8:00 AM - 5:00 PM CST',
    weekend: 'Closed',
  },
} as const;

// Navigation structure for consistent site navigation
export const NAV_ITEMS = [
  { label: 'Products', href: '/products' },
  { label: 'Services', href: '/services' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Support', href: '/support' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const;

// Product categories for filtering and organization
export const PRODUCT_CATEGORIES = {
  CONTROLLERS: 'Controllers',
  DCS: 'Distributed Control Systems',
  IO_SYSTEMS: 'I/O Systems',
  ENGINEERING_TOOLS: 'Engineering Tools',
  SAFETY_SYSTEMS: 'Safety Systems',
} as const;

// Service categories
export const SERVICE_CATEGORIES = {
  INSTALLATION: 'Installation & Commissioning',
  TRAINING: 'Training & Education',
  SUPPORT: 'Technical Support',
  UPGRADES: 'System Upgrades',
  CONSULTING: 'Consulting Services',
} as const;
