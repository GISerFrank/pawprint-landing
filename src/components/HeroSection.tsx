'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function HeroSection() {
  const t = useTranslations('hero');

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden paw-pattern">
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-peach/40 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-sage/30 rounded-full blur-3xl" />
      <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-gold/40 rounded-full blur-2xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left animate-fade-in-up">
            <span className="inline-block px-4 py-2 bg-sage/20 text-deep-sage font-semibold rounded-full text-sm mb-6">
              {t('tagline')}
            </span>
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-navy leading-tight mb-6">
              {t('title')}
            </h1>
            <p className="text-lg text-charcoal/70 mb-8 max-w-xl mx-auto lg:mx-0">
              {t('subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#demo"
                className="px-8 py-4 bg-gradient-to-r from-terracotta to-coral text-white font-semibold rounded-full hover:shadow-lg hover:shadow-coral/30 transform hover:-translate-y-1 transition-all"
              >
                {t('cta')}
              </a>
              <a
                href="#product"
                className="px-8 py-4 border-2 border-navy/20 text-navy font-semibold rounded-full hover:bg-navy hover:text-white transition-all"
              >
                {t('learnMore')}
              </a>
            </div>
          </div>

          {/* Illustration / App Preview */}
          <div className="relative animate-float">
            <div className="relative mx-auto w-72 h-[580px] bg-charcoal rounded-[3rem] p-3 shadow-2xl">
              <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden">
                <Image
                  src="/images/pawprint-homepage.jpeg"
                  alt="PawPrint App Homepage"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-gold rounded-2xl flex items-center justify-center shadow-lg animate-float" style={{ animationDelay: '0.5s' }}>
              <span className="text-2xl">❤️</span>
            </div>
            <div className="absolute top-1/4 -right-8 w-14 h-14 bg-sage rounded-2xl flex items-center justify-center shadow-lg animate-float" style={{ animationDelay: '1s' }}>
              <span className="text-xl">📊</span>
            </div>
            <div className="absolute bottom-1/4 -left-6 w-12 h-12 bg-peach rounded-xl flex items-center justify-center shadow-lg animate-float" style={{ animationDelay: '1.5s' }}>
              <span className="text-lg">🔔</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
