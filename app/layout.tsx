import Aside from '@/components/common/Aside';
import GoToControls from '@/components/common/GoToControls';
import Header from '@/components/common/Header';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import { GeistSans } from 'geist/font/sans';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  keywords: [
    'Nikhil Thapa',
    'Frontend developer',
    'Front End developer',
    'Back End developer',
    'FullStack developer',
    'DevOps',
    'DevOps Engineer',
    'Engineer'
  ],
  authors: [
    {
      name: 'Nikhil Thapa',
      url: new URL(siteConfig.url)
    }
  ],
  creator: 'Nikhil Thapa',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: '@senior1ntern'
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png'
  },
  manifest: `${siteConfig.url}/site.webmanifest`
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={cn(GeistSans.className, 'flex justify-center')}>
        <Aside />
        <GoToControls />
        <div className="container flex min-h-screen flex-col">
          <Header />
          <main className="grow bg-[#EDF2F7]">{children}</main>
        </div>
      </body>
    </html>
  );
}
