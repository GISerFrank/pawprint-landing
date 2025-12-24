'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';

export default function DemoSection() {
  const t = useTranslations('demo');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    pets: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // TODO: 集成邮件服务（Resend）
      const response = await fetch('/api/demo-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', pets: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="demo" className="py-24 bg-gradient-to-br from-peach/40 via-cream to-sage/20 relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-coral/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-sage/20 rounded-full blur-3xl" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-navy mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-charcoal/70">
            {t('subtitle')}
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 border border-peach/20">
          {status === 'success' ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-sage/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">🎉</span>
              </div>
              <h3 className="font-display font-bold text-2xl text-navy mb-2">
                {t('form.success')}
              </h3>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    {t('form.name')} *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-peach/30 focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 outline-none transition-all bg-cream/30"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    {t('form.email')} *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-peach/30 focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 outline-none transition-all bg-cream/30"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    {t('form.phone')}
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-peach/30 focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 outline-none transition-all bg-cream/30"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    {t('form.pets')}
                  </label>
                  <select
                    value={formData.pets}
                    onChange={(e) => setFormData({ ...formData, pets: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-peach/30 focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 outline-none transition-all bg-cream/30"
                  >
                    <option value="">--</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4+">4+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">
                  {t('form.message')}
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-peach/30 focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 outline-none transition-all bg-cream/30 resize-none"
                />
              </div>

              {status === 'error' && (
                <p className="text-coral text-sm">{t('form.error')}</p>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full py-4 bg-gradient-to-r from-terracotta to-coral text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-coral/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? t('form.submitting') : t('form.submit')}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
