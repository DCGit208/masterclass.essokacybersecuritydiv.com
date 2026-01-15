"use client"

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { FaCopy, FaCheckCircle } from 'react-icons/fa'

const Dashboard = () => {
  const [code, setCode] = useState('YOURCODE')
  const referralLink = useMemo(() => `https://masterclass.essokacybersecuritydiv.com/masterclass/ceh-elite-v13?ref=${code || 'YOURCODE'}`, [code])
  const [copied, setCopied] = useState(false)

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(referralLink)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (e) {
      setCopied(false)
    }
  }

  return (
    <div className="min-h-screen bg-cyber-darker py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-cyber-dark/70 border border-cyber-accent/30 rounded-2xl p-8">
          <div className="flex items-center justify-between flex-wrap gap-3 mb-6">
            <div>
              <p className="text-cyber-accent text-sm font-semibold uppercase">Partner Dashboard (Beta)</p>
              <h1 className="text-3xl font-bold text-white font-rajdhani">Your Referral Link</h1>
              <p className="text-gray-400 text-sm">Share this link so applicants carry your code into their application.</p>
            </div>
            <Link href="/partners/register" className="text-cyber-accent text-sm underline">Need to register?</Link>
          </div>

          <div className="bg-cyber-darker border border-cyber-accent/30 rounded-xl p-4 mb-6">
            <label className="block text-sm text-gray-300 mb-1">Your referral code</label>
            <input
              className="w-full bg-cyber-dark border border-cyber-accent/30 rounded-lg px-4 py-3 text-white"
              value={code}
              onChange={(e) => setCode(e.target.value.toUpperCase())}
              placeholder="CABREL"
            />
            <p className="text-xs text-gray-500 mt-1">Use letters/numbers only. Code will appear in the application form automatically.</p>
          </div>

          <div className="bg-cyber-darker border border-cyber-accent/30 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <p className="text-sm text-gray-400">Referral link</p>
              <p className="text-white font-mono text-sm break-all">{referralLink}</p>
            </div>
            <button onClick={copyLink} className="bg-cyber-accent text-cyber-darker px-4 py-2 rounded-lg font-bold flex items-center gap-2 hover:bg-cyber-accent/90 transition-all">
              <FaCopy /> {copied ? 'Copied' : 'Copy'}
            </button>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-cyber-dark/60 border border-cyber-accent/20 rounded-xl p-4">
              <p className="text-sm text-gray-400">Commission per enrollment</p>
              <p className="text-2xl font-bold text-white font-rajdhani">$500</p>
            </div>
            <div className="bg-cyber-dark/60 border border-cyber-accent/20 rounded-xl p-4">
              <p className="text-sm text-gray-400">Bonus at 10 referrals</p>
              <p className="text-2xl font-bold text-white font-rajdhani">$1,000</p>
            </div>
            <div className="bg-cyber-dark/60 border border-cyber-accent/20 rounded-xl p-4 flex items-center gap-2">
              <FaCheckCircle className="text-cyber-gold" />
              <div>
                <p className="text-sm text-gray-400">Payout</p>
                <p className="text-white font-semibold">Within 7 days of confirmed payment</p>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-cyber-dark/60 border border-cyber-accent/20 rounded-xl p-4">
            <h3 className="text-lg font-bold text-white font-rajdhani mb-2">How tracking works</h3>
            <ul className="text-gray-300 text-sm space-y-2">
              <li>• The `ref` parameter is captured in the application form automatically.</li>
              <li>• We manually verify payment and attribute to your code.</li>
              <li>• Dashboard conversions & payouts summary coming in next release.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
