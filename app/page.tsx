"use client";

import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import WhyChooseUs from '@/components/WhyChooseUs';
import BeforeAfter from '@/components/BeforeAfter';
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
      <ReviewsSection />
      <CtaSecond />
      <BrandsSection />
      <FaqSection />
    </main>
  );
}
