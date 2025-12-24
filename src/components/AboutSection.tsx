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

        {/* Mission */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-lg mb-16 border border-peach/20">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-24 h-24 bg-gradient-to-br from-sage to-deep-sage rounded-2xl flex items-center justify-center flex-shrink-0">
              <span className="text-4xl">🎯</span>
            </div>
            <div>
              <h3 className="font-display font-bold text-2xl text-navy mb-3">
                {t('mission')}
              </h3>
              <p className="text-charcoal/70 text-lg">
                {t('missionText')}
              </p>
            </div>
          </div>
        </div>

        {/* Our Story */}
        <div className="mb-16">
          <h3 className="font-display font-bold text-2xl text-navy text-center mb-10">
            {t('story.title')}
          </h3>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* 左侧图片 - David & Potato */}
            <div className="relative rounded-2xl aspect-[3/4] overflow-hidden border border-peach/20 shadow-lg">
              <Image
                src="/images/david&potato.png"
                alt="david&potato"
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
            <div>
              <p className="text-charcoal/70 text-lg leading-relaxed">
                {t('story.paragraph3')}
              </p>
            </div>
            {/* 右侧图片 - Frank & Lilwhite */}
            <div className="relative rounded-2xl aspect-[3/4] overflow-hidden border border-sage/20 shadow-lg">
              <Image
                src="/images/frank&lilwhite.png"
                alt="frank&lilwhite"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Values */}
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