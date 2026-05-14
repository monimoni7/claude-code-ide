import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import StickyCallBar from '@/components/StickyCallBar'
import EmergencyBanner from '@/components/EmergencyBanner'

export const metadata: Metadata = {
  title: {
    default: 'ProClimate HVAC & Roofing | Greater Phoenix Metro Area',
    template: '%s | ProClimate HVAC & Roofing',
  },
  description: 'Phoenix\'s most trusted HVAC & Roofing company. 24/7 emergency service, licensed & insured, free estimates. Serving Phoenix, Scottsdale, Tempe, Chandler, Gilbert & surrounding areas.',
  keywords: ['HVAC Phoenix', 'AC repair Phoenix', 'roofing Phoenix', 'emergency HVAC', '24/7 AC repair', 'roof replacement Phoenix'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'ProClimate HVAC & Roofing',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <EmergencyBanner />
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyCallBar />
      </body>
    </html>
  )
}
