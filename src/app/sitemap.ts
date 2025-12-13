import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://grossautomation.com'
  const lastModified = new Date()

  // Static pages with priorities and change frequencies optimized for SEO
  const staticPages = [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/products`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/solutions`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/support`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/quote`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
  ]

  // Product pages - high priority for commercial terms
  const productPages = [
    {
      url: `${baseUrl}/products/freelance`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/products/800xa`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/products/compact-control`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/products/io-systems`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/products/controllers`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ]

  // Location-based pages for local SEO
  const locationPages = [
    {
      url: `${baseUrl}/wisconsin-abb-automation`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ]

  // Service-specific pages
  const servicePages = [
    {
      url: `${baseUrl}/services/integration`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services/commissioning`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/services/maintenance`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/services/training`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/services/engineering`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
  ]

  return [
    ...staticPages,
    ...productPages,
    ...locationPages,
    ...servicePages,
  ]
}