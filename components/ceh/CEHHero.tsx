'use client'

import { motion } from 'framer-motion'
import { FaTrophy, FaRocket } from 'react-icons/fa'

const CEHHero = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-cyber-darker via-cyber-dark to-cyber-darker pt-24">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-cyber-grid opacity-20" />
      <div className="absolute top-20 left-10 w-96 h-96 bg-cyber-red/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyber-gold/20 rounded-full blur-3xl animate-pulse-slow" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <motion.div 
            className="inline-flex items-center space-x-2 bg-cyber-red/20 border border-cyber-red/40 rounded-full px-6 py-2 mb-6"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <FaTrophy className="text-cyber-gold" />
            <span className="text-cyber-gold font-bold text-sm">FLAGSHIP PROGRAM 🚀</span>
          </motion.div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-rajdhani mb-6">
            <span className="text-white">The Enterprise Security</span>
            <br />
            <span className="text-gradient cyber-glow">Masterclass</span>
          </h1>

          <h2 className="text-2xl md:text-4xl font-bold text-cyber-gold mb-4 font-rajdhani">
            Achieve Elite CEH Master Status
          </h2>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            🚀 Elevate your defense strategy with the ultimate hacker mindset
          </p>

          {/* Key Message */}
          <div className="bg-cyber-accent/10 border-l-4 border-cyber-accent rounded-lg p-6 mb-8 max-w-4xl mx-auto text-left">
            <p className="text-white text-lg leading-relaxed mb-4">
              <strong className="text-cyber-accent">This isn't just training;</strong> it's a world-class, 
              market-leading offensive security solution. Essoka Cybersecurity Division presents an irresistible, 
              comprehensive program designed for organizations that demand nothing less than the best in 2026.
            </p>
            <p className="text-cyber-gold font-bold text-xl">
              We don't teach theory; we forge CEH Masters capable of stopping sophisticated AI-driven threats.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-6">
            <div className="bg-cyber-darker/80 border border-cyber-accent/30 rounded-lg px-8 py-4">
              <div className="text-3xl font-bold text-cyber-accent font-rajdhani">$5,000</div>
              <div className="text-gray-400 text-sm">Investment</div>
            </div>
            <div className="bg-cyber-darker/80 border border-cyber-gold/30 rounded-lg px-8 py-4">
              <div className="text-3xl font-bold text-cyber-gold font-rajdhani">20 Slots</div>
              <div className="text-gray-400 text-sm">Limited Seats</div>
            </div>
            <div className="bg-cyber-darker/80 border border-cyber-red/30 rounded-lg px-8 py-4">
              <div className="text-3xl font-bold text-cyber-red font-rajdhani">Elite v13</div>
              <div className="text-gray-400 text-sm">Latest Version</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CEHHero
