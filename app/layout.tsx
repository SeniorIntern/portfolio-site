import Aside from '@/components/common/Aside';
import GoToControls from '@/components/common/GoToControls';
import Header from '@/components/common/Header';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Nikhil Thapa',
  description: 'Portfolio Website Of Nikhil Thapa'
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={cn(inter.className, 'container flex min-h-screen flex-col')}
      >
        <Header />
        <Aside />
        <GoToControls />
        <main className="grow bg-[#EDF2F7]">{children}</main>
      </body>
    </html>
  );
}

/*
 */
