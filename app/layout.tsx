import type { Metadata } from 'next'
import { Inter, Rajdhani } from 'next/font/google'
import './globals.css'
import { ConditionalNavbar, ConditionalFooter } from '@/components/ConditionalLayout'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const rajdhani = Rajdhani({ 
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-rajdhani'
})

export const metadata: Metadata = {
  metadataBase: new URL('https://masterclass.essokacybersecuritydiv.com'),
  title: {
    default: 'ECSD Masterclass - Elite Cybersecurity Training | CEH Master Certification 2026',
    template: '%s | ECSD Masterclass'
  },
  description: 'World-class cybersecurity masterclass programs. CEH Elite v13 Master certification, VAPT training, cyber forensics, and enterprise security solutions. Only 20 slots available for $5,000.',
  keywords: 'cybersecurity training, CEH Master certification, ethical hacking course, penetration testing training, VAPT certification, cybersecurity masterclass, EC-Council CEH, cyber security course Cameroon, offensive security training, enterprise security training, corporate cybersecurity training, professional hacking course, advanced penetration testing, security analyst certification, cybersecurity for business, IT security training Cameroon, certified ethical hacker training, vulnerability assessment training, security operations training, executive security training',
  authors: [{ name: 'Essoka Cybersecurity Division' }],
  creator: 'Essoka Cybersecurity Division',
  publisher: 'Essoka Cybersecurity Division',
  category: 'Education',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://masterclass.essokacybersecuritydiv.com',
    siteName: 'ECSD Masterclass',
    title: 'ECSD Masterclass - Elite Cybersecurity Training | CEH Master Certification',
    description: 'World-class CEH Elite v13 Master certification and cybersecurity training programs. Transform your team with market-leading offensive security expertise.',
    images: [
      {
        url: 'https://masterclass.essokacybersecuritydiv.com/og-ceh-elite.jpg',
        width: 1200,
        height: 630,
        alt: 'Elite Cybersecurity Investor - Offensive Security Market Mentorship'
      }
    ]
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    'geo.region': 'CM',
    'geo.placename': 'Cameroon',
    'rating': 'general',
    'revisit-after': '7 days',
  },
  alternates: {
    canonical: '/',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Essoka Cybersecurity Division',
              alternateName: 'ECSD',
              url: 'https://masterclass.essokacybersecuritydiv.com',
              logo: 'https://masterclass.essokacybersecuritydiv.com/logo.png',
              description: 'Leading cybersecurity training provider offering CEH Elite v13, VAPT certification, and professional security courses for corporate teams and individuals.',
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'CM'
              },
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+237-677-60-41-00',
                contactType: 'customer service',
                email: 'dr.coachachu@essokacybersecuritydiv.com',
                availableLanguage: ['en', 'fr']
              },
              sameAs: [
                'https://www.facebook.com/essokacyberdiv',
                'https://www.linkedin.com/in/drcoachachugustave'
              ]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'ECSD Masterclass',
              url: 'https://masterclass.essokacybersecuritydiv.com',
              description: 'Elite cybersecurity training and certification programs',
              publisher: {
                '@type': 'Organization',
                name: 'Essoka Cybersecurity Division'
              }
            })
          }}
        />
      </head>
      <body className={`${inter.variable} ${rajdhani.variable} font-sans antialiased`}>
        <ConditionalNavbar />
        <main className="min-h-screen pt-24">
          {children}
        </main>
        <ConditionalFooter />
      </body>
    </html>
  )
}
