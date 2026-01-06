'use client'

import { usePathname } from 'next/navigation'
import Navbar from './Navbar'
import Footer from './Footer'

export function ConditionalNavbar() {
  const pathname = usePathname()
  
  // Hide on CEH Elite V13 page - it has its own navigation
  if (pathname === '/masterclass/ceh-elite-v13') {
    return null
  }
  
  return <Navbar />
}

export function ConditionalFooter() {
  const pathname = usePathname()
  
  // Hide on CEH Elite V13 page
  if (pathname === '/masterclass/ceh-elite-v13') {
    return null
  }
  
  return <Footer />
}
