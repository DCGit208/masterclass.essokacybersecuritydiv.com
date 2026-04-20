"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/config/firebase'

export default function PartnerLogin() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')
    try {
      await signInWithEmailAndPassword(auth, email, password)
      router.push('/partners/dashboard')
    } catch (err: any) {
      if (
        err.code === 'auth/invalid-credential' ||
        err.code === 'auth/wrong-password' ||
        err.code === 'auth/user-not-found'
      ) {
        setError('Invalid email or password. Check your welcome email for your credentials.')
      } else {
        setError('Login failed. Please try again.')
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-cyber-darker flex items-center justify-center px-4">
      <div className="bg-cyber-dark/70 border border-cyber-accent/30 rounded-2xl p-8 max-w-md w-full shadow-xl">
        <p className="text-cyber-accent text-sm font-semibold uppercase mb-1">ECSD Partner Portal</p>
        <h1 className="text-3xl font-bold text-white font-rajdhani mb-2">Partner Login</h1>
        <p className="text-gray-400 text-sm mb-6">
          Use the email and password sent in your registration confirmation email.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-300 mb-1">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-cyber-darker border border-cyber-accent/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyber-accent"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-300 mb-1">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-cyber-darker border border-cyber-accent/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyber-accent"
            />
          </div>
          {error && (
            <div className="bg-red-900/40 border border-red-500/50 rounded-lg px-4 py-3 text-red-300 text-sm">
              {error}
            </div>
          )}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-cyber-accent text-cyber-darker font-bold py-3 rounded-lg hover:bg-cyber-accent/90 transition-all disabled:opacity-60"
          >
            {isLoading ? 'Logging in...' : 'Login to Dashboard'}
          </button>
        </form>
        <p className="text-gray-500 text-sm mt-4 text-center">
          Not registered yet?{' '}
          <Link href="/partners/register" className="text-cyber-accent underline">
            Register here
          </Link>
        </p>
      </div>
    </div>
  )
}
