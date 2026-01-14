'use client'

import { motion } from 'framer-motion'
import { FaBriefcase, FaChartLine, FaDollarSign, FaRocket } from 'react-icons/fa'

const CEHOutcomes = () => {
  const businessOpportunities = [
    "Security Advisory & Consulting Services (Retainer-based)",
    "Offensive Security Practice Lead / Founder",
    "Strategic Security Advisor to C-suite/Boards",
    "Enterprise Penetration Testing Services Provider",
    "Security Due Diligence for M&A/Investment Deals",
    "Compliance & Risk Advisory (DoD, HIPAA, PCI-DSS)",
    "Incident Response & Breach Investigation Services"
  ]

  const valueOutcomes = [
    {
      icon: <FaBriefcase className="text-4xl text-cyber-gold" />,
      title: "Market Intelligence",
      description: "Understand offensive security economics, deal structures, pricing models, and what enterprises actually pay premium for"
    },
    {
      icon: <FaChartLine className="text-4xl text-cyber-accent" />,
      title: "Business Positioning",
      description: "Position security services for $150K–$500K+ annual contracts with strategic advisory vs. hourly technical work"
    },
    {
      icon: <FaRocket className="text-4xl text-primary-400" />,
      title: "Practice Launch Readiness",
      description: "Build or scale consulting practice, advisory firm, or security services business with proven market demand"
    },
    {
      icon: <FaDollarSign className="text-4xl text-cyber-gold" />,
      title: "Investment Portfolio",
      description: "Develop capability to evaluate, invest in, or partner with offensive security ventures and service providers"
    }
  ]

  return (
    <section id="outcomes" className="py-20 bg-gradient-to-b from-cyber-darker to-cyber-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-cyber-grid opacity-10" />
      
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
            Business & Investment <span className="text-gradient">Opportunities</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            This isn&apos;t just certification—it&apos;s strategic market positioning and business intelligence
          </p>
        </motion.div>

        {/* Business Opportunities Unlocked */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-cyber-darker/80 border-2 border-cyber-accent/30 rounded-2xl p-8 mb-12"
        >
          <h3 className="text-2xl font-bold text-white mb-6 font-rajdhani text-center">
            💼 Business Opportunities Unlocked
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {businessOpportunities.map((role, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center space-x-3 bg-cyber-dark/50 rounded-lg p-4 hover:bg-cyber-dark transition-all"
              >
                <div className="w-2 h-2 bg-cyber-accent rounded-full flex-shrink-0" />
                <p className="text-gray-200 font-medium">{role}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Value Outcomes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {valueOutcomes.map((outcome, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-cyber-darker border-2 border-cyber-accent/30 rounded-xl p-6 hover:border-cyber-accent/60 transition-all text-center group"
            >
              <div className="mb-4 flex justify-center group-hover:scale-110 transition-transform">
                {outcome.icon}
              </div>
              <h4 className="text-lg font-bold text-white mb-3 font-rajdhani">
                {outcome.title}
              </h4>
              <p className="text-gray-400 text-sm">
                {outcome.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ROI Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-cyber-gold/10 to-cyber-accent/10 border-2 border-cyber-gold/40 rounded-2xl p-8 md:p-12 text-center mb-12"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 font-rajdhani">
            The ROI Math Is Simple
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div>
              <div className="text-5xl font-bold text-cyber-gold mb-2 font-rajdhani">$5,000</div>
              <p className="text-gray-300">One-Time Investment</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-cyber-accent mb-2 font-rajdhani">8-12</div>
              <p className="text-gray-300">Weeks Commitment</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-white mb-2 font-rajdhani">$120K+</div>
              <p className="text-gray-300">Average Role Salary</p>
            </div>
          </div>
          <p className="text-xl text-gray-200 mt-8 max-w-3xl mx-auto">
            One consulting contract or promotion pays for this 10-20x over. 
            The question isn&apos;t cost—it&apos;s <span className="text-cyber-gold font-bold">opportunity cost of waiting</span>.
          </p>
        </motion.div>

        {/* CTA Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
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

export default CEHOutcomes
