'use client';

import { useState } from 'react';
import { db } from '@/config/firebase';
import { doc, updateDoc } from 'firebase/firestore';

export default function ApplicationsTab({
  applications,
  partners,
}: {
  applications: any[];
  partners: any[];
}) {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [updating, setUpdating] = useState<string | null>(null);

  const handleStatusUpdate = async (appId: string, newStatus: string) => {
    try {
      setUpdating(appId);
      const updates: any = { status: newStatus };
      if (newStatus === 'paid') {
        updates.paymentDate = new Date().toISOString();
      }
      await updateDoc(doc(db, 'applications', appId), updates);
    } catch (error) {
      console.error('Error updating application:', error);
      alert('Failed to update application status');
    } finally {
      setUpdating(null);
    }
  };

  const getPartnerName = (referralCode: string) => {
    const partner = partners.find((p) => p.referralCode === referralCode);
    return partner ? partner.name : 'Direct (No Referral)';
  };

  const statuses = ['pending', 'interview', 'paid', 'rejected'];

  return (
    <div className="space-y-4">
      {applications.length === 0 ? (
        <div className="text-center py-8 text-gray-400">
          <p>No applications yet.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {applications.map((app) => (
            <div
              key={app.id}
              className="bg-cyber-dark border border-cyber-accent/20 rounded-lg p-4 hover:border-cyber-accent/40 transition-all"
            >
              <div
                className="cursor-pointer flex justify-between items-start"
                onClick={() => setExpandedId(expandedId === app.id ? null : app.id)}
              >
                <div className="flex-1">
                  <h3 className="text-white font-semibold">{app.name}</h3>
                  <p className="text-gray-400 text-sm">{app.email}</p>
                  <div className="flex items-center gap-3 mt-2">
                    <span className="text-xs bg-cyber-accent/20 text-cyber-accent px-2 py-1 rounded">
                      {app.company}
                    </span>
                    <span
                      className={`text-xs px-2 py-1 rounded font-semibold ${
                        app.status === 'paid'
                          ? 'bg-green-500/20 text-green-400'
                          : app.status === 'interview'
                          ? 'bg-blue-500/20 text-blue-400'
                          : app.status === 'pending'
                          ? 'bg-yellow-500/20 text-yellow-400'
                          : 'bg-red-500/20 text-red-400'
                      }`}
                    >
                      {app.status?.toUpperCase()}
                    </span>
                    {app.referralCode && (
                      <span className="text-xs bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded">
                        Via: {getPartnerName(app.referralCode)}
                      </span>
                    )}
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-gray-400 text-xs">Applied</p>
                  <p className="text-white text-sm">
                    {app.createdAt?.toDate?.()?.toLocaleDateString() || 'N/A'}
                  </p>
                </div>
              </div>

              {expandedId === app.id && (
                <div className="mt-4 pt-4 border-t border-cyber-accent/20 space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-gray-400 text-xs mb-1">Role</label>
                      <p className="text-white">{app.role || 'N/A'}</p>
                    </div>
                    <div>
                      <label className="block text-gray-400 text-xs mb-1">Referral Code</label>
                      <p className="text-cyan-400 font-mono text-sm">
                        {app.referralCode || 'None'}
                      </p>
                    </div>
                    <div>
                      <label className="block text-gray-400 text-xs mb-1">Referred By</label>
                      <p className="text-white text-sm">
                        {app.referralCode ? getPartnerName(app.referralCode) : 'Organic'}
                      </p>
                    </div>
                    <div>
                      <label className="block text-gray-400 text-xs mb-1">Payment Date</label>
                      <p className="text-white text-sm">
                        {app.paymentDate
                          ? new Date(app.paymentDate).toLocaleDateString()
                          : 'Not paid'}
                      </p>
                    </div>
                  </div>

                  <div className="bg-cyber-darker/50 p-3 rounded border border-cyber-accent/10">
                    <p className="text-gray-400 text-xs mb-1">Background</p>
                    <p className="text-white text-sm">{app.background || 'N/A'}</p>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-gray-400 text-xs">Update Status</label>
                    <div className="grid grid-cols-2 gap-2">
                      {statuses.map((status) => (
                        <button
                          key={status}
                          onClick={() => handleStatusUpdate(app.id, status)}
                          disabled={updating === app.id}
                          className={`px-3 py-2 rounded text-xs font-semibold transition-all ${
                            app.status === status
                              ? 'bg-cyber-accent text-cyber-darker'
                              : 'bg-cyber-darker border border-cyber-accent/30 text-gray-400 hover:border-cyber-accent'
                          } disabled:opacity-50`}
                        >
                          {status}
                        </button>
                      ))}
                    </div>
                  </div>

                  {app.status === 'paid' && app.referralCode && (
                    <div className="bg-green-500/10 border border-green-500/30 rounded p-3">
                      <p className="text-green-400 text-xs font-semibold">
                        ✓ Commission earned by {getPartnerName(app.referralCode)}
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
