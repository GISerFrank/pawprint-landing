'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const switchLocale = (newLocale: string) => {
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPath);
  };

  const navLinks = [
    { href: '#about', label: t('about') },
    { href: '#product', label: t('product') },
    { href: '#demo', label: t('demo') },
    { href: '#contact', label: t('contact') },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-warm-white/90 backdrop-blur-md border-b border-peach/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div 
            className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <span className="text-xl">🐾</span>
            <div className="relative w-16 h-16">
              <Image 
                src="/favicon.png" 
                alt="PawPrint Logo" 
                width={64} 
                height={64}
                className="object-contain"
              />
            </div>
            <span className="text-xl">🐾</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-medium text-charcoal/70 hover:text-terracotta transition-colors"
              >
                {link.label}
              </a>
            ))}

            {/* Language Switcher */}
            <div className="flex items-center gap-1 bg-cream rounded-full p-1">
              <button
                onClick={() => switchLocale('en')}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
                  locale === 'en'
                    ? 'bg-terracotta text-white'
                    : 'text-charcoal/60 hover:text-charcoal'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => switchLocale('zh')}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
                  locale === 'zh'
                    ? 'bg-terracotta text-white'
                    : 'text-charcoal/60 hover:text-charcoal'
                }`}
              >
                中文
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-charcoal"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-peach/30">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-2 font-medium text-charcoal/70 hover:text-terracotta"
              >
                {link.label}
              </a>
            ))}
            <div className="flex gap-2 mt-4">
              <button
                onClick={() => switchLocale('en')}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  locale === 'en' ? 'bg-terracotta text-white' : 'bg-cream text-charcoal'
                }`}
              >
                English
              </button>
              <button
                onClick={() => switchLocale('zh')}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  locale === 'zh' ? 'bg-terracotta text-white' : 'bg-cream text-charcoal'
                }`}
              >
                中文
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
