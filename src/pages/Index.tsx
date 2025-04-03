
import React, { useEffect } from 'react';
import HeroSection from '@/components/home/HeroSection';
import SpecialtiesSection from '@/components/home/SpecialtiesSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CTASection from '@/components/home/CTASection';
import BlogPreviewSection from '@/components/home/BlogPreviewSection';

const Index = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HeroSection />
      <SpecialtiesSection />
      <TestimonialsSection />
      <BlogPreviewSection />
      <CTASection />
    </>
  );
};

export default Index;
