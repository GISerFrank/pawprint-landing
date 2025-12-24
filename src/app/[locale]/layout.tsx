import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { redirect } from 'next/navigation';
import { locales } from '@/i18n';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

// 2. <<< 新增的部分：在这里定义 metadata
export const metadata: Metadata = {
  title: 'PawPrint', // 你的网站标题
  description: 'AI-powered pet health insights', // 你的网站描述
  icons: {
    icon: '/favicon.png', // 这里指向 public/favicon.png
    // 如果你有苹果专用图标：
    // apple: '/apple-touch-icon.png',
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  if (!locales.includes(locale as any)) {
    redirect('/en');
  }

  setRequestLocale(locale);
  const messages = await getMessages({ locale });

  return (
    <html lang={locale}>
      <body className="min-h-screen flex flex-col">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}