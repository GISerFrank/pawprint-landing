'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';

export default function Footer() {
  const t = useTranslations('footer');
  const locale = useLocale();

  return (
    <footer className="bg-charcoal py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Logo & Copyright */}
          <div className="flex items-center gap-2">
            <span className="text-2xl">🐾</span>
            <span className="text-white/60 text-sm">{t('copyright')}</span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm">
            <Link href={`/${locale}/privacy`} className="text-white/60 hover:text-white transition-colors">
              {t('privacy')}
            </Link>
            <Link href={`/${locale}/terms`} className="text-white/60 hover:text-white transition-colors">
              {t('terms')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
