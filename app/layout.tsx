import './global.css';
import type { Viewport, Metadata } from 'next';
import type { ReactNode } from 'react';
import { Geist, Geist_Mono } from 'next/font/google';
import { RootProvider } from '@hanzo/docs/ui/provider/next';

export const metadata: Metadata = {
  title: {
    template: '%s | Web3 Alliance',
    default: 'Web3 Alliance Docs',
  },
  description: 'Documentation for the Web3 Alliance (W3A) — a federated network of licensed banks, brokers, transfer agents, fund managers, and crypto-asset service providers operating under one post-quantum-secure substrate, one multi-tier licensing regime, and one coordination layer.',
  openGraph: {
    title: 'Web3 Alliance Docs',
    description: 'Federated regulated financial infrastructure on a post-quantum substrate.',
    url: 'https://docs.w3a.foundation',
    siteName: 'Web3 Alliance',
  },
};

const geist = Geist({
  variable: '--font-sans',
  subsets: ['latin'],
});

const mono = Geist_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
});

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
