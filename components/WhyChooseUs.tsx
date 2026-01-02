'use client'

import { motion } from 'framer-motion'
import { FaCheckCircle, FaTrophy, FaCertificate, FaUsers } from 'react-icons/fa'

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <FaTrophy className="text-4xl text-cyber-gold" />,
      title: 'Market-Leading Expertise',
      description: 'Training delivered by industry veterans with real-world experience in offensive security and enterprise defense'
    },
    {
      icon: <FaCertificate className="text-4xl text-cyber-accent" />,
      title: 'DoD 8140/8570 Compliance',
      description: 'Our certifications meet government and regulatory standards for cybersecurity professionals'
    },
    {
      icon: <FaUsers className="text-4xl text-primary-400" />,
      title: 'Enterprise-Focused',
      description: 'Programs designed specifically for corporate teams, CISOs, and consulting firms'
    },
    {
      icon: <FaCheckCircle className="text-4xl text-green-400" />,
      title: '98% Success Rate',
      description: 'Industry-leading certification pass rates backed by comprehensive support and resources'
    }
  ]

  return (
    <section id="about" className="py-20 bg-cyber-darker relative overflow-hidden">
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
            Why Choose <span className="text-gradient">ECSD Masterclass</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            World-class training backed by proven results and industry recognition
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-cyber-dark/50 border border-cyber-accent/20 rounded-xl p-8 hover:border-cyber-accent/50 transition-all group"
            >
              <div className="mb-4 group-hover:scale-110 transition-transform">
                {reason.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 font-rajdhani">
                {reason.title}
              </h3>
              <p className="text-gray-400">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
