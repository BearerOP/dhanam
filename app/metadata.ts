// app/metadata.ts
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dhanam',
  description: 'Your Personal Web3 Wallet.',
  icons: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      url: '/favicon-light.ico',
      media: '(prefers-color-scheme: light)',
    },
    {
      rel: 'icon',
      type: 'image/png',
      url: '/favicon-dark.ico',
      media: '(prefers-color-scheme: dark)',
    },
  ],
};