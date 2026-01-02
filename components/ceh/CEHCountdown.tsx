'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaClock } from 'react-icons/fa'

interface CountdownProps {
  targetDate: string
}

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

const CEHCountdown = ({ targetDate }: CountdownProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date()
      
      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        }
      }
      
      return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    }

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    setTimeLeft(calculateTimeLeft())

    return () => clearInterval(timer)
  }, [targetDate])

  const timeUnits = [
    { value: timeLeft.days, label: 'Days' },
    { value: timeLeft.hours, label: 'Hours' },
    { value: timeLeft.minutes, label: 'Minutes' },
    { value: timeLeft.seconds, label: 'Seconds' }
  ]

  return (
    <section className="py-16 bg-cyber-dark border-y border-cyber-accent/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center space-x-2 mb-6">
            <FaClock className="text-cyber-red animate-pulse text-2xl" />
            <h3 className="text-2xl md:text-3xl font-bold text-white font-rajdhani">
              Program Launch Countdown
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
            {timeUnits.map((unit, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-cyber-darker border-2 border-cyber-accent/30 rounded-xl p-6 hover:border-cyber-accent/60 transition-all"
              >
                <div className="text-4xl md:text-6xl font-bold text-cyber-accent font-rajdhani cyber-glow">
                  {String(unit.value).padStart(2, '0')}
                </div>
                <div className="text-gray-400 text-sm md:text-base mt-2 font-semibold">
                  {unit.label}
                </div>
              </motion.div>
            ))}
          </div>

          <p className="text-cyber-gold font-semibold mt-8 text-lg">
            ⚡ Only 20 Slots Available - Register Now!
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default CEHCountdown
