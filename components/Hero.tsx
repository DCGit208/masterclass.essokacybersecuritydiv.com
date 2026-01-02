'use client'

import { motion } from 'framer-motion'
import { FaRocket, FaShieldAlt } from 'react-icons/fa'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cyber-darker">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-cyber-grid opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyber-dark/50 to-cyber-darker" />
      
      {/* Animated Circles */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyber-accent/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl animate-pulse-slow delay-1000" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <motion.div 
            className="inline-flex items-center space-x-2 bg-cyber-accent/10 border border-cyber-accent/30 rounded-full px-6 py-2 mb-8"
            whileHover={{ scale: 1.05 }}
          >
            <FaShieldAlt className="text-cyber-accent" />
            <span className="text-cyber-accent font-semibold text-sm">World-Class Security Training</span>
          </motion.div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold font-rajdhani mb-6">
            <span className="text-white">Master The Art of</span>
            <br />
            <span className="text-gradient cyber-glow">Cybersecurity Excellence</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Elite training programs designed for enterprises and professionals who demand nothing less than market-leading expertise in 2026
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/masterclass/ceh-elite-v13">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-cyber-accent text-cyber-darker px-8 py-4 rounded-lg font-bold text-lg flex items-center space-x-2 hover:shadow-2xl hover:shadow-cyber-accent/50 transition-all"
              >
                <FaRocket />
                <span>Explore CEH Elite v13</span>
              </motion.button>
            </Link>
            <Link href="/#programs">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-cyber-accent text-cyber-accent px-8 py-4 rounded-lg font-bold text-lg hover:bg-cyber-accent/10 transition-all"
              >
                View All Programs
              </motion.button>
            </Link>
          </div>

          {/* Stats */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="text-center">
              <h3 className="text-4xl font-bold text-cyber-accent font-rajdhani">500+</h3>
              <p className="text-gray-400 mt-2">Professionals Trained</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-cyber-accent font-rajdhani">98%</h3>
              <p className="text-gray-400 mt-2">Certification Success Rate</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-cyber-accent font-rajdhani">50+</h3>
              <p className="text-gray-400 mt-2">Enterprise Clients</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
