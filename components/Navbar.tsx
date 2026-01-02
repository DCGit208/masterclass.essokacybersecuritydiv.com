'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBars, FaTimes, FaShieldAlt } from 'react-icons/fa'

const Navbar = () => {
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
    { name: 'Home', href: '/' },
    { name: 'Programs', href: '/#programs' },
    { name: 'CEH Elite v13', href: '/masterclass/ceh-elite-v13' },
    { name: 'About', href: '/#about' },
    { name: 'Contact', href: '/#contact' },
  ]

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-cyber-darker/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <FaShieldAlt className="text-3xl text-cyber-accent group-hover:scale-110 transition-transform" />
              <div className="absolute inset-0 bg-cyber-accent/20 blur-xl group-hover:bg-cyber-accent/40 transition-all" />
            </div>
            <div>
              <h1 className="text-xl font-bold font-rajdhani text-white">ECSD MASTERCLASS</h1>
              <p className="text-xs text-cyber-accent">Elite Security Training</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-cyber-accent transition-colors font-medium relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyber-accent group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
            <Link
              href="/#contact"
              className="bg-cyber-accent text-cyber-darker px-6 py-2 rounded-lg font-semibold hover:bg-cyber-accent/90 transition-all hover:shadow-lg hover:shadow-cyber-accent/50"
            >
              Register Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white text-2xl focus:outline-none"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-cyber-dark/98 backdrop-blur-lg"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-gray-300 hover:text-cyber-accent transition-colors font-medium py-2"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block bg-cyber-accent text-cyber-darker px-6 py-3 rounded-lg font-semibold text-center hover:bg-cyber-accent/90 transition-all"
              >
                Register Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
