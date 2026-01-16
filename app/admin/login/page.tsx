'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/config/firebase';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/admin/dashboard');
    } catch (err: any) {
      setError(err.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-cyber-darker flex items-center justify-center px-4">
      <div className="bg-cyber-dark border border-cyber-accent/20 rounded-xl p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-white mb-2 font-rajdhani">Admin Access</h1>
        <p className="text-gray-400 mb-6">Referral System Management</p>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-white text-sm font-semibold mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@essoka.com"
              className="w-full px-4 py-2 bg-cyber-darker border border-cyber-accent/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyber-accent"
              required
            />
          </div>

          <div>
            <label className="block text-white text-sm font-semibold mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-4 py-2 bg-cyber-darker border border-cyber-accent/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyber-accent"
              required
            />
          </div>

          {error && (
            <div className="bg-red-900/20 border border-red-500/30 text-red-400 px-4 py-2 rounded-lg text-sm">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-cyber-accent text-cyber-darker py-2 rounded-lg font-bold hover:bg-cyber-accent/90 transition-all disabled:opacity-50"
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <p className="text-gray-400 text-xs text-center mt-6">
          Restricted access. Only authorized administrators.
        </p>
      </div>
    </div>
  );
}
