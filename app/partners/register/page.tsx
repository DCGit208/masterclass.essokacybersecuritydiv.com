"use client"

import { useState } from 'react'
import { API_ENDPOINTS } from '@/config/firebase'

const RegisterPartner = () => {
  const [formState, setFormState] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    referralCode: '',
    estimatedReferrals: '',
    payoutMethod: '',
    notes: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleChange = (key: string, value: string) => {
    setFormState((prev) => ({ ...prev, [key]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const res = await fetch(API_ENDPOINTS.partnerRegister, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      })
      if (res.ok) {
        setIsSuccess(true)
      } else {
        alert('Unable to submit. Please try again or email dr.coachachu@essokacybersecuritydiv.com')
      }
    } catch (error) {
      alert('Unable to submit. Please try again or email dr.coachachu@essokacybersecuritydiv.com')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-cyber-darker flex items-center justify-center px-4 py-16">
        <div className="bg-cyber-dark/70 border border-cyber-accent/30 rounded-xl p-8 max-w-lg w-full text-center">
          <h1 className="text-3xl font-bold text-white font-rajdhani mb-4">You&apos;re in!</h1>
          <p className="text-gray-300 mb-4">We received your partner registration. We will activate your referral code and send your partner kit within 24 hours.</p>
          <p className="text-cyber-accent font-semibold">Check your email for confirmation.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-cyber-darker py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-cyber-dark/70 border border-cyber-accent/30 rounded-2xl p-8 shadow-xl">
          <h1 className="text-3xl font-bold text-white font-rajdhani mb-2">Become a Referral Partner</h1>
          <p className="text-gray-400 mb-6">Earn $500 per enrollment into the Elite Cybersecurity Investor (CEH Elite V13) program. Fill this form to get your link.</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm text-gray-300 mb-1">Full Name *</label>
              <input className="w-full bg-cyber-darker border border-cyber-accent/30 rounded-lg px-4 py-3 text-white" required value={formState.fullName} onChange={(e) => handleChange('fullName', e.target.value)} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-300 mb-1">Email *</label>
                <input className="w-full bg-cyber-darker border border-cyber-accent/30 rounded-lg px-4 py-3 text-white" required type="email" value={formState.email} onChange={(e) => handleChange('email', e.target.value)} />
              </div>
              <div>
                <label className="block text-sm text-gray-300 mb-1">Phone *</label>
                <input className="w-full bg-cyber-darker border border-cyber-accent/30 rounded-lg px-4 py-3 text-white" required value={formState.phone} onChange={(e) => handleChange('phone', e.target.value)} />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-300 mb-1">Company / Brand</label>
                <input className="w-full bg-cyber-darker border border-cyber-accent/30 rounded-lg px-4 py-3 text-white" value={formState.company} onChange={(e) => handleChange('company', e.target.value)} />
              </div>
              <div>
                <label className="block text-sm text-gray-300 mb-1">Preferred Referral Code</label>
                <input className="w-full bg-cyber-darker border border-cyber-accent/30 rounded-lg px-4 py-3 text-white" placeholder="e.g., CABREL" value={formState.referralCode} onChange={(e) => handleChange('referralCode', e.target.value)} />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-300 mb-1">Expected Referrals (per cohort)</label>
                <select className="w-full bg-cyber-darker border border-cyber-accent/30 rounded-lg px-4 py-3 text-white" value={formState.estimatedReferrals} onChange={(e) => handleChange('estimatedReferrals', e.target.value)}>
                  <option value="">Select</option>
                  <option value="1-3">1-3</option>
                  <option value="4-9">4-9</option>
                  <option value="10+">10 or more</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-300 mb-1">Payout Method</label>
                <select className="w-full bg-cyber-darker border border-cyber-accent/30 rounded-lg px-4 py-3 text-white" value={formState.payoutMethod} onChange={(e) => handleChange('payoutMethod', e.target.value)}>
                  <option value="">Select</option>
                  <option value="bank-transfer">Bank Transfer</option>
                  <option value="mobile-money">Mobile Money</option>
                  <option value="paypal">PayPal</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm text-gray-300 mb-1">Notes (audience, regions, channels)</label>
              <textarea className="w-full bg-cyber-darker border border-cyber-accent/30 rounded-lg px-4 py-3 text-white" rows={3} value={formState.notes} onChange={(e) => handleChange('notes', e.target.value)} />
            </div>
            <button type="submit" disabled={isSubmitting} className="w-full bg-cyber-accent text-cyber-darker font-bold py-3 rounded-lg hover:bg-cyber-accent/90 transition-all disabled:opacity-60">
              {isSubmitting ? 'Submitting...' : 'Submit & Get My Link'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default RegisterPartner
