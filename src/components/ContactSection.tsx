'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';

export default function ContactSection() {
  const t = useTranslations('contact');
  const [revealedItems, setRevealedItems] = useState<Set<string>>(new Set());

  const toggleReveal = (key: string) => {
    setRevealedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(key)) {
        newSet.delete(key);
      } else {
        newSet.add(key);
      }
      return newSet;
    });
  };

  const contactInfo = [
    {
      key: 'email',
      icon: '✉️',
      value: 'pawprint.connection@gmail.com', // TODO: 替换为真实邮箱
      href: 'mailto:pawprint.connection@gmail.com',
    },
    {
      key: 'phone',
      icon: '📱',
      value: '+1 (480) 498-1557', // TODO: 替换为真实电话
      href: 'tel:+14804981557',
    },
    {
      key: 'linkedin',
      icon: '💼',
      value: 'PawPrint',
      href: 'https://linkedin.com/company/pawprint', // TODO: 替换为真实链接
    },
  ];

  return (
    <section id="contact" className="py-24 bg-navy relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-terracotta via-coral to-sage" />
      <div className="absolute top-20 right-10 w-32 h-32 bg-sage/10 rounded-full blur-2xl" />
      <div className="absolute bottom-10 left-10 w-24 h-24 bg-coral/10 rounded-full blur-2xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-white/70">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          {contactInfo.map(({ key, icon, value, href }) => {
            const isRevealed = revealedItems.has(key);
            
            return (
              <div
                key={key}
                className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all text-center"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-terracotta to-coral rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-2xl">{icon}</span>
                </div>
                <h3 className="text-white/60 text-sm mb-2">{t(key)}</h3>
                
                {isRevealed ? (
                  <a
                    href={href}
                    target={key === 'linkedin' ? '_blank' : undefined}
                    rel={key === 'linkedin' ? 'noopener noreferrer' : undefined}
                    className="text-white font-medium hover:text-coral transition-colors break-all text-sm"
                  >
                    {value}
                  </a>
                ) : (
                  <button
                    onClick={() => toggleReveal(key)}
                    className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white/80 text-sm rounded-full transition-all"
                  >
                    Click to reveal
                  </button>
                )}
              </div>
            );
          })}
        </div>

        {/* Social follow */}
        <div className="mt-16 text-center">
          <p className="text-white/60 mb-4">{t('followUs')}</p>
          <div className="flex justify-center gap-4">
            {['twitter', 'instagram', 'facebook'].map((social) => (
              <a
                key={social}
                href={`https://${social}.com/pawprint`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                {social === 'twitter' && (
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                )}
                {social === 'instagram' && (
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                )}
                {social === 'facebook' && (
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
