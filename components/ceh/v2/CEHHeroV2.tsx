'use client'

import { motion } from 'framer-motion'
import { FaShieldAlt, FaCheckCircle, FaCalendarAlt, FaUsers } from 'react-icons/fa'
import Link from 'next/link'
import { CEH_ELITE_CONFIG } from '@/config/ceh-elite-v13'

const CEHHeroV2 = () => {

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
            {/* Authority Badges */}
            <div className="flex flex-wrap gap-3 mb-6">
              <motion.div 
                className="inline-flex items-center space-x-2 bg-cyber-gold/20 border-2 border-cyber-gold rounded-full px-5 py-2"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <FaShieldAlt className="text-cyber-gold" />
                <span className="text-cyber-gold font-bold text-xs uppercase tracking-wide">EC-Council Accredited Training Center</span>
              </motion.div>
              <motion.div 
                className="inline-flex items-center space-x-2 bg-cyber-red/20 border border-cyber-red/40 rounded-full px-5 py-2"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <FaShieldAlt className="text-cyber-accent" />
                <span className="text-white font-bold text-xs uppercase tracking-wide">Interview-Only</span>
              </motion.div>
            </div>

            {/* Exact Positioning Headline */}
            <h1 className="text-4xl md:text-6xl font-bold font-rajdhani mb-6 leading-tight">
              <span className="text-cyber-accent">Elite Cybersecurity Investor</span>
              <br />
              <span className="text-white">Offensive Security</span>
              <br />
              <span className="text-gradient">Market Mentorship</span>
              <br />
              <span className="text-white">CEH Elite V13 Certified</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 font-medium">
              For Executives, Business Owners & Strategic Decision-Makers Investing in Offensive Security Markets
            </p>

            {/* Outcome Bullets */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <FaCheckCircle className="text-cyber-accent text-xl mt-1 flex-shrink-0" />
                <p className="text-gray-200 text-lg">
                  <strong className="text-white">Market Intelligence:</strong> Understand offensive security economics, deal structures, and revenue models
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <FaCheckCircle className="text-cyber-accent text-xl mt-1 flex-shrink-0" />
                <p className="text-gray-200 text-lg">
                  <strong className="text-white">Strategic Positioning:</strong> Build or invest in high-value security services that enterprises pay premium rates for
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <FaCheckCircle className="text-cyber-accent text-xl mt-1 flex-shrink-0" />
                <p className="text-gray-200 text-lg">
                  <strong className="text-white">Investment Returns:</strong> Launch consulting practices, security firms, or advisory services with 6-7 figure potential
                </p>
              </div>
            </div>

            {/* Scarcity */}
            <div className="bg-cyber-darker/80 border-l-4 border-cyber-gold rounded-r-lg p-6 mb-8">
              <div className="flex items-center space-x-3 mb-3">
                <FaUsers className="text-cyber-gold text-2xl" />
                <p className="text-cyber-gold font-bold text-lg">Limited Cohort • Maximum 20 Business Leaders</p>
              </div>
              <div className="flex items-center space-x-3">
                <FaCalendarAlt className="text-cyber-red text-2xl" />
                <p className="text-white">
                  Applications close on <span className="text-cyber-red font-bold">{CEH_ELITE_CONFIG.applicationDeadline}</span>
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <a
                href={CEH_ELITE_CONFIG.applicationUrl}
                data-cta="apply"
                className="inline-flex items-center justify-center bg-cyber-accent text-cyber-darker px-8 py-4 rounded-xl font-bold text-lg hover:bg-cyber-accent/90 transition-all hover:shadow-2xl hover:shadow-cyber-accent/50 transform hover:scale-105"
              >
                Apply for the Next Cohort →
              </a>
              <a
                href={CEH_ELITE_CONFIG.bookingUrl}
                data-cta="book-call"
                className="inline-flex items-center justify-center border-2 border-cyber-accent text-cyber-accent px-8 py-4 rounded-xl font-bold text-lg hover:bg-cyber-accent/10 transition-all"
              >
                Book a 10-Min Fit Call
              </a>
            </div>

            {/* Micro Trust */}
            <p className="text-gray-400 text-sm">
              <span className="text-cyber-gold font-semibold">EC-Council ATC (EATCS2208)</span> | Certified EC-Council Instructor (CEI) | For Business Leaders Investing in Offensive Security
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
              {CEH_ELITE_CONFIG.media.heroVideoUrl ? (
                <div className="aspect-video bg-cyber-dark rounded-xl overflow-hidden relative">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source src={CEH_ELITE_CONFIG.media.heroVideoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              ) : (
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
              )}
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
