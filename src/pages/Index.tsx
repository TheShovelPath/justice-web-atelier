
import React, { useEffect } from 'react';
import HeroSection from '@/components/home/HeroSection';
import SpecialtiesSection from '@/components/home/SpecialtiesSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CTASection from '@/components/home/CTASection';
import BlogPreviewSection from '@/components/home/BlogPreviewSection';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Index = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <SpecialtiesSection />
        <TestimonialsSection />
        <BlogPreviewSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
