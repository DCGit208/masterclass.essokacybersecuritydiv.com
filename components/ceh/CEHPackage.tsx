'use client'

import { motion } from 'framer-motion'
import { FaBook, FaTicketAlt, FaMicroscope, FaRedo, FaLaptopCode, FaGamepad, FaVideo, FaCheckCircle } from 'react-icons/fa'

const CEHPackage = () => {
  const packageItems = [
    {
      icon: <FaBook className="text-3xl" />,
      title: 'Official eCourseware',
      duration: '2 Years Access',
      description: 'Unrivaled, extended access to cutting-edge curriculum'
    },
    {
      icon: <FaTicketAlt className="text-3xl" />,
      title: 'Knowledge Exam Voucher',
      duration: '1 Year Validity',
      description: 'Your ticket to the foundational certification'
    },
    {
      icon: <FaMicroscope className="text-3xl" />,
      title: 'Practical Exam Voucher',
      duration: '1 Year Validity',
      description: 'Prove your hands-on mastery in real-world scenarios'
    },
    {
      icon: <FaRedo className="text-3xl" />,
      title: 'Exam Retakes (Insurance)',
      duration: '1 Year Coverage',
      description: 'Peace of mind—we back your success'
    },
    {
      icon: <FaLaptopCode className="text-3xl" />,
      title: 'EC-Council iLabs',
      duration: '6 Months Access',
      description: 'Hands-on experience in a live, virtual hacking range'
    },
    {
      icon: <FaGamepad className="text-3xl" />,
      title: 'C|EH Engage & Challenge',
      duration: '1 Year Access Each',
      description: 'Compete and refine skills in global cyber ranges'
    },
    {
      icon: <FaVideo className="text-3xl" />,
      title: 'Ethical Hacking Videos',
      duration: '1 Year Access',
      description: 'Visual learning from industry experts'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-cyber-dark to-cyber-darker relative overflow-hidden">
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
            🎯 PACKAGE INCLUSIONS: <span className="text-gradient">C|EH Elite v13</span>
          </h2>
          <p className="text-xl text-gray-300 mb-4">
            Here is exactly what you get with our <span className="text-cyber-gold font-bold">$5000</span> investment 
            in your enterprise's security posture:
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {packageItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-cyber-darker border-2 border-cyber-accent/30 rounded-xl p-6 hover:border-cyber-accent transition-all group"
            >
              <div className="flex items-start space-x-4">
                <div className="text-cyber-accent group-hover:scale-110 transition-transform mt-1">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-1 font-rajdhani">
                    {item.title}
                  </h3>
                  <div className="text-cyber-gold font-semibold text-sm mb-2">
                    {item.duration}
                  </div>
                  <p className="text-gray-400 text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-cyber-accent/10 to-cyber-gold/10 border-2 border-cyber-accent/40 rounded-2xl p-8 md:p-12 text-center"
        >
          <FaCheckCircle className="text-5xl text-cyber-gold mx-auto mb-6 animate-pulse" />
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 font-rajdhani">
            Become a Market Leader.
          </h3>
          <p className="text-xl text-gray-300 mb-6">
            Secure your team's future. Only <span className="text-cyber-red font-bold">20 slots available</span> for this exclusive program.
          </p>
          <p className="text-2xl font-bold text-cyber-gold mb-8">
            ⚠️ Don't wait for a breach to train your defense. Secure your spot today.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <a 
              href="mailto:dr.coachachu@essokacybersecuritydiv.com"
              className="bg-cyber-accent text-cyber-darker px-10 py-4 rounded-xl font-bold text-lg hover:bg-cyber-accent/90 transition-all hover:shadow-2xl hover:shadow-cyber-accent/50"
            >
              📧 Inquire Now & Register
            </a>
            <a 
              href="tel:+237677604100"
              className="border-2 border-cyber-accent text-cyber-accent px-10 py-4 rounded-xl font-bold text-lg hover:bg-cyber-accent/10 transition-all"
            >
              📞 +237 677 60 41 00 - CAM
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CEHPackage
