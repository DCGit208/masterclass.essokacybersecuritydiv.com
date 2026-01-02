'use client'

import { motion } from 'framer-motion'
import { FaRocket, FaTrophy, FaFire } from 'react-icons/fa'
import Link from 'next/link'

const FeaturedProgram = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-cyber-darker via-cyber-dark to-cyber-darker relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-cyber-grid opacity-5" />
      <div className="absolute top-20 right-10 w-64 h-64 bg-cyber-red/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-cyber-gold/10 rounded-full blur-3xl animate-pulse-slow" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 bg-cyber-red/20 border border-cyber-red/30 rounded-full px-6 py-2 mb-6">
            <FaFire className="text-cyber-red animate-pulse" />
            <span className="text-cyber-red font-semibold text-sm">FLAGSHIP PROGRAM 🚀</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold font-rajdhani text-white mb-4">
            The Enterprise Security Masterclass
          </h2>
          <p className="text-2xl text-cyber-gold font-semibold mb-2">
            Achieve Elite CEH Master Status
          </p>
          <p className="text-gray-400 text-lg">
            Elevate your defense strategy with the ultimate hacker mindset
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-br from-cyber-dark to-cyber-darker border-2 border-cyber-accent/30 rounded-2xl p-8 md:p-12 card-glow"
        >
          {/* Key Message */}
          <div className="mb-8 p-6 bg-cyber-accent/5 border-l-4 border-cyber-accent rounded-lg">
            <p className="text-white text-lg leading-relaxed">
              This isn't just training; it's a <span className="text-cyber-accent font-bold">world-class, market-leading offensive security solution</span>. 
              Essoka Cybersecurity Division presents an irresistible, comprehensive program designed for organizations that demand nothing less than the best in 2026.
            </p>
            <p className="text-cyber-gold font-semibold mt-4 text-xl">
              We don't teach theory; we forge CEH Masters capable of stopping sophisticated AI-driven threats.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center p-4 bg-cyber-darker/50 rounded-lg">
              <div className="text-3xl font-bold text-cyber-accent font-rajdhani">$5,000</div>
              <div className="text-gray-400 text-sm mt-1">Investment</div>
            </div>
            <div className="text-center p-4 bg-cyber-darker/50 rounded-lg">
              <div className="text-3xl font-bold text-cyber-gold font-rajdhani">20 Slots</div>
              <div className="text-gray-400 text-sm mt-1">Limited Availability</div>
            </div>
            <div className="text-center p-4 bg-cyber-darker/50 rounded-lg">
              <div className="text-3xl font-bold text-cyber-red font-rajdhani">v13</div>
              <div className="text-gray-400 text-sm mt-1">Latest CEH Elite</div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link href="/masterclass/ceh-elite-v13">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-cyber-accent text-cyber-darker px-10 py-4 rounded-xl font-bold text-lg inline-flex items-center space-x-3 hover:shadow-2xl hover:shadow-cyber-accent/50 transition-all"
              >
                <FaTrophy />
                <span>View Full Program Details</span>
                <FaRocket />
              </motion.button>
            </Link>
            <p className="text-gray-400 text-sm mt-4">
              🔥 Secure your team's future. Don't wait for a breach to train your defense.
            </p>
          </div>
        </motion.div>

        {/* Target Audience Quick View */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            { title: 'CISOs & Leaders', desc: 'Verifiable expertise & DoD compliance' },
            { title: 'Corporate IT Teams', desc: 'Robust internal defense capabilities' },
            { title: 'Consulting Firms', desc: 'Market-leading pen testing pros' }
          ].map((item, index) => (
            <div key={index} className="bg-cyber-darker/60 border border-cyber-accent/20 rounded-lg p-6 text-center hover:border-cyber-accent/50 transition-all">
              <h4 className="text-white font-bold mb-2 font-rajdhani">{item.title}</h4>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturedProgram
