'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import HeroSection from '@/components/HeroSection';
import PetShowcase from '@/components/PetShowcase';
import AboutSection from '@/components/AboutSection';
import ProductSection from '@/components/ProductSection';
import DemoSection from '@/components/DemoSection';
import ContactSection from '@/components/ContactSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PetShowcase />
      <AboutSection />
      <ProductSection />
      <DemoSection />
      <ContactSection />
    </>
  );
}