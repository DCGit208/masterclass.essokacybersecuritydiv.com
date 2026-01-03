import type { Metadata } from 'next'
import { Inter, Rajdhani } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const rajdhani = Rajdhani({ 
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-rajdhani'
})

export const metadata: Metadata = {
  title: {
    default: 'ECSD Masterclass - Elite Cybersecurity Training | CEH Master Certification 2026',
    template: '%s | ECSD Masterclass'
  },
  description: 'World-class cybersecurity masterclass programs. CEH Elite v13 Master certification, VAPT training, cyber forensics, and enterprise security solutions. Only 20 slots available for $5,000.',
  keywords: 'cybersecurity training, CEH Master certification, ethical hacking course, penetration testing training, VAPT certification, cybersecurity masterclass, EC-Council CEH, cyber security course Cameroon, offensive security training, enterprise security training',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://masterclass.essokacybersecuritydiv.com',
    siteName: 'ECSD Masterclass',
    title: 'ECSD Masterclass - Elite Cybersecurity Training | CEH Master Certification',
    description: 'World-class CEH Elite v13 Master certification and cybersecurity training programs. Transform your team with market-leading offensive security expertise.',
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
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${rajdhani.variable} font-sans antialiased`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
