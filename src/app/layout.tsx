import type { Metadata, Viewport } from 'next'
import './globals.css'
import { LanguageProvider } from '@/context/LanguageContext'

export const metadata: Metadata = {
  title: 'Neue Liebe – Restaurant • Terrasse • Tanz & Events | Nebra (Unstrut)',
  description:
    'Restaurant Neue Liebe in Nebra (Unstrut) – Genießen Sie exquisite Küche, romantische Terrasse und unvergessliche Events. Restaurant Nebra Unstrut. Täglich geöffnet bis 23 Uhr.',
  keywords: [
    'Restaurant Nebra',
    'Restaurant Unstrut',
    'Restaurant Nebra Terrasse',
    'Neue Liebe Nebra',
    'Restaurant Sachsen-Anhalt',
    'Gastronomie Nebra',
    'Hochzeit Nebra',
    'Events Nebra',
  ],
  openGraph: {
    title: 'Neue Liebe – Restaurant Nebra (Unstrut)',
    description: 'Exquisite Küche, romantische Terrasse und unvergessliche Events in Nebra.',
    type: 'website',
    locale: 'de_DE',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
