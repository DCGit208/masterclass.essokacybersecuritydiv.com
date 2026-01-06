'use client'

import { motion } from 'framer-motion'
import { FaUserTie, FaAward, FaGraduationCap } from 'react-icons/fa'
import Image from 'next/image'
import { CEH_ELITE_CONFIG } from '@/config/ceh-elite-v13'

const CEHInstructor = () => {
  const instructor = CEH_ELITE_CONFIG.instructor

  return (
    <section id="instructor" className="py-20 bg-cyber-darker relative overflow-hidden">
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
            Your <span className="text-gradient">Instructor</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Learn from practitioners who&apos;ve done the work, not just taught the theory
          </p>
        </motion.div>

        {/* Instructor Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-cyber-dark/80 border-2 border-cyber-accent/30 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-8">
              
              {/* Instructor Photo */}
              <div className="flex justify-center">
                <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-cyber-accent/50">
                  <Image
                    src={instructor.photo}
                    alt={instructor.name}
                    fill
                    className="object-cover"
                    style={{ objectPosition: '50% 5%' }}
                    priority
                  />
                </div>
              </div>

              {/* Instructor Info */}
              <div className="md:col-span-2">
                <h3 className="text-3xl font-bold text-white mb-2 font-rajdhani">
                  {instructor.name}
                </h3>
                <p className="text-xl text-cyber-gold mb-4">{instructor.title}</p>
                <p className="text-gray-300 mb-4">{instructor.credentials}</p>
                
                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mt-6">
                  <div className="text-center bg-cyber-darker/80 rounded-lg p-4">
                    <div className="text-2xl font-bold text-cyber-accent font-rajdhani">{instructor.yearsExperience}</div>
                    <div className="text-xs text-gray-400">Experience</div>
                  </div>
                  <div className="text-center bg-cyber-darker/80 rounded-lg p-4">
                    <div className="text-2xl font-bold text-cyber-gold font-rajdhani">{instructor.studentsTrained}</div>
                    <div className="text-xs text-gray-400">Trained</div>
                  </div>
                  <div className="text-center bg-cyber-darker/80 rounded-lg p-4">
                    <div className="text-2xl font-bold text-primary-400 font-rajdhani">{instructor.projectsDelivered}</div>
                    <div className="text-xs text-gray-400">Projects</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Achievements */}
            <div className="mb-8">
              <h4 className="text-xl font-bold text-white mb-4 font-rajdhani flex items-center">
                <FaAward className="text-cyber-gold mr-2" /> Key Achievements
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "Led security assessments for major financial institutions",
                  "Trained corporate security teams across Africa and globally",
                  "Speaker at international cybersecurity conferences",
                  "Published researcher in ethical hacking methodologies"
                ].map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-cyber-accent rounded-full mt-2 flex-shrink-0" />
                    <p className="text-gray-300 text-sm">{achievement}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Founder Statement */}
            <div className="bg-gradient-to-r from-cyber-accent/10 to-cyber-gold/10 border-l-4 border-cyber-accent rounded-r-lg p-6">
              <h4 className="text-lg font-bold text-white mb-3 font-rajdhani">
                Why This Program Exists
              </h4>
              <p className="text-gray-300 leading-relaxed mb-4">
                &quot;I&apos;ve seen too many professionals struggle to transition from theory to practice. 
                They pass certifications but can&apos;t deliver in real client engagements. This program exists 
                to bridge that gap—to create security professionals who don&apos;t just know the material, 
                but can execute with confidence and communicate with authority.&quot;
              </p>
              <p className="text-gray-400 text-sm italic">
                — {instructor.name}, Mentor, Essoka Cybersecurity Division
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
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

export default CEHInstructor
