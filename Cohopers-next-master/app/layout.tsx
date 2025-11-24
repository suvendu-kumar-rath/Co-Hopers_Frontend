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

export const metadata: Metadata = {
  title: 'Cohopers - Premium Coworking Spaces in Bhubaneswar',
  description: 'Join a thriving community of entrepreneurs, freelancers, and innovators in our premium coworking spaces at DLF Cybercity, Bhubaneswar. Modern amenities, flexible plans, and networking opportunities.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.className}`}>
        <ThemeProvider>
          <LenisProvider>
            {children}
          </LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
