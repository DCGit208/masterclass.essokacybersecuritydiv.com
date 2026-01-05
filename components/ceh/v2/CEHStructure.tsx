'use client'

import { motion } from 'framer-motion'
import { FaBook, FaTicketAlt, FaMicroscope, FaRedo, FaLaptopCode, FaGamepad, FaVideo, FaClock, FaCalendarWeek, FaCheckCircle, FaUsers } from 'react-icons/fa'

const CEHStructure = () => {
  const packageInclusions = [
    {
      icon: <FaBook className="text-3xl text-cyber-accent" />,
      title: 'Official EC-Council eCourseware',
      duration: '2 Years Access',
      description: 'Extended access to cutting-edge curriculum covering all CEH v13 domains'
    },
    {
      icon: <FaTicketAlt className="text-3xl text-cyber-gold" />,
      title: 'Knowledge Exam Voucher',
      duration: '1 Year Validity',
      description: 'Your ticket to the foundational CEH certification'
    },
    {
      icon: <FaMicroscope className="text-3xl text-primary-400" />,
      title: 'Practical Exam Voucher',
      duration: '1 Year Validity',
      description: 'Prove your hands-on mastery in real-world scenarios'
    },
    {
      icon: <FaRedo className="text-3xl text-cyber-accent" />,
      title: 'Exam Retakes Insurance',
      duration: '1 Year Coverage',
      description: 'Peace of mind—we back your success with retake coverage'
    },
    {
      icon: <FaLaptopCode className="text-3xl text-cyber-gold" />,
      title: 'EC-Council iLabs',
      duration: '6 Months Access',
      description: 'Hands-on experience in a live, virtual hacking range environment'
    },
    {
      icon: <FaGamepad className="text-3xl text-primary-400" />,
      title: 'C|EH Engage & Challenge',
      duration: '1 Year Access Each',
      description: 'Compete and refine skills in global cyber challenge ranges'
    },
    {
      icon: <FaVideo className="text-3xl text-cyber-accent" />,
      title: 'Ethical Hacking Video Library',
      duration: '1 Year Access',
      description: 'Visual learning resources from industry-leading experts'
    }
  ]

  const weeklyRhythm = [
    "Live interactive sessions: 3x per week (2-3 hours each)",
    "Hands-on lab assignments: 8-12 hours weekly practice time",
    "Office hours & mentorship: 2 live Q&A sessions per week",
    "Peer collaboration: Private community access for troubleshooting"
  ]

  const deliverables = [
    "Capstone penetration test project (portfolio-ready)",
    "Minimum 20 successful lab exploits documented",
    "Professional penetration test report template",
    "Interview-ready security assessment presentation"
  ]

  return (
    <section id="structure" className="py-20 bg-gradient-to-b from-cyber-darker to-cyber-dark relative overflow-hidden">
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
            Program <span className="text-gradient">Structure</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Clarity, not curriculum dump. Here&apos;s exactly what you get and how it works.
          </p>
        </motion.div>

        {/* Format & Duration */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-cyber-darker/80 border-2 border-cyber-accent/30 rounded-xl p-6 text-center"
          >
            <FaClock className="text-5xl text-cyber-accent mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2 font-rajdhani">Format</h3>
            <p className="text-gray-300">Live + Self-Paced Hybrid</p>
            <p className="text-sm text-gray-400 mt-2">Interactive sessions with flexible lab access</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-cyber-darker/80 border-2 border-cyber-gold/30 rounded-xl p-6 text-center"
          >
            <FaCalendarWeek className="text-5xl text-cyber-gold mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2 font-rajdhani">Duration</h3>
            <p className="text-gray-300">10-12 Weeks</p>
            <p className="text-sm text-gray-400 mt-2">Intensive, focused, results-driven</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-cyber-darker/80 border-2 border-primary-400/30 rounded-xl p-6 text-center"
          >
            <FaUsers className="text-5xl text-primary-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2 font-rajdhani">Cohort Size</h3>
            <p className="text-gray-300">Maximum 20 Professionals</p>
            <p className="text-sm text-gray-400 mt-2">Intimate, high-touch experience</p>
          </motion.div>
        </div>

        {/* Weekly Rhythm */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-cyber-darker/80 border-2 border-cyber-accent/30 rounded-2xl p-8 mb-12"
        >
          <h3 className="text-2xl font-bold text-white mb-6 font-rajdhani text-center">
            📅 Your Weekly Rhythm
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {weeklyRhythm.map((item, index) => (
              <div key={index} className="flex items-start space-x-3 bg-cyber-dark/50 rounded-lg p-4">
                <FaCheckCircle className="text-cyber-accent text-xl mt-1 flex-shrink-0" />
                <p className="text-gray-300">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Package Inclusions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h3 className="text-3xl font-bold text-white mb-8 font-rajdhani text-center">
            🎯 Complete Package Inclusions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {packageInclusions.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-cyber-dark border-2 border-cyber-accent/30 rounded-xl p-6 hover:border-cyber-accent transition-all"
              >
                <div className="mb-4">
                  {item.icon}
                </div>
                <h4 className="text-lg font-bold text-white mb-1 font-rajdhani">
                  {item.title}
                </h4>
                <div className="text-cyber-gold font-semibold text-sm mb-2">
                  {item.duration}
                </div>
                <p className="text-gray-400 text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Deliverables */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-cyber-darker/80 border-2 border-cyber-gold/30 rounded-2xl p-8 mb-12"
        >
          <h3 className="text-2xl font-bold text-white mb-6 font-rajdhani text-center">
            🏆 Your Deliverables (What You Walk Away With)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {deliverables.map((item, index) => (
              <div key={index} className="flex items-start space-x-3 bg-cyber-dark/50 rounded-lg p-4">
                <FaCheckCircle className="text-cyber-gold text-xl mt-1 flex-shrink-0" />
                <p className="text-gray-300">{item}</p>
              </div>
            ))}
          </div>
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

export default CEHStructure
