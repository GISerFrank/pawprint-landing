'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function ProductSection() {
  const t = useTranslations('product');

  const features = [
    { key: 'health', icon: '📋', color: 'from-terracotta to-coral' },
    { key: 'ai', icon: '🤖', color: 'from-sage to-deep-sage' },
    { key: 'reminders', icon: '⏰', color: 'from-gold to-terracotta' },
    { key: 'community', icon: '🐾', color: 'from-navy to-charcoal' },
  ];

  return (
    <section id="product" className="py-24 bg-warm-white relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sage/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-navy mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ key, icon, color }) => (
            <div
              key={key}
              className="group relative bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-peach/10 overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-5 transition-opacity`} />
              
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                <span className="text-2xl">{icon}</span>
              </div>
              <h3 className="font-display font-bold text-lg text-navy mb-2">
                {t(`features.${key}.title`)}
              </h3>
              <p className="text-charcoal/60 text-sm leading-relaxed">
                {t(`features.${key}.description`)}
              </p>
            </div>
          ))}
        </div>

        {/* App showcase */}
        <div className="mt-20 relative">
          <div className="bg-gradient-to-r from-peach/30 via-cream to-sage/20 rounded-3xl p-8 sm:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-navy mb-4">
                  Designed for Pet Parents
                </h3>
                <ul className="space-y-4">
                  {['Intuitive dashboard', 'Beautiful visualizations', 'Seamless sync across devices', 'Dark mode support'].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="w-6 h-6 bg-sage rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-charcoal/70">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-center">
                {/* Phone mockup with real screenshot */}
                <div className="relative w-56 h-[450px] bg-charcoal rounded-[2.5rem] p-2 shadow-2xl">
                  <div className="relative w-full h-full rounded-[2rem] overflow-hidden">
                    <Image
                      src="/images/pawprint-carepage.png"
                      alt="PawPrint Care Page"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}