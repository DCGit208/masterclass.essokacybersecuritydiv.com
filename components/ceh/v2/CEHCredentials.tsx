'use client'

import { motion } from 'framer-motion'
import { FaAward, FaCertificate, FaTrophy } from 'react-icons/fa'
import Image from 'next/image'

const CEHCredentials = () => {
  return (
    <section id="credentials" className="py-20 bg-gradient-to-b from-cyber-dark to-cyber-darker relative overflow-hidden">
      <div className="absolute inset-0 bg-cyber-grid opacity-5" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-rajdhani text-white mb-4">
            Dual Credentials <span className="text-gradient">You'll Earn</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Technical certification meets strategic business positioning
          </p>
        </motion.div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          
          {/* 1. Official CEH Elite V13 Certification */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-cyber-darker/80 border-2 border-cyber-accent/40 rounded-2xl p-8 hover:border-cyber-accent/70 transition-all"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-20 h-20 bg-cyber-accent/20 rounded-full flex items-center justify-center">
                <FaCertificate className="text-cyber-accent text-4xl" />
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-4 font-rajdhani text-center">
              CEH Elite V13 Certification
            </h3>
            
            <p className="text-gray-300 text-center mb-6">
              Official EC-Council Certified Ethical Hacker Master certification with practical exam completion
            </p>

            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-cyber-accent rounded-full mt-2 flex-shrink-0" />
                <p className="text-gray-300 text-sm">CEH Knowledge Exam (125 questions)</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-cyber-accent rounded-full mt-2 flex-shrink-0" />
                <p className="text-gray-300 text-sm">CEH Practical Exam (6-hour hands-on)</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-cyber-accent rounded-full mt-2 flex-shrink-0" />
                <p className="text-gray-300 text-sm">DoD 8140/8570 IAT Level II compliant</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-cyber-accent rounded-full mt-2 flex-shrink-0" />
                <p className="text-gray-300 text-sm">Globally recognized by enterprises</p>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-cyber-accent/20">
              <p className="text-cyber-accent text-sm font-semibold text-center">
                Official EC-Council Certification
              </p>
            </div>
          </motion.div>

          {/* 2. Elite Cybersecurity Investor Badge */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-cyber-darker/80 border-2 border-cyber-gold/40 rounded-2xl p-8 hover:border-cyber-gold/70 transition-all relative overflow-hidden"
          >
            {/* Premium Badge Glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyber-gold/10 rounded-full blur-3xl" />
            
            <div className="flex items-center justify-center mb-6 relative z-10">
              <div className="w-48 h-48">
                <Image
                  src="/elite-cybersecurity-investor-badge.png"
                  alt="Elite Cybersecurity Investor Badge"
                  width={192}
                  height={192}
                  className="object-contain"
                />
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-4 font-rajdhani text-center">
              Elite Cybersecurity Investor Badge
            </h3>
            
            <p className="text-gray-300 text-center mb-6">
              <span className="text-cyber-gold font-semibold">EXCLUSIVE</span> credential awarded by Dr. Coach Achu for strategic business positioning
            </p>

            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-cyber-gold rounded-full mt-2 flex-shrink-0" />
                <p className="text-gray-300 text-sm">Market intelligence & economics mastery</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-cyber-gold rounded-full mt-2 flex-shrink-0" />
                <p className="text-gray-300 text-sm">Business positioning & deal structure expertise</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-cyber-gold rounded-full mt-2 flex-shrink-0" />
                <p className="text-gray-300 text-sm">Strategic advisory capability demonstration</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-cyber-gold rounded-full mt-2 flex-shrink-0" />
                <p className="text-gray-300 text-sm">LinkedIn/professional profile credential</p>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-cyber-gold/20">
              <p className="text-cyber-gold text-sm font-semibold text-center">
                Dr. Coach Achu Exclusive • Only 20 per Cohort
              </p>
            </div>
          </motion.div>

        </div>

        {/* Bottom Value Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-r from-cyber-accent/10 to-cyber-gold/10 border-l-4 border-cyber-gold rounded-r-xl p-6">
            <div className="flex items-center justify-center space-x-3 mb-3">
              <FaTrophy className="text-cyber-gold text-3xl" />
              <h4 className="text-xl font-bold text-white font-rajdhani">
                Technical Certification + Strategic Business Positioning
              </h4>
            </div>
            <p className="text-gray-300">
              Most programs give you a certificate. We give you <span className="text-cyber-accent font-semibold">market positioning</span> that opens doors to 6-7 figure opportunities.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default CEHCredentials
