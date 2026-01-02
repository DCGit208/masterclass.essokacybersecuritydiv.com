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
  title: 'ECSD Masterclass | World-Class Cybersecurity Training',
  description: 'Elite cybersecurity training programs from Essoka Cybersecurity Division. CEH Master, VAPT, Cyber Forensics, and more.',
  keywords: 'cybersecurity training, CEH master, penetration testing, VAPT, cyber forensics, enterprise security',
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
