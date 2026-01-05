'use client'

import { motion } from 'framer-motion'
import { FaBriefcase, FaChartLine, FaDollarSign, FaRocket } from 'react-icons/fa'

const CEHOutcomes = () => {
  const jobRoles = [
    "Red Team Operator / Penetration Tester",
    "Security Consultant / Advisory Lead",
    "SOC Manager / Security Operations Lead",
    "Application Security Engineer",
    "Vulnerability Assessment Specialist",
    "Threat Intelligence Analyst",
    "Security Architect / Principal Engineer"
  ]

  const valueOutcomes = [
    {
      icon: <FaBriefcase className="text-4xl text-cyber-gold" />,
      title: "Authority & Positioning",
      description: "Command respect in C-suite conversations and security budget discussions"
    },
    {
      icon: <FaChartLine className="text-4xl text-cyber-accent" />,
      title: "High-Value Contracts",
      description: "Win $50K–$250K+ consulting contracts with enterprise-ready skillset"
    },
    {
      icon: <FaRocket className="text-4xl text-primary-400" />,
      title: "Promotion Readiness",
      description: "Move from engineer to lead, manager, or CISO track with proven competence"
    },
    {
      icon: <FaDollarSign className="text-4xl text-cyber-gold" />,
      title: "Portfolio Credibility",
      description: "Build a defensible case study portfolio for client pitches and interviews"
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
            Career & Income <span className="text-gradient">Outcomes</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            This isn&apos;t just a certification—it&apos;s a career catalyst
          </p>
        </motion.div>

        {/* Job Roles Unlocked */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-cyber-darker/80 border-2 border-cyber-accent/30 rounded-2xl p-8 mb-12"
        >
          <h3 className="text-2xl font-bold text-white mb-6 font-rajdhani text-center">
            🎯 Job Roles Unlocked
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {jobRoles.map((role, index) => (
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
              href="https://YOUR_APPLICATION_FORM_LINK"
              data-cta="apply"
              className="inline-flex items-center justify-center bg-cyber-accent text-cyber-darker px-8 py-4 rounded-xl font-bold text-lg hover:bg-cyber-accent/90 transition-all hover:shadow-2xl hover:shadow-cyber-accent/50"
            >
              Apply for the Next Cohort →
            </a>
            <a
              href="https://YOUR_BOOKING_LINK"
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
