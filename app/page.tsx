"use client";

import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import WhyChooseUs from '@/components/WhyChooseUs';
import BeforeAfter from '@/components/BeforeAfter';
import CtaFirst from '@/components/CtaFirst';
import ServicesSection from '@/components/ServicesSection';
import ReviewsSection from '@/components/ReviewsSection';
import CtaSecond from '@/components/CtaSecond';
import BrandsSection from '@/components/BrandsSection';
import FaqSection from '@/components/FaqSection';

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats/>
      <WhyChooseUs />
      <BeforeAfter />
      <CtaFirst />
      <ServicesSection />
      <ReviewsSection />
      <CtaSecond />
      <BrandsSection />
      <FaqSection />
    </main>
  );
}
