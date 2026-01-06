'use client'

import { motion } from 'framer-motion'
import { FaShieldAlt, FaUserSecret, FaGraduationCap, FaHandshake, FaCode, FaUsers, FaTrophy, FaChartLine, FaLock, FaBriefcase } from 'react-icons/fa'

const CEHElite = () => {
  const differentiators = [
    {
      icon: <FaShieldAlt className="text-4xl text-cyber-accent" />,
      title: "Enterprise Simulations",
      description: "Real Fortune 500-style networks, not toy lab environments. Practice on infrastructure that mirrors actual corporate attack surfaces."
    },
    {
      icon: <FaUserSecret className="text-4xl text-cyber-gold" />,
      title: "Red Team Scenarios",
      description: "Advanced persistent threat (APT) simulations, lateral movement, privilege escalation—tactics used by nation-state actors."
    },
    {
      icon: <FaHandshake className="text-4xl text-primary-400" />,
      title: "1-on-1 Mentorship Access",
      description: "Direct access to senior practitioners who&apos;ve led real security engagements. Get feedback on your techniques and career strategy."
    },
    {
      icon: <FaCode className="text-4xl text-cyber-accent" />,
      title: "Practical Mastery Focus",
      description: "Theory is 20%. Application is 80%. Build a portfolio of exploits, reports, and remediation plans you can show clients or employers."
    },
    {
      icon: <FaUsers className="text-4xl text-cyber-gold" />,
      title: "Leadership Readiness",
      description: "Learn to communicate findings to non-technical stakeholders, write executive reports, and position recommendations."
    },
    {
      icon: <FaBriefcase className="text-4xl text-primary-400" />,
      title: "Consulting Readiness",
      description: "Scoping engagements, pricing penetration tests, delivering findings—skills that turn knowledge into revenue."
    },
    {
      icon: <FaTrophy className="text-4xl text-cyber-accent" />,
      title: "Exam-Aligned, Not Exam-Only",
      description: "Yes, you&apos;ll pass CEH v13. But more importantly, you&apos;ll be competent beyond the test—ready for real client work."
    },
    {
      icon: <FaChartLine className="text-4xl text-cyber-gold" />,
      title: "Career Positioning Strategy",
      description: "LinkedIn optimization, portfolio building, interview prep—we help you market your new skillset effectively."
    },
    {
      icon: <FaLock className="text-4xl text-primary-400" />,
      title: "Access to Private Community",
      description: "Network with fellow senior professionals, share contract opportunities, get peer code reviews, and lifetime alumni support."
    },
    {
      icon: <FaGraduationCap className="text-4xl text-cyber-accent" />,
      title: "Capstone Project",
      description: "Complete a full penetration test engagement: reconnaissance, exploitation, post-exploitation, reporting—portfolio-ready deliverable."
    }
  ]

  return (
    <section id="elite" className="py-20 bg-cyber-dark relative overflow-hidden">
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
            What Makes This <span className="text-gradient">ELITE</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-6">
            This isn&apos;t standard CEH training. Here&apos;s why professionals choose this over generic bootcamps.
          </p>
          <div className="inline-block bg-cyber-red/20 border border-cyber-red/40 rounded-full px-6 py-3">
            <p className="text-cyber-gold font-bold">🚨 Not Just CEH Exam Prep — Real-World Security Mastery</p>
          </div>
        </motion.div>

        {/* Differentiators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {differentiators.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="bg-cyber-darker/80 border-2 border-cyber-accent/30 rounded-xl p-6 hover:border-cyber-accent/60 transition-all group"
            >
              <div className="mb-4 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 font-rajdhani">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Callout Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-cyber-accent/10 to-cyber-gold/10 border-2 border-cyber-accent/40 rounded-2xl p-8 md:p-12 text-center mb-12"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 font-rajdhani">
            The Difference? <span className="text-cyber-accent">You&apos;ll Be Client-Ready.</span>
          </h3>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Most CEH courses teach you to pass the exam. We teach you to <span className="text-cyber-gold font-bold">command the room</span>, 
            win the contract, and deliver results that executives understand and value.
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

export default CEHElite
