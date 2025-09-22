import React from 'react';
import SiteHeader from '@/components/layout/SiteHeader';
import Hero from '@/components/Hero';
import ServiceCards from '@/components/ServiceCards';
import CountryHighlights from '@/components/CountryHighlights';
import JobCategories from '@/components/JobCategories';
import USPSection from '@/components/USPSection';
import JobBoardPreview from '@/components/JobBoardPreview';
import SuccessCarousel from '@/components/SuccessCarousel';
import BlogTeasers from '@/components/BlogTeasers';
import CTAStrip from '@/components/CTAStrip';
import SiteFooter from '@/components/layout/SiteFooter';
import SEO from '@/components/SEO';

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Espanova"
        description="Your trusted partner for overseas employment, Hajj & Umrah, tourism, and comprehensive travel services. Connecting dreams with opportunities."
      />
      <SiteHeader />
      <main>
        <Hero />
        <ServiceCards />
        <CountryHighlights />
        <JobCategories />
        <USPSection />
        <JobBoardPreview />
        <SuccessCarousel />
        <BlogTeasers />
        <CTAStrip />
      </main>
      <SiteFooter />
    </div>
  );
};

export default Index;
