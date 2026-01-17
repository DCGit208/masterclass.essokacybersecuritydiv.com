'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaChevronDown, FaChevronUp, FaEnvelope, FaPhone } from 'react-icons/fa'

const CEHFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "Is this official CEH training? What do I receive at the end?",
      answer: "This program is aligned with EC-Council CEH v13 objectives and includes official exam vouchers, eCourseware, and iLabs access. You'll receive the CEH Elite v13 certification upon successful completion of both knowledge and practical exams. We are an independent training provider—not an official EC-Council ATC—but our curriculum meets all certification requirements."
    },
    {
      question: "Who is this program for exactly?",
      answer: "This is designed for senior security professionals, consultants, team leads, and experienced IT professionals (3+ years) ready to transition into offensive security roles. If you're a complete beginner with no IT background, this intensive program may not be the right fit. Review the 'Is This Right For You?' section above for detailed criteria."
    },
    {
      question: "How is CEH Elite V13 different from standard CEH training?",
      answer: "Standard CEH training focuses primarily on passing the exam. CEH Elite V13 focuses on making you client-ready and enterprise-competent. You get: (1) Enterprise-grade red team simulations, (2) 1-on-1 mentorship access, (3) Real penetration test portfolio projects, (4) Consulting readiness training, (5) Leadership communication skills, (6) Lifetime alumni community access. You'll pass the exam AND be able to execute in real engagements."
    },
    {
      question: "How much time does this require weekly?",
      answer: "Expect 15-20 hours per week: 3 live sessions (2-3 hours each), 8-12 hours of hands-on lab work, plus office hours and peer collaboration. This is an intensive, professional-level program—not a passive course. If you can't commit this time, consider waiting for a cohort that fits your schedule."
    },
    {
      question: "Is it live or self-paced?",
      answer: "Hybrid: Live interactive sessions 3x per week with self-paced lab access. You get the structure of live instruction with the flexibility to practice on your own time. Recordings are available if you miss a session, but live participation is strongly encouraged for maximum value."
    },
    {
      question: "Do you offer mentorship and support?",
      answer: "Yes. You get: (1) 2 live Q&A/office hours per week, (2) Direct instructor access via private community, (3) Peer support in alumni network, (4) Code review and lab feedback, (5) Career positioning guidance (LinkedIn, resume, interview prep). This isn't a 'buy and disappear' course—we're invested in your success."
    },
    {
      question: "What if I'm busy or miss live sessions?",
      answer: "All live sessions are recorded and available for 90 days. However, the value is in live interaction, mentorship, and peer collaboration. If you know you'll miss more than 30% of sessions, we recommend applying for a future cohort when you can fully commit."
    },
    {
      question: "What payment options are available?",
      answer: "We accept: (1) Full payment: $5,000 USD upfront, (2) Payment plans available upon approval (inquire during fit call), (3) Corporate invoicing for team enrollments, (4) Wire transfer, credit card, or bank transfer. Payment details are provided after application approval."
    },
    {
      question: "Do you support corporate or team enrollments?",
      answer: "Absolutely. We offer corporate packages for teams of 3+ with: (1) Volume discounts, (2) Customized scheduling, (3) Private cohorts for your organization, (4) Invoicing and training reports. Contact us at dr.coachachu@essokacybersecuritydiv.com or book a call to discuss team training."
    },
    {
      question: "What results can I realistically expect?",
      answer: "If you commit fully: (1) Pass CEH v13 knowledge + practical exams, (2) Complete 20+ lab exploits and 1 capstone project, (3) Build a portfolio-ready penetration test report, (4) Gain confidence to pursue $120K+ security roles, (5) Access lifetime alumni network. Results depend on your effort—we provide the roadmap, mentorship, and resources. You execute."
    },
    {
      question: "What is the refund policy?",
      answer: "Due to the high-touch, cohort-based nature of this program with limited seats, refunds are evaluated case-by-case within the first 7 days if you haven't accessed course materials. After 7 days or material access, no refunds. We're selective in enrollment to ensure fit—the application and interview process helps prevent mismatches."
    },
    {
      question: "How soon can I start after applying?",
      answer: "Timeline: (1) Apply → Review within 24-48 hours, (2) Fit call scheduled within 3-5 days, (3) If approved → Enrollment details sent immediately, (4) Access granted 1 week before cohort start for pre-work. Next cohort starts March 15, 2026. Apply early—seats fill fast."
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 bg-cyber-darker relative overflow-hidden">
      <div className="absolute inset-0 bg-cyber-grid opacity-5" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-rajdhani text-white mb-4">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Everything you need to know before applying
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4 mb-12">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-cyber-dark/80 border-2 border-cyber-accent/30 rounded-xl overflow-hidden hover:border-cyber-accent/60 transition-all"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <h3 className="text-lg font-bold text-white pr-4 font-rajdhani">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0 text-cyber-accent">
                  {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                </div>
              </button>
              
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-6"
                >
                  <div className="border-t border-cyber-accent/20 pt-4">
                    <p className="text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Final CTA Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-cyber-accent/10 to-cyber-gold/10 border-2 border-cyber-accent/40 rounded-2xl p-8 md:p-12 text-center"
        >
          <h3 className="text-3xl font-bold text-white mb-4 font-rajdhani">
            Still Have Questions?
          </h3>
          <p className="text-xl text-gray-300 mb-8">
            Book a 10-minute call to get your questions answered by our team
          </p>
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
          
          <div className="mt-8 pt-8 border-t border-cyber-accent/20">
            <p className="text-gray-400 text-sm mb-4">Need to speak with us directly?</p>
            <div className="flex gap-6 justify-center">
              <a href="mailto:dr.coachachu@essokacybersecuritydiv.com" className="text-cyber-accent hover:text-cyber-accent/80 flex flex-col items-center gap-2" aria-label="Email us">
                <FaEnvelope className="text-2xl" />
                <span className="text-xs">Email</span>
              </a>
              <a href="tel:+237677604100" className="text-cyber-accent hover:text-cyber-accent/80 flex flex-col items-center gap-2" aria-label="Call us">
                <FaPhone className="text-2xl" />
                <span className="text-xs">Call</span>
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default CEHFAQ
