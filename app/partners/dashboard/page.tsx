"use client"

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { FaCopy, FaSignOutAlt } from 'react-icons/fa'
import { onAuthStateChanged, signOut, User } from 'firebase/auth'
import { doc, getDoc } from 'firebase/firestore'
import { auth, db } from '@/config/firebase'

interface PartnerData {
  fullName: string
  email: string
  referralCode: string
  totalReferrals: number
  totalEarnings: number
  status: string
  company?: string
  payoutMethod?: string
}

const Dashboard = () => {
  const router = useRouter()
  const [user, setUser] = useState<User | null>(null)
  const [partner, setPartner] = useState<PartnerData | null>(null)
  const [loading, setLoading] = useState(true)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (!firebaseUser) {
        router.push('/partners/login')
        return
      }
      setUser(firebaseUser)
      try {
        const snap = await getDoc(doc(db, 'partners', firebaseUser.uid))
        if (snap.exists()) {
          setPartner(snap.data() as PartnerData)
        }
      } catch (err) {
        console.error('Failed to load partner data', err)
      }
      setLoading(false)
    })
    return () => unsubscribe()
  }, [router])

  const referralLink = partner?.referralCode
    ? `https://masterclass.essokacybersecuritydiv.com/masterclass/ceh-elite-v13?ref=${partner.referralCode}`
    : ''

  const copyLink = async () => {
    if (!referralLink) return
    try {
      await navigator.clipboard.writeText(referralLink)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (e) {}
  }

  const handleSignOut = async () => {
    await signOut(auth)
    router.push('/partners/login')
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-cyber-darker flex items-center justify-center">
        <p className="text-gray-400">Loading your dashboard...</p>
      </div>
    )
  }

  if (!partner) {
    return (
      <div className="min-h-screen bg-cyber-darker flex items-center justify-center px-4">
        <div className="text-center">
          <p className="text-gray-400 mb-2">Partner profile not found.</p>
          <p className="text-gray-500 text-sm">Contact <a href="mailto:dr.coachachu@essokacybersecuritydiv.com" className="text-cyber-accent underline">dr.coachachu@essokacybersecuritydiv.com</a></p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-cyber-darker py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-cyber-dark/70 border border-cyber-accent/30 rounded-2xl p-8">
          <div className="flex items-center justify-between flex-wrap gap-3 mb-6">
            <div>
              <p className="text-cyber-accent text-sm font-semibold uppercase">Partner Dashboard</p>
              <h1 className="text-3xl font-bold text-white font-rajdhani">
                Welcome, {partner.fullName.split(' ')[0]}
              </h1>
              {partner.status === 'pending_approval' && (
                <p className="text-yellow-400 text-sm mt-1">
                  ⏳ Your account is pending approval — referral code active within 24 hours.
                </p>
              )}
            </div>
            <button
              onClick={handleSignOut}
              className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-all"
            >
              <FaSignOutAlt /> Sign out
            </button>
          </div>

          <div className="bg-cyber-darker border border-cyber-accent/30 rounded-xl p-4 mb-4">
            <p className="text-sm text-gray-400 mb-1">Your referral code</p>
            <p className="text-cyber-accent font-mono text-2xl font-bold">
              {partner.referralCode || 'Pending activation'}
            </p>
          </div>

          {referralLink && (
            <div className="bg-cyber-darker border border-cyber-accent/30 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
              <div>
                <p className="text-sm text-gray-400">Your referral link — share this to earn $500 per enrollment</p>
                <p className="text-white font-mono text-sm break-all mt-1">{referralLink}</p>
              </div>
              <button
                onClick={copyLink}
                className="bg-cyber-accent text-cyber-darker px-4 py-2 rounded-lg font-bold flex items-center gap-2 hover:bg-cyber-accent/90 transition-all whitespace-nowrap"
              >
                <FaCopy /> {copied ? 'Copied!' : 'Copy Link'}
              </button>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-cyber-dark/60 border border-cyber-accent/20 rounded-xl p-4">
              <p className="text-sm text-gray-400">Total Referrals</p>
              <p className="text-2xl font-bold text-white font-rajdhani">{partner.totalReferrals ?? 0}</p>
            </div>
            <div className="bg-cyber-dark/60 border border-cyber-accent/20 rounded-xl p-4">
              <p className="text-sm text-gray-400">Total Earnings</p>
              <p className="text-2xl font-bold text-white font-rajdhani">${partner.totalEarnings ?? 0}</p>
            </div>
            <div className="bg-cyber-dark/60 border border-cyber-accent/20 rounded-xl p-4">
              <p className="text-sm text-gray-400">Commission per enrollment</p>
              <p className="text-2xl font-bold text-white font-rajdhani">$500</p>
            </div>
          </div>

          <div className="bg-cyber-dark/60 border border-cyber-accent/20 rounded-xl p-4">
            <h3 className="text-lg font-bold text-white font-rajdhani mb-2">How tracking works</h3>
            <ul className="text-gray-300 text-sm space-y-2">
              <li>• The <code className="text-cyber-accent">ref</code> parameter is captured in the application form automatically when someone uses your link.</li>
              <li>• We verify payment and attribute earnings to your code within 7 days of confirmed enrollment.</li>
              <li>• Questions? Email <a href="mailto:dr.coachachu@essokacybersecuritydiv.com" className="text-cyber-accent underline">dr.coachachu@essokacybersecuritydiv.com</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
