import './globals.css';
import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import LenisProvider from '@/components/providers/LenisProvider';
import { ThemeProvider } from '@/components/providers/ThemeProvider';

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  weight: ['300', '400', '500', '600', '700']
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://cohopers.in';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Cohopers - Premium Coworking Spaces in Bhubaneswar',
    template: '%s | Cohopers'
  },
  description: 'Join a thriving community of entrepreneurs, freelancers, and innovators in our premium coworking spaces at DLF Cybercity, Bhubaneswar. Modern amenities, flexible plans, and networking opportunities.',
  keywords: ['coworking space', 'Bhubaneswar', 'DLF Cybercity', 'shared office', 'hot desk', 'private office', 'meeting rooms', 'workspace', 'startup', 'freelancer'],
  authors: [{ name: 'Cohopers' }],
  creator: 'Cohopers',
  publisher: 'Cohopers',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteUrl,
    title: 'Cohopers - Premium Coworking Spaces in Bhubaneswar',
    description: 'Join a thriving community of entrepreneurs, freelancers, and innovators in our premium coworking spaces at DLF Cybercity, Bhubaneswar.',
    siteName: 'Cohopers',
    images: [
      {
        url: `${siteUrl}/images/hero/hero-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Cohopers Coworking Space',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cohopers - Premium Coworking Spaces in Bhubaneswar',
    description: 'Join a thriving community of entrepreneurs, freelancers, and innovators in our premium coworking spaces.',
    images: [`${siteUrl}/images/hero/hero-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add verification codes when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${spaceGrotesk.className}`} suppressHydrationWarning>
        <ThemeProvider>
          <LenisProvider>
            {children}
          </LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
