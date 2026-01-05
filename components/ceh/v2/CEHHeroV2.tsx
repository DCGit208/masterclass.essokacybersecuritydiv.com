'use client'

import { motion } from 'framer-motion'
import { FaShieldAlt, FaCheckCircle, FaCalendarAlt, FaUsers } from 'react-icons/fa'
import Link from 'next/link'

const CEHHeroV2 = () => {
  // TODO: Replace with actual application form URL
  const APPLICATION_URL = "https://YOUR_APPLICATION_FORM_LINK"
  // TODO: Replace with actual Calendly booking URL
  const CALENDLY_URL = "https://YOUR_BOOKING_LINK"
  // TODO: Replace with actual application deadline date
  const APPLICATION_DEADLINE = "February 28, 2026"

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-cyber-darker via-cyber-dark to-cyber-darker pt-32 pb-20">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-cyber-grid opacity-20" />
      <div className="absolute top-20 left-10 w-96 h-96 bg-cyber-red/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyber-gold/20 rounded-full blur-3xl animate-pulse-slow" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Positioning & Copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Authority Badge */}
            <motion.div 
              className="inline-flex items-center space-x-2 bg-cyber-red/20 border border-cyber-red/40 rounded-full px-6 py-2 mb-6"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <FaShieldAlt className="text-cyber-gold" />
              <span className="text-cyber-gold font-bold text-sm uppercase tracking-wide">Interview-Only Enrollment</span>
            </motion.div>

            {/* Exact Positioning Headline */}
            <h1 className="text-4xl md:text-6xl font-bold font-rajdhani mb-6 leading-tight">
              <span className="text-cyber-accent">CEH Elite V13</span>
              <br />
              <span className="text-white">Enterprise-Grade</span>
              <br />
              <span className="text-gradient">Ethical Hacking & Red Team</span>
              <br />
              <span className="text-white">Masterclass</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 font-medium">
              For Senior Security Professionals, Consultants & Team Leads
            </p>

            {/* Outcome Bullets */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <FaCheckCircle className="text-cyber-accent text-xl mt-1 flex-shrink-0" />
                <p className="text-gray-200 text-lg">
                  <strong className="text-white">Authority Positioning:</strong> Command C-suite respect and lead enterprise security initiatives
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <FaCheckCircle className="text-cyber-accent text-xl mt-1 flex-shrink-0" />
                <p className="text-gray-200 text-lg">
                  <strong className="text-white">Enterprise Readiness:</strong> Deploy real red team tactics used by Fortune 500 security teams
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <FaCheckCircle className="text-cyber-accent text-xl mt-1 flex-shrink-0" />
                <p className="text-gray-200 text-lg">
                  <strong className="text-white">Career Leverage:</strong> Break into $120K–$250K+ security leadership roles
                </p>
              </div>
            </div>

            {/* Scarcity */}
            <div className="bg-cyber-darker/80 border-l-4 border-cyber-gold rounded-r-lg p-6 mb-8">
              <div className="flex items-center space-x-3 mb-3">
                <FaUsers className="text-cyber-gold text-2xl" />
                <p className="text-cyber-gold font-bold text-lg">Limited Cohort • Maximum 20 Professionals</p>
              </div>
              <div className="flex items-center space-x-3">
                <FaCalendarAlt className="text-cyber-red text-2xl" />
                <p className="text-white">
                  Applications close on <span className="text-cyber-red font-bold">{APPLICATION_DEADLINE}</span>
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <a
                href={APPLICATION_URL}
                data-cta="apply"
                className="inline-flex items-center justify-center bg-cyber-accent text-cyber-darker px-8 py-4 rounded-xl font-bold text-lg hover:bg-cyber-accent/90 transition-all hover:shadow-2xl hover:shadow-cyber-accent/50 transform hover:scale-105"
              >
                Apply for the Next Cohort →
              </a>
              <a
                href={CALENDLY_URL}
                data-cta="book-call"
                className="inline-flex items-center justify-center border-2 border-cyber-accent text-cyber-accent px-8 py-4 rounded-xl font-bold text-lg hover:bg-cyber-accent/10 transition-all"
              >
                Book a 10-Min Fit Call
              </a>
            </div>

            {/* Micro Trust */}
            <p className="text-gray-400 text-sm">
              Built for professionals. Interview-only enrollment.
            </p>
          </motion.div>

          {/* Right Column: Video */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-cyber-darker border-2 border-cyber-accent/30 rounded-2xl p-4 shadow-2xl">
              {/* TODO: Replace with actual video embed */}
              <div className="aspect-video bg-cyber-dark rounded-xl flex items-center justify-center relative overflow-hidden group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-cyber-accent/20 to-cyber-gold/20" />
                <div className="relative z-10 text-center">
                  <div className="w-20 h-20 bg-cyber-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <svg className="w-10 h-10 text-cyber-darker ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p className="text-white font-bold text-lg mb-2">Watch: What Makes CEH Elite V13 Different</p>
                  <p className="text-gray-400 text-sm">60 seconds</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm text-center mt-4">
                See why senior professionals choose this over standard CEH training
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default CEHHeroV2
