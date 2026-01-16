'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { auth, db } from '@/config/firebase';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import PartnersTab from '@/components/admin/PartnersTab';
import ApplicationsTab from '@/components/admin/ApplicationsTab';
import ReportsTab from '@/components/admin/ReportsTab';

export default function AdminDashboard() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'partners' | 'applications' | 'reports'>('partners');
  const [partners, setPartners] = useState<any[]>([]);
  const [applications, setApplications] = useState<any[]>([]);
  const router = useRouter();

  // Check auth
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        router.push('/admin/login');
      } else {
        setUser(currentUser);
      }
      setLoading(false);
    });
    return unsubscribe;
  }, [router]);

  // Fetch partners
  useEffect(() => {
    if (!user) return;
    const partnersRef = collection(db, 'partners');
    const unsubscribe = onSnapshot(partnersRef, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setPartners(data);
    });
    return unsubscribe;
  }, [user]);

  // Fetch applications
  useEffect(() => {
    if (!user) return;
    const appsRef = collection(db, 'applications');
    const unsubscribe = onSnapshot(appsRef, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setApplications(data);
    });
    return unsubscribe;
  }, [user]);

  if (loading) {
    return (
      <div className="min-h-screen bg-cyber-darker flex items-center justify-center">
        <p className="text-white">Loading...</p>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  const handleLogout = async () => {
    await signOut(auth);
    router.push('/admin/login');
  };

  const totalEarnings = applications
    .filter((app) => app.status === 'paid')
    .reduce((sum, app) => sum + 500, 0);

  const totalPartners = partners.filter((p) => p.status === 'approved').length;
  const totalApplications = applications.filter((a) => a.status === 'paid').length;

  return (
    <div className="min-h-screen bg-cyber-darker">
      {/* Header */}
      <div className="bg-cyber-dark border-b border-cyber-accent/20 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-white font-rajdhani">Referral Admin</h1>
              <p className="text-gray-400 text-sm">Logged in as: {user.email}</p>
            </div>
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-all"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-cyber-dark border border-cyber-accent/20 rounded-lg p-6">
            <p className="text-gray-400 text-sm">Active Partners</p>
            <p className="text-3xl font-bold text-cyber-accent">{totalPartners}</p>
          </div>
          <div className="bg-cyber-dark border border-cyber-accent/20 rounded-lg p-6">
            <p className="text-gray-400 text-sm">Paid Enrollments</p>
            <p className="text-3xl font-bold text-cyber-gold">{totalApplications}</p>
          </div>
          <div className="bg-cyber-dark border border-cyber-accent/20 rounded-lg p-6">
            <p className="text-gray-400 text-sm">Total Commissions</p>
            <p className="text-3xl font-bold text-green-500">${totalEarnings}</p>
          </div>
          <div className="bg-cyber-dark border border-cyber-accent/20 rounded-lg p-6">
            <p className="text-gray-400 text-sm">Pending Approvals</p>
            <p className="text-3xl font-bold text-yellow-500">
              {partners.filter((p) => p.status === 'pending').length}
            </p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex space-x-4 mb-6 border-b border-cyber-accent/20">
          <button
            onClick={() => setActiveTab('partners')}
            className={`px-4 py-2 font-semibold transition-all ${
              activeTab === 'partners'
                ? 'text-cyber-accent border-b-2 border-cyber-accent'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Partners ({partners.length})
          </button>
          <button
            onClick={() => setActiveTab('applications')}
            className={`px-4 py-2 font-semibold transition-all ${
              activeTab === 'applications'
                ? 'text-cyber-accent border-b-2 border-cyber-accent'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Applications ({applications.length})
          </button>
          <button
            onClick={() => setActiveTab('reports')}
            className={`px-4 py-2 font-semibold transition-all ${
              activeTab === 'reports'
                ? 'text-cyber-accent border-b-2 border-cyber-accent'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Reports
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === 'partners' && <PartnersTab partners={partners} />}
        {activeTab === 'applications' && (
          <ApplicationsTab applications={applications} partners={partners} />
        )}
        {activeTab === 'reports' && (
          <ReportsTab partners={partners} applications={applications} />
        )}
      </div>
    </div>
  );
}
