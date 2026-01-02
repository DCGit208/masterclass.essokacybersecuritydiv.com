'use client'

import { motion } from 'framer-motion'
import { FaUserTie, FaShieldAlt, FaBriefcase } from 'react-icons/fa'

const CEHTarget = () => {
  const targetAudience = [
    {
      icon: <FaUserTie className="text-5xl text-cyber-gold" />,
      title: 'Cybersecurity Leaders & CISOs',
      description: 'Require verifiable expertise and regulatory compliance (DoD 8140/8570)',
      benefits: ['Leadership credentials', 'Compliance assurance', 'Strategic oversight']
    },
    {
      icon: <FaShieldAlt className="text-5xl text-cyber-accent" />,
      title: 'Corporate IT & Blue Teams',
      description: 'Building robust internal proactive defense capabilities',
      benefits: ['Hands-on defense skills', 'Threat detection', 'Incident response']
    },
    {
      icon: <FaBriefcase className="text-5xl text-primary-400" />,
      title: 'Consulting Firms',
      description: 'Aiming to field market-leading penetration testing professionals',
      benefits: ['Client-ready expertise', 'Competitive advantage', 'Revenue growth']
    }
  ]

  return (
    <section className="py-20 bg-cyber-darker relative overflow-hidden">
      <div className="absolute inset-0 bg-cyber-grid opacity-5" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-rajdhani text-white mb-4">
            🎯 Who Is This <span className="text-gradient">Masterclass</span> For?
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            This flagship program targets security decision-makers and high-potential teams
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {targetAudience.map((audience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="bg-cyber-dark/50 border-2 border-cyber-accent/30 rounded-xl p-8 hover:border-cyber-accent/60 transition-all group card-glow text-center"
            >
              <div className="mb-6 flex justify-center group-hover:scale-110 transition-transform">
                {audience.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4 font-rajdhani">
                {audience.title}
              </h3>
              <p className="text-gray-400 mb-6 text-sm">
                {audience.description}
              </p>
              <div className="space-y-2 text-left">
                {audience.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-cyber-accent rounded-full" />
                    <span className="text-gray-300 text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CEHTarget
