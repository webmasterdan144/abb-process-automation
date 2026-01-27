import React from 'react';
import HeroSection from '@/components/HeroSection';
import ProductsShowcase from '@/components/ProductsShowcase';
import ServicesSection from '@/components/ServicesSection';
import CTASection from '@/components/CTASection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ProductsShowcase />
      <ServicesSection />
      <CTASection />
    </main>
  );
}
