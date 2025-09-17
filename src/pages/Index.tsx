import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ServiceCards from '@/components/ServiceCards';
import CountryHighlights from '@/components/CountryHighlights';
import JobCategories from '@/components/JobCategories';
import USPSection from '@/components/USPSection';
import JobBoardPreview from '@/components/JobBoardPreview';
import SuccessCarousel from '@/components/SuccessCarousel';
import BlogTeasers from '@/components/BlogTeasers';
import CTAStrip from '@/components/CTAStrip';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
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
      <Footer />
    </div>
  );
};

export default Index;
