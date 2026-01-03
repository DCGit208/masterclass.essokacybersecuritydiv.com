'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { FaPaperPlane, FaCheckCircle } from 'react-icons/fa'

interface RegistrationFormProps {
  program?: string
}

interface FormData {
  name: string
  email: string
  phone: string
  company: string
  role: string
  teamSize: string
  message: string
}

const RegistrationForm = ({ program = "General Inquiry" }: RegistrationFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    console.log('Registration Data:', { ...data, program })
    
    setIsSubmitting(false)
    setIsSuccess(true)
    reset()
    
    setTimeout(() => setIsSuccess(false), 5000)
  }

  if (isSuccess) {
    return (
      <section className="py-20 bg-cyber-dark">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-gradient-to-r from-green-500/20 to-cyan-500/20 border-2 border-green-500/50 rounded-2xl p-12 text-center"
          >
            <FaCheckCircle className="text-6xl text-green-400 mx-auto mb-6 animate-bounce" />
            <h3 className="text-3xl font-bold text-white mb-4 font-rajdhani">
              Registration Received!
            </h3>
            <p className="text-gray-300 text-lg mb-4">
              Thank you for your interest in the {program} program.
            </p>
            <p className="text-gray-400">
              Our team will contact you within 24 hours to discuss your enrollment.
            </p>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="register" className="py-20 bg-cyber-dark">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-rajdhani text-white mb-4">
            Register Your <span className="text-gradient">Interest</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Fill out the form below and we&apos;ll contact you with enrollment details
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit(onSubmit)}
          className="bg-cyber-darker border-2 border-cyber-accent/30 rounded-2xl p-8 md:p-12 space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-white font-semibold mb-2">Full Name *</label>
              <input
                type="text"
                {...register('name', { required: 'Name is required' })}
                className="w-full bg-cyber-dark border border-cyber-accent/30 rounded-lg px-4 py-3 text-white focus:border-cyber-accent focus:outline-none transition-all"
                placeholder="John Doe"
              />
              {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>}
            </div>

            <div>
              <label className="block text-white font-semibold mb-2">Email Address *</label>
              <input
                type="email"
                {...register('email', { 
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address'
                  }
                })}
                className="w-full bg-cyber-dark border border-cyber-accent/30 rounded-lg px-4 py-3 text-white focus:border-cyber-accent focus:outline-none transition-all"
                placeholder="john@company.com"
              />
              {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-white font-semibold mb-2">Phone Number *</label>
              <input
                type="tel"
                {...register('phone', { required: 'Phone is required' })}
                className="w-full bg-cyber-dark border border-cyber-accent/30 rounded-lg px-4 py-3 text-white focus:border-cyber-accent focus:outline-none transition-all"
                placeholder="+237 xxx xxx xxx"
              />
              {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone.message}</p>}
            </div>

            <div>
              <label className="block text-white font-semibold mb-2">Company/Organization *</label>
              <input
                type="text"
                {...register('company', { required: 'Company is required' })}
                className="w-full bg-cyber-dark border border-cyber-accent/30 rounded-lg px-4 py-3 text-white focus:border-cyber-accent focus:outline-none transition-all"
                placeholder="Your Company"
              />
              {errors.company && <p className="text-red-400 text-sm mt-1">{errors.company.message}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-white font-semibold mb-2">Your Role *</label>
              <select
                {...register('role', { required: 'Role is required' })}
                className="w-full bg-cyber-dark border border-cyber-accent/30 rounded-lg px-4 py-3 text-white focus:border-cyber-accent focus:outline-none transition-all"
              >
                <option value="">Select Role</option>
                <option value="ciso">CISO / Security Leader</option>
                <option value="manager">IT Manager</option>
                <option value="analyst">Security Analyst</option>
                <option value="consultant">Consultant</option>
                <option value="other">Other</option>
              </select>
              {errors.role && <p className="text-red-400 text-sm mt-1">{errors.role.message}</p>}
            </div>

            <div>
              <label className="block text-white font-semibold mb-2">Team Size</label>
              <select
                {...register('teamSize')}
                className="w-full bg-cyber-dark border border-cyber-accent/30 rounded-lg px-4 py-3 text-white focus:border-cyber-accent focus:outline-none transition-all"
              >
                <option value="">Select Team Size</option>
                <option value="1-5">1-5 people</option>
                <option value="6-10">6-10 people</option>
                <option value="11-20">11-20 people</option>
                <option value="20+">20+ people</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-white font-semibold mb-2">Message / Requirements</label>
            <textarea
              {...register('message')}
              rows={4}
              className="w-full bg-cyber-dark border border-cyber-accent/30 rounded-lg px-4 py-3 text-white focus:border-cyber-accent focus:outline-none transition-all"
              placeholder="Tell us about your training needs..."
            />
          </div>

          <div className="pt-4">
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-cyber-accent text-cyber-darker px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center space-x-3 hover:bg-cyber-accent/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-cyber-darker" />
                  <span>Submitting...</span>
                </>
              ) : (
                <>
                  <FaPaperPlane />
                  <span>Submit Registration</span>
                </>
              )}
            </motion.button>
          </div>

          <p className="text-gray-500 text-sm text-center mt-4">
            * Required fields. We respect your privacy and will not share your information.
          </p>
        </motion.form>
      </div>
    </section>
  )
}

export default RegistrationForm
