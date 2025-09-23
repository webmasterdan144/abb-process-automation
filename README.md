# ABB Process Automation Website

A modern, responsive website for ABB Process Automation solutions built with Next.js 15, TypeScript, and Tailwind CSS. This website showcases ABB's comprehensive automation portfolio including Freelance DCS, System 800xA, and Compact Control systems.

## 🚀 Features

- **Modern Design**: Clean, professional design following ABB branding guidelines
- **Responsive Layout**: Fully responsive design optimized for all devices
- **SEO Optimized**: Comprehensive SEO implementation with structured data
- **Performance Focused**: Built with Next.js 15 and optimized for speed
- **Lead Generation**: Advanced contact forms with project qualification
- **Product Showcase**: Detailed product pages for ABB automation systems
- **Analytics Ready**: Google Analytics integration for tracking

## 🛠 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS v4 with custom ABB branding
- **Typography**: Geist Sans and Geist Mono fonts
- **Icons**: Lucide React icons
- **Animations**: Framer Motion (installed)
- **Language**: TypeScript
- **Package Manager**: npm

## 📦 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── contact/           # Contact page with lead form
│   ├── products/          # Product pages
│   │   ├── freelance/     # ABB Freelance DCS
│   │   └── 800xa/         # ABB System 800xA
│   ├── layout.tsx         # Root layout with SEO
│   ├── page.tsx           # Homepage
│   ├── globals.css        # Global styles with ABB branding
│   ├── sitemap.ts         # Dynamic sitemap generation
│   └── robots.ts          # Robots.txt configuration
└── components/            # Reusable React components
    ├── Header.tsx         # Navigation header
    ├── Footer.tsx         # Site footer
    ├── HeroSection.tsx    # Homepage hero
    ├── ProductsShowcase.tsx # Products grid
    ├── ServicesSection.tsx  # Services overview
    └── CTASection.tsx     # Call-to-action section
```

## 🎨 ABB Brand Colors

The website implements ABB's official brand colors:

- **Primary Red**: `#FF000F` (ABB signature red)
- **Primary Dark**: `#CC000C` (Darker red variant)
- **Blue**: `#1E88E5` (Accent color)
- **Green**: `#34A853` (Success/positive actions)
- **Gray Scale**: Complete gray palette from 50-900

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

1. Navigate to the project directory:
```bash
cd abb-process-automation
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📱 Pages & Features

### Homepage (`/`)
- **Hero Section**: Compelling introduction to ABB automation solutions
- **Products Showcase**: Overview of key product categories
- **Services Section**: Comprehensive service offerings
- **CTA Section**: Lead generation with multiple contact options

### Product Pages
- **ABB Freelance DCS** (`/products/freelance`): Complete DCS solution overview
- **System 800xA** (`/products/800xa`): Extended automation platform details
- **Additional Products**: Controllers, I/O systems, Compact Control

### Contact Page (`/contact`)
- **Advanced Lead Form**: Comprehensive project qualification form
- **Contact Information**: Multiple contact methods and office details
- **Project Flow**: Clear explanation of the consultation process

## 🔧 Configuration

### Google Analytics
Update the Google Analytics ID in `src/app/layout.tsx`:
```typescript
gtag('config', 'YOUR-GA-MEASUREMENT-ID');
```

### SEO Configuration
Update metadata in `src/app/layout.tsx` for:
- Open Graph tags
- Twitter Card data
- Google verification codes
- Structured data markup

### Contact Form
The contact form includes:
- Personal and company information capture
- Project type and industry selection
- Budget and timeline qualification
- Detailed requirements gathering

## 🎯 Lead Generation Features

- **Multi-step Contact Process**: Guided user journey from interest to consultation
- **Project Qualification**: Detailed forms to qualify leads effectively
- **Multiple Contact Channels**: Phone, email, and form-based contact
- **Response Time Commitment**: 24-hour response guarantee
- **Expert Consultation**: Direct connection to certified ABB specialists

## 📊 SEO & Analytics

### Implemented SEO Features
- Meta tags and descriptions for all pages
- Open Graph and Twitter Card markup
- Structured data (JSON-LD) for organization info
- XML sitemap generation
- Robots.txt configuration
- Semantic HTML structure
- Mobile-first responsive design

### Analytics Tracking
- Google Analytics 4 integration
- Event tracking for form submissions
- Page view and user behavior analytics
- Conversion tracking setup

## 🚀 Deployment

### Recommended Hosting Platforms
- **Vercel** (Optimal for Next.js)
- **Netlify**
- **AWS Amplify**
- **Traditional hosting** (with Node.js support)

### Environment Variables
Set up the following environment variables:
```bash
NEXT_PUBLIC_GA_MEASUREMENT_ID=your-ga-id
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## 🔄 Maintenance

### Regular Updates
- Review and update product information quarterly
- Monitor Google Analytics for performance insights
- Update contact information as needed
- Refresh case studies and testimonials

### Content Management
- Product specifications and features
- Service offerings and capabilities
- Contact information and office hours
- Pricing and promotional content

## 📞 Support

For technical support or customization requests:

**Gross Automation**
- Phone: 262-252-1600
- Email: info@grossautomation.com
- Address: 3680 N. 126th St., Brookfield, WI 53005

## 📄 License

This project is proprietary software owned by Gross Automation. All rights reserved.

---

**Built with ❤️ for ABB Process Automation Excellence**
