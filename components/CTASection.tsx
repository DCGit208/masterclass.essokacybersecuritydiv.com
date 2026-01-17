'use client'

import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaRocket, FaWhatsapp } from 'react-icons/fa'
import Link from 'next/link'

const CTASection = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-cyber-darker to-cyber-dark relative overflow-hidden">
      <div className="absolute top-10 left-10 w-96 h-96 bg-cyber-accent/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl animate-pulse-slow" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold font-rajdhani text-white mb-6">
            Ready to <span className="text-gradient">Transform</span> Your Team?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Don&apos;t wait for a breach to train your defense. Secure your spot in our exclusive masterclass programs today.
          </p>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <motion.a
              href="mailto:dr.coachachu@essokacybersecuritydiv.com"
              whileHover={{ scale: 1.05 }}
              className="bg-cyber-darker/80 border-2 border-cyber-accent/30 rounded-xl p-6 hover:border-cyber-accent transition-all flex flex-col items-center justify-center group"
            >
              <FaEnvelope className="text-4xl text-cyber-accent group-hover:scale-110 transition-transform mb-2" />
              <div className="text-gray-400 text-sm">Email Us</div>
            </motion.a>

            <motion.a
              href="tel:+237677604100"
              whileHover={{ scale: 1.05 }}
              className="bg-cyber-darker/80 border-2 border-cyber-accent/30 rounded-xl p-6 hover:border-cyber-accent transition-all flex flex-col items-center justify-center group"
            >
              <FaPhone className="text-4xl text-cyber-accent group-hover:scale-110 transition-transform mb-2" />
              <div className="text-gray-400 text-sm">Call Us (CAM)</div>
            </motion.a>

            <motion.a
              href="https://wa.me/237677604100?text=Hi,%20I'm%20interested%20in%20the%20ECSD%20Masterclass%20programs"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="bg-cyber-darker/80 border-2 border-green-500/30 rounded-xl p-6 hover:border-green-500 transition-all flex items-center justify-center space-x-3 group"
            >
              <FaWhatsapp className="text-2xl text-green-500 group-hover:scale-110 transition-transform" />
              <div className="text-left">
                <div className="text-gray-400 text-sm">WhatsApp</div>
                <div className="text-white font-semibold text-lg">Chat Now</div>
              </div>
            </motion.a>
          </div>

          {/* Primary CTA Button */}
          <Link href="/#register">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-cyber-accent text-cyber-darker px-12 py-5 rounded-xl font-bold text-xl inline-flex items-center space-x-3 hover:shadow-2xl hover:shadow-cyber-accent/50 transition-all"
            >
              <FaRocket />
              <span>Inquire Now & Register</span>
            </motion.button>
          </Link>

          <p className="text-gray-500 text-sm mt-6">
            Limited slots available. Programs filling fast.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default CTASection
