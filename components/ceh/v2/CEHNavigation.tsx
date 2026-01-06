'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const CEHNavigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Overview', href: '#hero' },
    { label: 'Fit', href: '#fit' },
    { label: 'Outcomes', href: '#outcomes' },
    { label: 'Why Elite', href: '#elite' },
    { label: 'Structure', href: '#structure' },
    { label: 'Instructor', href: '#instructor' },
    { label: 'Trust', href: '#trust' },
    { label: 'Cohort', href: '#cohort' },
    { label: 'FAQ', href: '#faq' }
  ]

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-cyber-darker/95 backdrop-blur-lg border-b border-cyber-accent/20' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo/Title */}
            <Link href="#hero" onClick={(e) => handleNavClick(e, '#hero')} className="flex items-center space-x-2">
              <span className="text-2xl font-bold font-rajdhani text-cyber-accent">CEH Elite V13</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="px-3 py-2 text-sm text-gray-300 hover:text-cyber-accent transition-colors font-medium"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#apply-modal"
                data-cta="apply"
                className="ml-4 bg-cyber-accent text-cyber-darker px-6 py-2 rounded-lg font-bold text-sm hover:bg-cyber-accent/90 transition-all"
              >
                Apply Now
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-white p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="lg:hidden bg-cyber-dark border-t border-cyber-accent/20 py-4"
            >
              <div className="flex flex-col space-y-2">
                {navItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="px-4 py-2 text-gray-300 hover:text-cyber-accent hover:bg-cyber-accent/10 transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="#apply-modal"
                  data-cta="apply"
                  className="mx-4 mt-2 bg-cyber-accent text-cyber-darker px-6 py-3 rounded-lg font-bold text-center hover:bg-cyber-accent/90 transition-all"
                >
                  Apply Now
                </a>
              </div>
            </motion.div>
          )}
        </div>
      </nav>

      {/* Mobile Sticky CTA */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-cyber-darker/95 backdrop-blur-lg border-t border-cyber-accent/20 p-4">
        <a
          href="#apply-modal"
          data-cta="apply"
          className="block bg-cyber-accent text-cyber-darker px-6 py-4 rounded-xl font-bold text-center hover:bg-cyber-accent/90 transition-all w-full"
        >
          Apply for Next Cohort →
        </a>
      </div>
    </>
  )
}

export default CEHNavigation
