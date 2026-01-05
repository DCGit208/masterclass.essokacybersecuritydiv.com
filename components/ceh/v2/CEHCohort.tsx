'use client'

import { motion } from 'framer-motion'
import { FaCalendarAlt, FaUsers, FaClipboardCheck, FaClock } from 'react-icons/fa'
import CEHCountdown from '../CEHCountdown'

const CEHCohort = () => {
  // TODO: Update these dates
  const COHORT_START_DATE = "March 15, 2026"
  const APPLICATION_DEADLINE = "February 28, 2026"
  const COUNTDOWN_TARGET = "2026-03-15T00:00:00"

  return (
    <section id="cohort" className="py-20 bg-gradient-to-b from-cyber-dark to-cyber-darker relative overflow-hidden">
      <div className="absolute inset-0 bg-cyber-grid opacity-10" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-rajdhani text-white mb-4">
            Next <span className="text-gradient">Cohort</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Secure your seat before applications close
          </p>
        </motion.div>

        {/* Cohort Details Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto bg-cyber-darker/80 border-2 border-cyber-accent/40 rounded-2xl p-8 md:p-12 mb-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-cyber-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                <FaCalendarAlt className="text-cyber-accent text-xl" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1 font-rajdhani">Cohort Start Date</h3>
                <p className="text-2xl text-cyber-gold font-bold">{COHORT_START_DATE}</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-cyber-red/20 rounded-full flex items-center justify-center flex-shrink-0">
                <FaClock className="text-cyber-red text-xl" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1 font-rajdhani">Application Deadline</h3>
                <p className="text-2xl text-cyber-red font-bold">{APPLICATION_DEADLINE}</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-cyber-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                <FaUsers className="text-cyber-gold text-xl" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1 font-rajdhani">Seat Limit</h3>
                <p className="text-2xl text-cyber-gold font-bold">20 Professionals Only</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary-400/20 rounded-full flex items-center justify-center flex-shrink-0">
                <FaClipboardCheck className="text-primary-400 text-xl" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1 font-rajdhani">Enrollment Process</h3>
                <p className="text-xl text-white font-semibold">Interview Required</p>
              </div>
            </div>

          </div>

          <div className="border-t border-cyber-accent/20 pt-8">
            <h3 className="text-xl font-bold text-white mb-4 font-rajdhani">What Happens After You Apply?</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-cyber-accent rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold text-cyber-darker">1</div>
                <p className="text-gray-300">Application review within 24-48 hours</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-cyber-accent rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold text-cyber-darker">2</div>
                <p className="text-gray-300">10-minute fit call to assess goals and readiness</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-cyber-accent rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold text-cyber-darker">3</div>
                <p className="text-gray-300">If approved: enrollment details and payment options</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-cyber-accent rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold text-cyber-darker">4</div>
                <p className="text-gray-300">Welcome email with pre-work and cohort access</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Countdown */}
        <div className="mb-12">
          <CEHCountdown targetDate={COUNTDOWN_TARGET} />
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
            <span className="text-cyber-red font-bold">Seats fill fast.</span> Don&apos;t wait until the deadline.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://YOUR_APPLICATION_FORM_LINK"
              data-cta="apply"
              className="inline-flex items-center justify-center bg-cyber-accent text-cyber-darker px-8 py-4 rounded-xl font-bold text-lg hover:bg-cyber-accent/90 transition-all hover:shadow-2xl hover:shadow-cyber-accent/50 transform hover:scale-105"
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

export default CEHCohort
