'use client'

import { motion } from 'framer-motion'
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa'
import Link from 'next/link'

const CEHFit = () => {
  const forYou = [
    "Senior security engineers with 3+ years experience",
    "Security consultants seeking enterprise credibility",
    "IT professionals transitioning to offensive security",
    "Team leads preparing for CISO/security leadership roles",
    "SOC analysts ready to move into red team operations",
    "Network admins wanting to think like attackers",
    "Career switchers with solid IT background and commitment"
  ]

  const notForYou = [
    "Complete beginners with no IT/security background",
    "Looking for quick weekend certificate courses",
    "Expecting passive learning without hands-on commitment",
    "Unwilling to invest time in labs and practice",
    "Just want exam dumps or shortcuts",
    "Not ready for enterprise-level training intensity",
    "Seeking discounted or budget certification options"
  ]

  return (
    <section id="fit" className="py-20 bg-cyber-dark relative overflow-hidden">
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
            Is This <span className="text-gradient">Right For You?</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            This is a pre-qualification assessment. Be honest with yourself—your success depends on fit.
          </p>
        </motion.div>

        {/* Two Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          
          {/* Left: This IS For You */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-cyber-darker/80 border-2 border-cyber-accent/40 rounded-2xl p-8"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-cyber-accent/20 rounded-full flex items-center justify-center">
                <FaCheckCircle className="text-cyber-accent text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-white font-rajdhani">This IS For You If...</h3>
            </div>
            
            <div className="space-y-4">
              {forYou.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <FaCheckCircle className="text-cyber-accent text-lg mt-1 flex-shrink-0" />
                  <p className="text-gray-300">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: This is NOT For You */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-cyber-darker/80 border-2 border-cyber-red/40 rounded-2xl p-8"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-cyber-red/20 rounded-full flex items-center justify-center">
                <FaTimesCircle className="text-cyber-red text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-white font-rajdhani">This is NOT For You If...</h3>
            </div>
            
            <div className="space-y-4">
              {notForYou.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <FaTimesCircle className="text-cyber-red text-lg mt-1 flex-shrink-0" />
                  <p className="text-gray-300">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* CTA Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-xl text-gray-300 mb-6">
            If you&apos;re in the left column, let&apos;s talk.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#apply-modal"
              data-cta="apply"
              className="inline-flex items-center justify-center bg-cyber-accent text-cyber-darker px-8 py-4 rounded-xl font-bold text-lg hover:bg-cyber-accent/90 transition-all hover:shadow-2xl hover:shadow-cyber-accent/50"
            >
              Apply for the Next Cohort →
            </a>
            <a
              href="https://calendly.com/bthedugrp/30min"
              data-cta="book-call"
              className="inline-flex items-center justify-center border-2 border-cyber-accent text-cyber-accent px-8 py-4 rounded-xl font-bold text-lg hover:bg-cyber-accent/10 transition-all"
            >
              Book a 10-Min Fit Call
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default CEHFit
