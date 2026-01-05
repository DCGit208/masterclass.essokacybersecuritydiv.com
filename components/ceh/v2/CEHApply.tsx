'use client'

import { motion } from 'framer-motion'
import { FaCheckCircle, FaCreditCard, FaShieldAlt } from 'react-icons/fa'

const CEHApply = () => {
  return (
    <section id="apply" className="py-20 bg-gradient-to-b from-cyber-dark to-cyber-darker relative overflow-hidden">
      <div className="absolute inset-0 bg-cyber-grid opacity-10" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-rajdhani text-white mb-4">
            Ready to <span className="text-gradient">Transform Your Career?</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Apply now for the next cohort. Limited to 20 professionals.
          </p>
        </motion.div>

        {/* Main Application Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-cyber-darker/80 border-2 border-cyber-accent/40 rounded-2xl p-8 md:p-12 mb-12"
        >
          {/* What You Get After Applying */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white mb-6 font-rajdhani text-center">
              What Happens After You Apply
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Application reviewed within 24-48 hours",
                "10-minute fit call to discuss your goals",
                "Enrollment details if approved",
                "Pre-work access 1 week before start",
                "Welcome to private community",
                "Payment plan options available"
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3 bg-cyber-dark/50 rounded-lg p-4">
                  <FaCheckCircle className="text-cyber-accent text-xl mt-1 flex-shrink-0" />
                  <p className="text-gray-300">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTAs */}
          <div className="text-center mb-8">
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <a
                href="https://YOUR_APPLICATION_FORM_LINK"
                data-cta="apply"
                className="inline-flex items-center justify-center bg-cyber-accent text-cyber-darker px-10 py-5 rounded-xl font-bold text-xl hover:bg-cyber-accent/90 transition-all hover:shadow-2xl hover:shadow-cyber-accent/50 transform hover:scale-105"
              >
                Apply for the Next Cohort →
              </a>
            </div>
            
            <div className="flex items-center justify-center space-x-2 text-gray-400 text-sm mb-6">
              <FaShieldAlt className="text-cyber-accent" />
              <span>Secure application • Interview-only enrollment</span>
            </div>

            <p className="text-gray-400 mb-4">Not ready to apply?</p>
            <a
              href="https://YOUR_BOOKING_LINK"
              data-cta="book-call"
              className="inline-flex items-center justify-center border-2 border-cyber-accent text-cyber-accent px-8 py-4 rounded-xl font-bold text-lg hover:bg-cyber-accent/10 transition-all"
            >
              Book a 10-Min Fit Call
            </a>
          </div>

          {/* Payment Options */}
          <div className="border-t border-cyber-accent/20 pt-8">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <FaCreditCard className="text-cyber-gold text-2xl" />
              <h4 className="text-lg font-bold text-white font-rajdhani">Payment Options</h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="bg-cyber-dark/50 rounded-lg p-4">
                <p className="text-cyber-accent font-bold mb-1">Full Payment</p>
                <p className="text-gray-400 text-sm">$5,000 USD upfront</p>
              </div>
              <div className="bg-cyber-dark/50 rounded-lg p-4">
                <p className="text-cyber-gold font-bold mb-1">Payment Plans</p>
                <p className="text-gray-400 text-sm">Available upon approval</p>
              </div>
              <div className="bg-cyber-dark/50 rounded-lg p-4">
                <p className="text-primary-400 font-bold mb-1">Corporate</p>
                <p className="text-gray-400 text-sm">Team invoicing available</p>
              </div>
            </div>
            <p className="text-gray-500 text-xs text-center mt-4">
              Secure payment processing • Details provided after application approval
            </p>
          </div>
        </motion.div>

        {/* Urgency Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-cyber-red/10 border-2 border-cyber-red/40 rounded-xl p-6 text-center"
        >
          <p className="text-xl text-white font-bold mb-2">
            ⚠️ Applications close February 28, 2026
          </p>
          <p className="text-gray-300">
            Only <span className="text-cyber-red font-bold">20 seats</span> available. Don&apos;t miss this cohort.
          </p>
        </motion.div>

      </div>
    </section>
  )
}

export default CEHApply
