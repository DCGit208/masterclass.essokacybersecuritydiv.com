'use client'

import { motion } from 'framer-motion'
import { FaBug, FaSearch, FaCode, FaShieldAlt, FaBalanceScale, FaNetworkWired } from 'react-icons/fa'

const MasterclassCategories = () => {
  const categories = [
    {
      icon: <FaBug className="text-4xl" />,
      title: 'VAPT (Vulnerability Assessment & Penetration Testing)',
      description: 'Master offensive security techniques and vulnerability assessment methodologies',
      programs: ['CEH Master', 'OSCP Prep', 'Advanced Web App Security']
    },
    {
      icon: <FaSearch className="text-4xl" />,
      title: 'Cyber Forensics',
      description: 'Learn digital investigation and incident response strategies',
      programs: ['CHFI', 'Malware Analysis', 'Digital Evidence Collection']
    },
    {
      icon: <FaCode className="text-4xl" />,
      title: 'Software Security',
      description: 'Secure coding practices and application security testing',
      programs: ['Secure SDLC', 'Code Review', 'DevSecOps']
    },
    {
      icon: <FaNetworkWired className="text-4xl" />,
      title: 'Network Defense',
      description: 'Build robust network security and monitoring capabilities',
      programs: ['Network Security', 'IDS/IPS', 'SIEM Operations']
    },
    {
      icon: <FaShieldAlt className="text-4xl" />,
      title: 'Operations Center',
      description: 'SOC operations and threat intelligence management',
      programs: ['SOC Analyst', 'Threat Hunting', 'IR Planning']
    },
    {
      icon: <FaBalanceScale className="text-4xl" />,
      title: 'Governance & Compliance',
      description: 'Risk management, compliance frameworks, and security policies',
      programs: ['ISO 27001', 'NIST Framework', 'Risk Assessment']
    }
  ]

  return (
    <section id="programs" className="py-20 bg-cyber-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-cyber-grid opacity-10" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-rajdhani text-white mb-4">
            Training <span className="text-gradient">Categories</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Comprehensive masterclass programs across all critical cybersecurity domains
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-cyber-darker/80 backdrop-blur-sm border border-cyber-accent/20 rounded-xl p-6 hover:border-cyber-accent/50 transition-all group card-glow"
            >
              <div className="text-cyber-accent group-hover:scale-110 transition-transform mb-4">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 font-rajdhani">
                {category.title}
              </h3>
              <p className="text-gray-400 mb-4 text-sm">
                {category.description}
              </p>
              <div className="space-y-2">
                {category.programs.map((program, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-cyber-accent rounded-full" />
                    <span className="text-gray-300 text-sm">{program}</span>
                  </div>
                ))}
              </div>
              <button className="mt-6 w-full bg-cyber-accent/10 hover:bg-cyber-accent/20 text-cyber-accent py-2 rounded-lg font-semibold transition-all">
                Learn More
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MasterclassCategories
