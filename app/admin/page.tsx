'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import { getFirestore, collection, getDocs, doc, updateDoc } from 'firebase/firestore';
import { initializeApp, getApps } from 'firebase/app';

// Firebase config from environment
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Initialize Firebase only once
let app: any = null;
let auth: any = null;
let db: any = null;

const initFirebase = () => {
  if (getApps().length === 0) {
    app = initializeApp(firebaseConfig);
  } else {
    app = getApps()[0];
  }
  auth = getAuth(app);
  db = getFirestore(app);
};

export default function AdminDashboard() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'partners' | 'applications' | 'reports'>('partners');
  // Login state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [firebaseError, setFirebaseError] = useState('');

  // Data states
  const [partners, setPartners] = useState<any[]>([]);
  const [applications, setApplications] = useState<any[]>([]);
  const [stats, setStats] = useState({
    totalPartners: 0,
    activePartners: 0,
    totalApplications: 0,
    paidApplications: 0,
    totalRevenue: 0,
    pendingCommissions: 0,
  });

  useEffect(() => {
    // Check if Firebase config is available
    if (!process.env.NEXT_PUBLIC_FIREBASE_API_KEY || !process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID) {
      setFirebaseError('Firebase configuration missing. Check environment variables.');
      return;
    }

    // Initialize Firebase on client only
    initFirebase();
    
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      if (currentUser) {
        loadDashboardData();
      }
    });
    return () => unsubscribe();
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error: any) {
      setLoginError(error.message || 'Login failed');
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
  };

  const loadDashboardData = async () => {
    try {
      // Load partners
      const partnersSnapshot = await getDocs(collection(db, 'partners'));
      const partnersData = partnersSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setPartners(partnersData);

      // Load applications
      const applicationsSnapshot = await getDocs(collection(db, 'applications'));
      const applicationsData = applicationsSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setApplications(applicationsData);

      // Calculate stats
      const activePartners = partnersData.filter((p: any) => p.status === 'approved').length;
      const paidApplications = applicationsData.filter((a: any) => a.status === 'paid').length;
      const totalRevenue = paidApplications * 5000;
      const pendingCommissions = partnersData.reduce((sum: number, p: any) => sum + (p.totalEarnings || 0), 0);

      setStats({
        totalPartners: partnersData.length,
        activePartners,
        totalApplications: applicationsData.length,
        paidApplications,
        totalRevenue,
        pendingCommissions,
      });
    } catch (error) {
      console.error('Error loading data:', error);
    }
  };

  const updatePartnerStatus = async (partnerId: string, status: string) => {
    try {
      await updateDoc(doc(db, 'partners', partnerId), { status });
      loadDashboardData();
    } catch (error) {
      console.error('Error updating partner:', error);
    }
  };

  const updateApplicationStatus = async (applicationId: string, status: string) => {
    try {
      const updateData: any = { status };
      if (status === 'paid') {
        updateData.paymentDate = new Date().toISOString();
        
        // Find the application to get referral code
        const app = applications.find(a => a.id === applicationId);
        if (app && app.referralCode) {
          // Update partner's earnings
          const partner = partners.find(p => p.referralCode === app.referralCode);
          if (partner) {
            const newTotalReferrals = (partner.totalReferrals || 0) + 1;
            let newEarnings = (partner.totalEarnings || 0) + 500;
            
            // Bonus at 10 referrals
            if (newTotalReferrals === 10) {
              newEarnings += 1000;
            }
            
            await updateDoc(doc(db, 'partners', partner.id), {
              totalReferrals: newTotalReferrals,
              totalEarnings: newEarnings,
            });
          }
        }
      }
      
      await updateDoc(doc(db, 'applications', applicationId), updateData);
      loadDashboardData();
    } catch (error) {
      console.error('Error updating application:', error);
    }
  };

  // Login screen
  if (loading) {
    return (
      <div className="min-h-screen bg-cyber-darker flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  if (firebaseError) {
    return (
      <div className="min-h-screen bg-cyber-darker flex items-center justify-center">
        <div className="bg-cyber-dark border border-red-500 rounded-xl p-8 max-w-md w-full">
          <h1 className="text-3xl font-bold text-red-500 mb-4 font-rajdhani">Configuration Error</h1>
          <p className="text-gray-300 mb-4">{firebaseError}</p>
          <p className="text-gray-400 text-sm">
            Make sure `.env.local` has all Firebase environment variables:
          </p>
          <ul className="text-gray-400 text-xs mt-3 space-y-1">
            <li>• NEXT_PUBLIC_FIREBASE_API_KEY</li>
            <li>• NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN</li>
            <li>• NEXT_PUBLIC_FIREBASE_PROJECT_ID</li>
            <li>• NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET</li>
            <li>• NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID</li>
            <li>• NEXT_PUBLIC_FIREBASE_APP_ID</li>
          </ul>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-cyber-darker flex items-center justify-center">
        <div className="bg-cyber-dark border border-cyber-accent/20 rounded-xl p-8 max-w-md w-full">
          <h1 className="text-3xl font-bold text-white mb-6 font-rajdhani text-center">Admin Login</h1>
          {loginError && (
            <div className="bg-red-500/10 border border-red-500 text-red-500 p-3 rounded mb-4 text-sm">
              {loginError}
            </div>
          )}
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-gray-300 text-sm mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-cyber-darker border border-cyber-accent/20 text-white px-4 py-3 rounded focus:outline-none focus:border-cyber-accent"
                required
              />
            </div>
            <div>
              <label className="block text-gray-300 text-sm mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-cyber-darker border border-cyber-accent/20 text-white px-4 py-3 rounded focus:outline-none focus:border-cyber-accent"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-cyber-accent text-cyber-darker py-3 rounded font-bold hover:bg-cyber-accent/90 transition"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  // Admin Dashboard
  return (
    <div className="min-h-screen bg-cyber-darker">
      {/* Header */}
      <div className="bg-cyber-dark border-b border-cyber-accent/20">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white font-rajdhani">Admin Dashboard</h1>
          <div className="flex items-center gap-4">
            <span className="text-gray-400 text-sm">{user.email}</span>
            <button
              onClick={handleLogout}
              className="bg-red-500/20 text-red-500 px-4 py-2 rounded hover:bg-red-500/30 transition text-sm"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          <div className="bg-cyber-dark border border-cyber-accent/20 rounded-lg p-4">
            <div className="text-gray-400 text-sm mb-1">Total Partners</div>
            <div className="text-white text-2xl font-bold">{stats.totalPartners}</div>
          </div>
          <div className="bg-cyber-dark border border-cyber-accent/20 rounded-lg p-4">
            <div className="text-gray-400 text-sm mb-1">Active Partners</div>
            <div className="text-cyber-accent text-2xl font-bold">{stats.activePartners}</div>
          </div>
          <div className="bg-cyber-dark border border-cyber-accent/20 rounded-lg p-4">
            <div className="text-gray-400 text-sm mb-1">Applications</div>
            <div className="text-white text-2xl font-bold">{stats.totalApplications}</div>
          </div>
          <div className="bg-cyber-dark border border-cyber-accent/20 rounded-lg p-4">
            <div className="text-gray-400 text-sm mb-1">Paid Students</div>
            <div className="text-green-500 text-2xl font-bold">{stats.paidApplications}</div>
          </div>
          <div className="bg-cyber-dark border border-cyber-accent/20 rounded-lg p-4">
            <div className="text-gray-400 text-sm mb-1">Total Revenue</div>
            <div className="text-cyber-gold text-2xl font-bold">${stats.totalRevenue.toLocaleString()}</div>
          </div>
          <div className="bg-cyber-dark border border-cyber-accent/20 rounded-lg p-4">
            <div className="text-gray-400 text-sm mb-1">Pending Commissions</div>
            <div className="text-orange-500 text-2xl font-bold">${stats.pendingCommissions.toLocaleString()}</div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-6 border-b border-cyber-accent/20">
          <button
            onClick={() => setActiveTab('partners')}
            className={`px-4 py-2 font-semibold transition ${
              activeTab === 'partners'
                ? 'text-cyber-accent border-b-2 border-cyber-accent'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Partners ({partners.length})
          </button>
          <button
            onClick={() => setActiveTab('applications')}
            className={`px-4 py-2 font-semibold transition ${
              activeTab === 'applications'
                ? 'text-cyber-accent border-b-2 border-cyber-accent'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Applications ({applications.length})
          </button>
          <button
            onClick={() => setActiveTab('reports')}
            className={`px-4 py-2 font-semibold transition ${
              activeTab === 'reports'
                ? 'text-cyber-accent border-b-2 border-cyber-accent'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Reports
          </button>
        </div>

        {/* Partners Tab */}
        {activeTab === 'partners' && (
          <div className="bg-cyber-dark border border-cyber-accent/20 rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-cyber-darker">
                  <tr>
                    <th className="text-left text-gray-400 text-sm p-4">Name</th>
                    <th className="text-left text-gray-400 text-sm p-4">Email</th>
                    <th className="text-left text-gray-400 text-sm p-4">Referral Code</th>
                    <th className="text-left text-gray-400 text-sm p-4">Referrals</th>
                    <th className="text-left text-gray-400 text-sm p-4">Earnings</th>
                    <th className="text-left text-gray-400 text-sm p-4">Status</th>
                    <th className="text-left text-gray-400 text-sm p-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {partners.map((partner) => (
                    <tr key={partner.id} className="border-t border-cyber-accent/10">
                      <td className="p-4 text-white">{partner.name}</td>
                      <td className="p-4 text-gray-400 text-sm">{partner.email}</td>
                      <td className="p-4 text-cyber-accent font-mono">{partner.referralCode}</td>
                      <td className="p-4 text-white">{partner.totalReferrals || 0}</td>
                      <td className="p-4 text-cyber-gold font-semibold">${partner.totalEarnings || 0}</td>
                      <td className="p-4">
                        <span
                          className={`px-3 py-1 rounded text-xs font-semibold ${
                            partner.status === 'approved'
                              ? 'bg-green-500/20 text-green-500'
                              : partner.status === 'rejected'
                              ? 'bg-red-500/20 text-red-500'
                              : 'bg-yellow-500/20 text-yellow-500'
                          }`}
                        >
                          {partner.status || 'pending'}
                        </span>
                      </td>
                      <td className="p-4">
                        <div className="flex gap-2">
                          {partner.status !== 'approved' && (
                            <button
                              onClick={() => updatePartnerStatus(partner.id, 'approved')}
                              className="bg-green-500/20 text-green-500 px-3 py-1 rounded text-xs hover:bg-green-500/30"
                            >
                              Approve
                            </button>
                          )}
                          {partner.status !== 'rejected' && (
                            <button
                              onClick={() => updatePartnerStatus(partner.id, 'rejected')}
                              className="bg-red-500/20 text-red-500 px-3 py-1 rounded text-xs hover:bg-red-500/30"
                            >
                              Reject
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Applications Tab */}
        {activeTab === 'applications' && (
          <div className="bg-cyber-dark border border-cyber-accent/20 rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-cyber-darker">
                  <tr>
                    <th className="text-left text-gray-400 text-sm p-4">Name</th>
                    <th className="text-left text-gray-400 text-sm p-4">Email</th>
                    <th className="text-left text-gray-400 text-sm p-4">Company</th>
                    <th className="text-left text-gray-400 text-sm p-4">Referral Code</th>
                    <th className="text-left text-gray-400 text-sm p-4">Date</th>
                    <th className="text-left text-gray-400 text-sm p-4">Status</th>
                    <th className="text-left text-gray-400 text-sm p-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {applications.map((app) => (
                    <tr key={app.id} className="border-t border-cyber-accent/10">
                      <td className="p-4 text-white">{app.name}</td>
                      <td className="p-4 text-gray-400 text-sm">{app.email}</td>
                      <td className="p-4 text-gray-400 text-sm">{app.company}</td>
                      <td className="p-4 text-cyber-accent font-mono text-sm">{app.referralCode || 'Direct'}</td>
                      <td className="p-4 text-gray-400 text-sm">
                        {new Date(app.createdAt).toLocaleDateString()}
                      </td>
                      <td className="p-4">
                        <span
                          className={`px-3 py-1 rounded text-xs font-semibold ${
                            app.status === 'paid'
                              ? 'bg-green-500/20 text-green-500'
                              : app.status === 'interview'
                              ? 'bg-blue-500/20 text-blue-500'
                              : app.status === 'rejected'
                              ? 'bg-red-500/20 text-red-500'
                              : 'bg-yellow-500/20 text-yellow-500'
                          }`}
                        >
                          {app.status || 'pending'}
                        </span>
                      </td>
                      <td className="p-4">
                        <select
                          value={app.status || 'pending'}
                          onChange={(e) => updateApplicationStatus(app.id, e.target.value)}
                          className="bg-cyber-darker border border-cyber-accent/20 text-white px-3 py-1 rounded text-sm"
                        >
                          <option value="pending">Pending</option>
                          <option value="interview">Interview</option>
                          <option value="paid">Paid</option>
                          <option value="rejected">Rejected</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Reports Tab */}
        {activeTab === 'reports' && (
          <div className="space-y-6">
            <div className="bg-cyber-dark border border-cyber-accent/20 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4 font-rajdhani">Commission Summary</h3>
              <div className="space-y-3">
                {partners
                  .filter((p: any) => p.totalEarnings > 0)
                  .sort((a: any, b: any) => (b.totalEarnings || 0) - (a.totalEarnings || 0))
                  .map((partner: any) => (
                    <div key={partner.id} className="flex justify-between items-center border-b border-cyber-accent/10 pb-3">
                      <div>
                        <div className="text-white font-semibold">{partner.name}</div>
                        <div className="text-gray-400 text-sm">{partner.email}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-cyber-gold font-bold">${partner.totalEarnings}</div>
                        <div className="text-gray-400 text-sm">{partner.totalReferrals} referrals</div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            <div className="bg-cyber-dark border border-cyber-accent/20 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4 font-rajdhani">Revenue Breakdown</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400">Paid Enrollments:</span>
                  <span className="text-white font-semibold">{stats.paidApplications} × $5,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Total Revenue:</span>
                  <span className="text-cyber-gold font-bold text-xl">${stats.totalRevenue.toLocaleString()}</span>
                </div>
                <div className="flex justify-between border-t border-cyber-accent/10 pt-3">
                  <span className="text-gray-400">Partner Commissions:</span>
                  <span className="text-orange-500 font-bold">${stats.pendingCommissions.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Net Profit:</span>
                  <span className="text-green-500 font-bold text-xl">
                    ${(stats.totalRevenue - stats.pendingCommissions).toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
