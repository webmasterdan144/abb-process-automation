/**
 * Site-wide constants and configuration
 * Uses environment variables where available, with fallbacks for development
 */

export const SITE_CONFIG = {
  name: process.env.NEXT_PUBLIC_COMPANY_NAME || 'Gross Automation',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.freelance800fsales.com',
  phone: process.env.NEXT_PUBLIC_PHONE || '800-676-8553',
  email: process.env.NEXT_PUBLIC_EMAIL || 'info@grossautomation.com',
  description: 'Authorized ABB Process Automation distributor serving Wisconsin and the Midwest',
  tagline: 'Your Wisconsin Partner for ABB Process Automation',
} as const;

export const EXTERNAL_LINKS = {
  mainSite: process.env.NEXT_PUBLIC_MAIN_SITE_URL || 'https://www.grossautomation.com',
  freelanceSite: process.env.NEXT_PUBLIC_FREELANCE_SITE_URL || 'https://www.freelance800fsales.com',
  abbSite: 'https://new.abb.com/control-systems',
} as const;

export const PARENT_SEARCH = {
  baseUrl: 'https://www.grossautomation.com/products',
  manufacturer: 'ABBTOW',
} as const;

export const ANALYTICS = {
  gtmId: process.env.NEXT_PUBLIC_GTM_ID || 'G-0F775G82W4',
} as const;

export const SOCIAL_LINKS = {
  linkedin: 'https://www.linkedin.com/company/gross-automation',
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

export const NAV_ITEMS = [
  { label: 'Products', href: '/products' },
  { label: 'Services', href: '/services' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Support', href: '/support' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const;

export const PRODUCT_CATEGORIES = {
  CONTROLLERS: 'Controllers',
  DCS: 'Distributed Control Systems',
  IO_SYSTEMS: 'I/O Systems',
  ENGINEERING_TOOLS: 'Engineering Tools',
  SAFETY_SYSTEMS: 'Safety Systems',
  INSTRUMENTATION: 'Measurement & Analytics',
  DIGITAL: 'Digital Solutions',
} as const;

export const SERVICE_CATEGORIES = {
  INSTALLATION: 'Installation & Commissioning',
  TRAINING: 'Training & Education',
  SUPPORT: 'Technical Support',
  UPGRADES: 'System Upgrades',
  CONSULTING: 'Consulting Services',
  DIGITAL: 'Digital Transformation Services',
} as const;

export const BROCHURES = {
  symphonyPlus: 'https://gross-automation-prod.s3.amazonaws.com/manufacturers/1731614295267file',
  compactProductSuitePPT: 'https://gross-automation-prod.s3.amazonaws.com/manufacturers/1731607775046file',
  compactProductSuiteBrochure: 'https://gross-automation-prod.s3.amazonaws.com/manufacturers/1726519165804file',
} as const;
