"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaUser, FaBriefcase, FaEnvelope, FaPhone, FaGraduationCap, FaDollarSign, FaCheckCircle, FaTimes, FaSpinner } from "react-icons/fa"

interface FormData {
  // Step 1: Personal Info
  fullName: string
  email: string
  phone: string
  linkedinUrl: string
  referralCode?: string
  
  // Step 2: Professional Background
  currentRole: string

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Referral Code (if any)
                  </label>
                  <input
                    type="text"
                    value={formData.referralCode || ""}
                    onChange={(e) => updateField("referralCode", e.target.value)}
                    className="w-full px-4 py-3 bg-[#0a0e27] border border-[#00f0ff]/30 rounded-lg text-white focus:outline-none focus:border-[#00f0ff]"
                    placeholder="e.g., CABREL"
                  />
                  <p className="text-xs text-gray-500 mt-1">If you received a partner link, the code is pre-filled.</p>
                </div>
  company: string
  yearsExperience: string
  currentSalary: string
  
  // Step 3: Qualification
  technicalBackground: string
  certifications: string
  cyberExperience: string
  
  // Step 4: Motivation & Commitment
  whyCEH: string
  careerGoals: string
  availability: string
  investmentReady: string
}

interface ApplicationFormProps {
  onClose: () => void
  referralCode?: string
}

export default function CEHApplicationForm({ onClose, referralCode }: ApplicationFormProps) {
  const [step, setStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [errors, setErrors] = useState<Partial<FormData>>({})
  
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    linkedinUrl: "",
    referralCode: referralCode || "",
    currentRole: "",
    company: "",
    yearsExperience: "",
    currentSalary: "",
    technicalBackground: "",
    certifications: "",
    cyberExperience: "",
    whyCEH: "",
    careerGoals: "",
    availability: "",
    investmentReady: "",
  })

  const totalSteps = 4

  useEffect(() => {
    if (referralCode) {
      setFormData((prev) => ({ ...prev, referralCode }))
    }
  }, [referralCode])

  const validateStep = (currentStep: number): boolean => {
    const newErrors: Partial<FormData> = {}
    
    if (currentStep === 1) {
      if (!formData.fullName.trim()) newErrors.fullName = "Full name is required"
      if (!formData.email.trim()) newErrors.email = "Email is required"
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Invalid email format"
      if (!formData.phone.trim()) newErrors.phone = "Phone number is required"
    }
    
    if (currentStep === 2) {
      if (!formData.currentRole.trim()) newErrors.currentRole = "Current role is required"
      if (!formData.yearsExperience) newErrors.yearsExperience = "Please select your experience level"
      if (!formData.currentSalary) newErrors.currentSalary = "Please select your salary range"
    }
    
    if (currentStep === 3) {
      if (!formData.technicalBackground) newErrors.technicalBackground = "Please select your background"
      if (!formData.cyberExperience) newErrors.cyberExperience = "Please select your cybersecurity experience"
    }
    
    if (currentStep === 4) {
      if (!formData.whyCEH.trim() || formData.whyCEH.length < 50) {
        newErrors.whyCEH = "Please provide at least 50 characters explaining your motivation"
      }
      if (!formData.careerGoals.trim()) newErrors.careerGoals = "Career goals are required"
      if (!formData.availability) newErrors.availability = "Please confirm your availability"
      if (!formData.investmentReady) newErrors.investmentReady = "Please confirm your investment readiness"
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (validateStep(step)) {
      setStep(step + 1)
    }
  }

  const handleBack = () => {
    setStep(step - 1)
    setErrors({})
  }

  const handleSubmit = async () => {
    if (!validateStep(step)) return
    
    setIsSubmitting(true)
    
    try {
      const response = await fetch("/api/ceh-application", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
      
      if (response.ok) {
        setIsSuccess(true)
        // Redirect to Calendly after 3 seconds
        setTimeout(() => {
          window.location.href = "https://calendly.com/bthedugrp/30min"
        }, 3000)
      } else {
        alert("There was an error submitting your application. Please try again or email us directly.")
        setIsSubmitting(false)
      }
    } catch (error) {
      alert("There was an error submitting your application. Please try again or email us directly.")
      setIsSubmitting(false)
    }
  }

  const updateField = (field: keyof FormData, value: string) => {
    setFormData({ ...formData, [field]: value })
    // Clear error for this field
    if (errors[field]) {
      setErrors({ ...errors, [field]: undefined })
    }
  }

  if (isSuccess) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-[#0a0e27] border border-[#00f0ff]/30 rounded-lg p-8 max-w-md w-full text-center"
        >
          <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <FaCheckCircle className="text-4xl text-green-500" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">Application Submitted!</h3>
          <p className="text-gray-300 mb-6">
            Thank you for your interest in CEH Elite V13. We&apos;ve received your application and will review it within 24-48 hours.
          </p>
          <div className="bg-[#00f0ff]/10 border border-[#00f0ff]/30 rounded-lg p-4 mb-6">
            <p className="text-[#00f0ff] font-semibold mb-2">Next Step: Schedule Your Interview</p>
            <p className="text-sm text-gray-400">
              Redirecting you to book your discovery call in 3 seconds...
            </p>
          </div>
          <p className="text-sm text-gray-500">
            Check your email for confirmation and next steps.
          </p>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 overflow-y-auto">
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-[#0a0e27] border border-[#00f0ff]/30 rounded-lg w-full max-w-2xl my-8"
      >
        {/* Header */}
        <div className="border-b border-[#00f0ff]/20 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-white">CEH Elite V13 Application</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaTimes className="text-xl" />
            </button>
          </div>
          
          {/* Progress Bar */}
          <div className="flex items-center gap-2">
            {[1, 2, 3, 4].map((s) => (
              <div
                key={s}
                className={`flex-1 h-2 rounded-full transition-colors ${
                  s <= step ? "bg-[#00f0ff]" : "bg-gray-700"
                }`}
              />
            ))}
          </div>
          <p className="text-sm text-gray-400 mt-2">Step {step} of {totalSteps}</p>
        </div>

        {/* Form Content */}
        <div className="p-6">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -20, opacity: 0 }}
                className="space-y-4"
              >
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <FaUser className="text-[#00f0ff]" />
                  Personal Information
                </h3>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => updateField("fullName", e.target.value)}
                    className={`w-full px-4 py-3 bg-[#0a0e27] border ${
                      errors.fullName ? "border-red-500" : "border-[#00f0ff]/30"
                    } rounded-lg text-white focus:outline-none focus:border-[#00f0ff]`}
                    placeholder="John Doe"
                  />
                  {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => updateField("email", e.target.value)}
                    className={`w-full px-4 py-3 bg-[#0a0e27] border ${
                      errors.email ? "border-red-500" : "border-[#00f0ff]/30"
                    } rounded-lg text-white focus:outline-none focus:border-[#00f0ff]`}
                    placeholder="john@company.com"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => updateField("phone", e.target.value)}
                    className={`w-full px-4 py-3 bg-[#0a0e27] border ${
                      errors.phone ? "border-red-500" : "border-[#00f0ff]/30"
                    } rounded-lg text-white focus:outline-none focus:border-[#00f0ff]`}
                    placeholder="+1 (555) 000-0000"
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    LinkedIn Profile URL (Optional)
                  </label>
                  <input
                    type="url"
                    value={formData.linkedinUrl}
                    onChange={(e) => updateField("linkedinUrl", e.target.value)}
                    className="w-full px-4 py-3 bg-[#0a0e27] border border-[#00f0ff]/30 rounded-lg text-white focus:outline-none focus:border-[#00f0ff]"
                    placeholder="https://linkedin.com/in/yourprofile"
                  />
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -20, opacity: 0 }}
                className="space-y-4"
              >
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <FaBriefcase className="text-[#00f0ff]" />
                  Professional Background
                </h3>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Current Role / Job Title *
                  </label>
                  <input
                    type="text"
                    value={formData.currentRole}
                    onChange={(e) => updateField("currentRole", e.target.value)}
                    className={`w-full px-4 py-3 bg-[#0a0e27] border ${
                      errors.currentRole ? "border-red-500" : "border-[#00f0ff]/30"
                    } rounded-lg text-white focus:outline-none focus:border-[#00f0ff]`}
                    placeholder="Senior Security Engineer"
                  />
                  {errors.currentRole && <p className="text-red-500 text-sm mt-1">{errors.currentRole}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Company / Organization (Optional)
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => updateField("company", e.target.value)}
                    className="w-full px-4 py-3 bg-[#0a0e27] border border-[#00f0ff]/30 rounded-lg text-white focus:outline-none focus:border-[#00f0ff]"
                    placeholder="Tech Corp Inc."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Years of IT/Security Experience *
                  </label>
                  <select
                    value={formData.yearsExperience}
                    onChange={(e) => updateField("yearsExperience", e.target.value)}
                    className={`w-full px-4 py-3 bg-[#0a0e27] border ${
                      errors.yearsExperience ? "border-red-500" : "border-[#00f0ff]/30"
                    } rounded-lg text-white focus:outline-none focus:border-[#00f0ff]`}
                  >
                    <option value="">Select experience level</option>
                    <option value="3-5">3-5 years</option>
                    <option value="5-8">5-8 years</option>
                    <option value="8-12">8-12 years</option>
                    <option value="12+">12+ years</option>
                  </select>
                  {errors.yearsExperience && <p className="text-red-500 text-sm mt-1">{errors.yearsExperience}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Current Annual Salary Range *
                  </label>
                  <select
                    value={formData.currentSalary}
                    onChange={(e) => updateField("currentSalary", e.target.value)}
                    className={`w-full px-4 py-3 bg-[#0a0e27] border ${
                      errors.currentSalary ? "border-red-500" : "border-[#00f0ff]/30"
                    } rounded-lg text-white focus:outline-none focus:border-[#00f0ff]`}
                  >
                    <option value="">Select salary range</option>
                    <option value="50-75k">$50,000 - $75,000</option>
                    <option value="75-100k">$75,000 - $100,000</option>
                    <option value="100-125k">$100,000 - $125,000</option>
                    <option value="125k+">$125,000+</option>
                    <option value="prefer-not">Prefer not to say</option>
                  </select>
                  {errors.currentSalary && <p className="text-red-500 text-sm mt-1">{errors.currentSalary}</p>}
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -20, opacity: 0 }}
                className="space-y-4"
              >
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <FaGraduationCap className="text-[#00f0ff]" />
                  Technical Qualification
                </h3>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Technical Background *
                  </label>
                  <select
                    value={formData.technicalBackground}
                    onChange={(e) => updateField("technicalBackground", e.target.value)}
                    className={`w-full px-4 py-3 bg-[#0a0e27] border ${
                      errors.technicalBackground ? "border-red-500" : "border-[#00f0ff]/30"
                    } rounded-lg text-white focus:outline-none focus:border-[#00f0ff]`}
                  >
                    <option value="">Select your background</option>
                    <option value="security-engineer">Security Engineer/Analyst</option>
                    <option value="sysadmin">System Administrator</option>
                    <option value="network-engineer">Network Engineer</option>
                    <option value="developer">Software Developer</option>
                    <option value="it-manager">IT Manager/Director</option>
                    <option value="consultant">Security Consultant</option>
                    <option value="other">Other Technical Role</option>
                  </select>
                  {errors.technicalBackground && <p className="text-red-500 text-sm mt-1">{errors.technicalBackground}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Current Certifications (Optional)
                  </label>
                  <input
                    type="text"
                    value={formData.certifications}
                    onChange={(e) => updateField("certifications", e.target.value)}
                    className="w-full px-4 py-3 bg-[#0a0e27] border border-[#00f0ff]/30 rounded-lg text-white focus:outline-none focus:border-[#00f0ff]"
                    placeholder="e.g., Security+, CySA+, CCNA"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Cybersecurity Experience Level *
                  </label>
                  <select
                    value={formData.cyberExperience}
                    onChange={(e) => updateField("cyberExperience", e.target.value)}
                    className={`w-full px-4 py-3 bg-[#0a0e27] border ${
                      errors.cyberExperience ? "border-red-500" : "border-[#00f0ff]/30"
                    } rounded-lg text-white focus:outline-none focus:border-[#00f0ff]`}
                  >
                    <option value="">Select experience level</option>
                    <option value="transitioning">Transitioning into cybersecurity</option>
                    <option value="junior">Junior (0-2 years)</option>
                    <option value="intermediate">Intermediate (2-5 years)</option>
                    <option value="advanced">Advanced (5+ years)</option>
                  </select>
                  {errors.cyberExperience && <p className="text-red-500 text-sm mt-1">{errors.cyberExperience}</p>}
                </div>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -20, opacity: 0 }}
                className="space-y-4"
              >
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <FaDollarSign className="text-[#00f0ff]" />
                  Motivation & Commitment
                </h3>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Why CEH Elite V13? What specific outcomes are you seeking? * (minimum 50 characters)
                  </label>
                  <textarea
                    value={formData.whyCEH}
                    onChange={(e) => updateField("whyCEH", e.target.value)}
                    rows={4}
                    className={`w-full px-4 py-3 bg-[#0a0e27] border ${
                      errors.whyCEH ? "border-red-500" : "border-[#00f0ff]/30"
                    } rounded-lg text-white focus:outline-none focus:border-[#00f0ff]`}
                    placeholder="Describe your specific career goals, challenges you want to solve, and why this program is the right fit..."
                  />
                  <p className="text-sm text-gray-400 mt-1">{formData.whyCEH.length} / 50 characters</p>
                  {errors.whyCEH && <p className="text-red-500 text-sm mt-1">{errors.whyCEH}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Career Goals (12 months from now) *
                  </label>
                  <select
                    value={formData.careerGoals}
                    onChange={(e) => updateField("careerGoals", e.target.value)}
                    className={`w-full px-4 py-3 bg-[#0a0e27] border ${
                      errors.careerGoals ? "border-red-500" : "border-[#00f0ff]/30"
                    } rounded-lg text-white focus:outline-none focus:border-[#00f0ff]`}
                  >
                    <option value="">Select your primary goal</option>
                    <option value="promotion">Get promoted in current role</option>
                    <option value="new-role">Transition to new cybersecurity role</option>
                    <option value="consulting">Start cybersecurity consulting</option>
                    <option value="salary">Increase salary significantly</option>
                    <option value="skills">Master advanced penetration testing skills</option>
                    <option value="leadership">Move into security leadership</option>
                  </select>
                  {errors.careerGoals && <p className="text-red-500 text-sm mt-1">{errors.careerGoals}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    12-Week Time Commitment *
                  </label>
                  <select
                    value={formData.availability}
                    onChange={(e) => updateField("availability", e.target.value)}
                    className={`w-full px-4 py-3 bg-[#0a0e27] border ${
                      errors.availability ? "border-red-500" : "border-[#00f0ff]/30"
                    } rounded-lg text-white focus:outline-none focus:border-[#00f0ff]`}
                  >
                    <option value="">Can you commit 10-15 hours/week?</option>
                    <option value="yes-committed">Yes, fully committed</option>
                    <option value="yes-flexible">Yes, with some schedule flexibility needed</option>
                    <option value="maybe">Maybe, need to discuss schedule</option>
                    <option value="no">No, not at this time</option>
                  </select>
                  {errors.availability && <p className="text-red-500 text-sm mt-1">{errors.availability}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Investment Readiness ($5,000 Program Fee) *
                  </label>
                  <select
                    value={formData.investmentReady}
                    onChange={(e) => updateField("investmentReady", e.target.value)}
                    className={`w-full px-4 py-3 bg-[#0a0e27] border ${
                      errors.investmentReady ? "border-red-500" : "border-[#00f0ff]/30"
                    } rounded-lg text-white focus:outline-none focus:border-[#00f0ff]`}
                  >
                    <option value="">Select investment status</option>
                    <option value="ready-full">Ready to pay in full</option>
                    <option value="ready-plan">Ready to enroll (need payment plan)</option>
                    <option value="corporate">Corporate/employer sponsorship</option>
                    <option value="need-info">Need more information first</option>
                    <option value="not-ready">Not ready financially</option>
                  </select>
                  {errors.investmentReady && <p className="text-red-500 text-sm mt-1">{errors.investmentReady}</p>}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer */}
        <div className="border-t border-[#00f0ff]/20 p-6 flex items-center justify-between">
          <button
            onClick={step > 1 ? handleBack : onClose}
            className="px-6 py-2 text-gray-400 hover:text-white transition-colors"
          >
            {step > 1 ? "Back" : "Cancel"}
          </button>
          
          {step < totalSteps ? (
            <button
              onClick={handleNext}
              className="px-8 py-3 bg-[#00f0ff] text-[#0a0e27] font-bold rounded-lg hover:bg-[#00d4ff] transition-colors"
            >
              Continue
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="px-8 py-3 bg-[#ffd700] text-[#0a0e27] font-bold rounded-lg hover:bg-[#ffed4e] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <FaSpinner className="animate-spin" />
                  Submitting...
                </>
              ) : (
                "Submit Application"
              )}
            </button>
          )}
        </div>
      </motion.div>
    </div>
  )
}
