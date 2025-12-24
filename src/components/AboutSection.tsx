'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function AboutSection() {
  const t = useTranslations('about');

  const values = [
    { key: 'care', icon: '💝' },
    { key: 'innovation', icon: '🚀' },
    { key: 'community', icon: '🤝' },
  ];

  return (
    <section id="about" className="py-24 bg-cream relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-peach/30 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-navy mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
            {t('description')}
          </p>
        </div>

        {/* Our Story */}
        <div className="mb-16">
          <h3 className="font-display font-bold text-2xl text-navy text-center mb-10">
            {t('story.title')}
          </h3>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* 左侧图片 */}
            <div className="relative rounded-2xl aspect-[4/3] overflow-hidden border border-peach/20 shadow-lg">
              <Image
                src="/images/frank-lilwhite.png"
                alt={t('story.image1Alt')}
                fill
                className="object-cover"
              />
            </div>
            {/* 右侧文字 */}
            <div>
              <p className="text-charcoal/70 text-lg leading-relaxed mb-6">
                {t('story.paragraph1')}
              </p>
              <p className="text-charcoal/70 text-lg leading-relaxed">
                {t('story.paragraph2')}
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
            {/* 左侧文字 */}
            <div className="order-2 md:order-1">
              <p className="text-charcoal/70 text-lg leading-relaxed">
                {t('story.paragraph3')}
              </p>
            </div>
            {/* 右侧图片 */}
            <div className="order-1 md:order-2 relative rounded-2xl aspect-[4/3] overflow-hidden border border-sage/20 shadow-lg">
              <Image
                src="/images/david-potato.png"
                alt={t('story.image2Alt')}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Our Mission */}
        <div className="mb-16">
          <h3 className="font-display font-bold text-2xl text-navy text-center mb-6">
            {t('mission')}
          </h3>
          <p className="text-charcoal/70 text-lg text-center max-w-3xl mx-auto">
            {t('missionText')}
          </p>
        </div>

        {/* Our Values */}
        <h3 className="font-display font-bold text-2xl text-navy text-center mb-8">
          {t('values.title')}
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          {values.map(({ key, icon }) => (
            <div
              key={key}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow border border-peach/10 group"
            >
              <div className="w-16 h-16 bg-peach/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-3xl">{icon}</span>
              </div>
              <h4 className="font-display font-bold text-xl text-navy mb-3">
                {t(`values.${key}.title`)}
              </h4>
              <p className="text-charcoal/60">
                {t(`values.${key}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
