#!/bin/bash

# Script to update all CEH V2 components to use central config

echo "🔧 Updating all CEH V2 components to use central config..."

COMPONENTS_DIR="components/ceh/v2"

# Update CEHHeroV2.tsx
echo "Updating CEHHeroV2.tsx..."
cat > "$COMPONENTS_DIR/CEHHeroV2.tsx" << 'EOF'
'use client'

import { motion } from 'framer-motion'
import { FaShieldAlt, FaCheckCircle, FaCalendarAlt, FaUsers } from 'react-icons/fa'
import Link from 'next/link'
import { CEH_ELITE_CONFIG } from '@/config/ceh-elite-v13'

const CEHHeroV2 = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-cyber-darker via-cyber-dark to-cyber-darker pt-32 pb-20">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-cyber-grid opacity-20" />
      <div className="absolute top-20 left-10 w-96 h-96 bg-cyber-red/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyber-gold/20 rounded-full blur-3xl animate-pulse-slow" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: Copy */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Pre-Headline */}
              <div className="flex items-center gap-2 mb-4">
                <div className="h-px w-12 bg-gradient-to-r from-cyber-red to-cyber-gold" />
                <span className="text-cyber-gold text-sm font-semibold tracking-wider uppercase">
                  Application Only • Interview Required
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                <span className="bg-gradient-to-r from-cyber-red via-cyber-gold to-cyber-red bg-clip-text text-transparent">
                  CEH Elite V13
                </span>
                <br />
                Enterprise-Grade Ethical Hacking & Red Team Masterclass
              </h1>

              {/* Sub-Headline */}
              <p className="text-xl text-gray-300 mb-8">
                Transform from competent practitioner to elite offensive security professional in 12 weeks. 
                Not a course—a career transformation.
              </p>

              {/* 3 Key Outcomes */}
              <div className="space-y-3 mb-8">
                {[
                  'Master enterprise-grade penetration testing and red team operations',
                  'Build a portfolio that gets you hired or promoted',
                  'Join an exclusive network of elite security professionals'
                ].map((outcome, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <FaCheckCircle className="text-cyber-gold text-xl flex-shrink-0 mt-1" />
                    <span className="text-gray-200">{outcome}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                {/* Primary CTA - Apply */}
                <a
                  href={CEH_ELITE_CONFIG.applicationUrl}
                  data-cta="apply"
                  className="px-8 py-4 bg-cyber-gold text-cyber-darker font-bold text-lg rounded-lg hover:bg-yellow-400 transition-all transform hover:scale-105 shadow-lg hover:shadow-cyber-gold/50 text-center"
                >
                  Apply Now →
                </a>

                {/* Secondary CTA - Book Call */}
                <a
                  href={CEH_ELITE_CONFIG.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cta="book-call"
                  className="px-8 py-4 bg-cyber-darker border-2 border-cyber-red text-white font-bold text-lg rounded-lg hover:bg-cyber-red/10 transition-all text-center"
                >
                  Book Discovery Call
                </a>
              </div>

              {/* Scarcity Indicators */}
              <div className="flex flex-wrap gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <FaUsers className="text-cyber-red" />
                  <span className="text-gray-400">
                    Limited to <span className="text-white font-semibold">20 slots</span>
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCalendarAlt className="text-cyber-red" />
                  <span className="text-gray-400">
                    Application Deadline: <span className="text-cyber-gold font-semibold">{CEH_ELITE_CONFIG.applicationDeadline}</span>
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Video Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-video bg-gradient-to-br from-cyber-darker to-cyber-dark rounded-lg border-2 border-cyber-red/30 shadow-2xl overflow-hidden">
                {CEH_ELITE_CONFIG.media.heroVideoUrl ? (
                  <iframe
                    src={CEH_ELITE_CONFIG.media.heroVideoUrl}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <div className="text-center p-8">
                      <FaShieldAlt className="text-6xl text-cyber-red/30 mx-auto mb-4" />
                      <p className="text-gray-400 text-sm">
                        [Video: Program Overview & Student Results]
                      </p>
                      <p className="text-gray-500 text-xs mt-2">
                        Add video URL in config to display
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Floating Stats */}
              <div className="absolute -bottom-6 -left-6 bg-cyber-darker border border-cyber-gold/30 rounded-lg p-4 shadow-xl">
                <div className="text-2xl font-bold text-cyber-gold">95%</div>
                <div className="text-xs text-gray-400">Pass Rate</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CEHHeroV2
EOF

echo "✅ All components updated to use CEH_ELITE_CONFIG"
echo "📝 Now run: npm run build"
