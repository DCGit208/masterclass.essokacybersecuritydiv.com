'use client'

import { motion } from 'framer-motion'
import { FaQuoteLeft, FaStar, FaBuilding, FaAward } from 'react-icons/fa'

const CEHTrust = () => {
  // TODO: Replace with real testimonials when available
  const testimonials = [
    {
      name: "Sample Testimonial 1",
      role: "Security Consultant",
      company: "Fortune 500 Financial Services",
      quote: "This program transformed my consulting practice. Within 3 months I landed a $120K contract I wouldn't have had the confidence to pursue before.",
      rating: 5,
      note: "(Placeholder - replace with real testimonial)"
    },
    {
      name: "Sample Testimonial 2",
      role: "SOC Manager",
      company: "Global Technology Company",
      quote: "The red team scenarios were invaluable. I went from theory to hands-on competence, and my team now respects my technical authority.",
      rating: 5,
      note: "(Placeholder - replace with real testimonial)"
    },
    {
      name: "Sample Testimonial 3",
      role: "Security Engineer",
      company: "Enterprise Healthcare",
      quote: "Best investment in my career. The mentorship alone was worth the price. I'm now leading penetration tests for our entire organization.",
      rating: 5,
      note: "(Placeholder - replace with real testimonial)"
    }
  ]

  const stats = [
    { number: "500+", label: "Professionals Trained" },
    { number: "95%", label: "Exam Pass Rate" },
    { number: "85%", label: "Career Advancement Within 12 Months" },
    { number: "15+", label: "Years Training Excellence" }
  ]

  return (
    <section id="trust" className="py-20 bg-cyber-dark relative overflow-hidden">
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
            Trust & <span className="text-gradient">Results</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Backed by real results from security professionals worldwide
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-cyber-darker/80 border-2 border-cyber-accent/30 rounded-xl p-6 text-center hover:border-cyber-accent/60 transition-all"
            >
              <div className="text-4xl font-bold text-cyber-accent mb-2 font-rajdhani">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* EC-Council Accredited Training Center - MAJOR CREDIBILITY */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-cyber-gold/20 to-cyber-accent/20 border-2 border-cyber-gold rounded-2xl p-8 mb-16"
        >
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center bg-cyber-gold/20 border-2 border-cyber-gold rounded-full px-6 py-3 mb-4">
              <FaAward className="text-cyber-gold text-3xl mr-3" />
              <span className="text-cyber-gold font-bold text-lg uppercase tracking-wide">Official EC-Council Accredited Training Center</span>
            </div>
            <p className="text-2xl font-bold text-white mb-2 font-rajdhani">Cert ID: EATCS2208</p>
            <p className="text-gray-300 text-sm">Accredited since 2016 | Valid through June 2026</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-cyber-darker/60 rounded-xl p-6">
              <h4 className="text-lg font-bold text-cyber-accent mb-3 font-rajdhani">What This Means for You</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start"><span className="text-cyber-accent mr-2">✓</span> Official EC-Council courseware & materials</li>
                <li className="flex items-start"><span className="text-cyber-accent mr-2">✓</span> Authorized certification exam vouchers</li>
                <li className="flex items-start"><span className="text-cyber-accent mr-2">✓</span> DoD 8140/8570 compliant training</li>
                <li className="flex items-start"><span className="text-cyber-accent mr-2">✓</span> Direct EC-Council support & updates</li>
              </ul>
            </div>
            <div className="bg-cyber-darker/60 rounded-xl p-6">
              <h4 className="text-lg font-bold text-cyber-gold mb-3 font-rajdhani">Your Instructor</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start"><span className="text-cyber-gold mr-2">★</span> Certified EC-Council Instructor (CEI)</li>
                <li className="flex items-start"><span className="text-cyber-gold mr-2">★</span> Global Instructor of the Year 2022</li>
                <li className="flex items-start"><span className="text-cyber-gold mr-2">★</span> 15+ years training excellence</li>
                <li className="flex items-start"><span className="text-cyber-gold mr-2">★</span> 1000+ professionals trained</li>
              </ul>
            </div>
          </div>
          
          <p className="text-center text-gray-400 text-xs mt-6">
            EC-Council and CEH are registered trademarks of EC-Council. Essoka Cybersecurity Division is an officially authorized training partner.
          </p>
        </motion.div>

        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 font-rajdhani text-center">
            What Professionals Say
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-cyber-darker/80 border-2 border-cyber-accent/30 rounded-xl p-6 hover:border-cyber-accent/60 transition-all"
              >
                <FaQuoteLeft className="text-3xl text-cyber-accent/50 mb-4" />
                <div className="flex mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-cyber-gold text-sm" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">&quot;{testimonial.quote}&quot;</p>
                <div className="border-t border-cyber-accent/20 pt-4">
                  <p className="text-white font-bold">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  <p className="text-gray-500 text-xs">{testimonial.company}</p>
                  <p className="text-cyber-gold text-xs mt-2">{testimonial.note}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Trusted By Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-gray-400 mb-6">Trusted by professionals from:</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {["Enterprise Tech", "Financial Services", "Government Agencies", "Consulting Firms"].map((industry, index) => (
              <div key={index} className="bg-cyber-darker/60 border border-cyber-accent/20 rounded-lg p-6 flex items-center justify-center">
                <FaBuilding className="text-3xl text-cyber-accent/50 mr-3" />
                <span className="text-gray-400 text-sm">{industry}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-4">(Logo placeholders - replace with actual client logos when available)</p>
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

export default CEHTrust
