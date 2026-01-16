'use client';

import { useState } from 'react';
import { db } from '@/config/firebase';
import { doc, updateDoc } from 'firebase/firestore';

export default function PartnersTab({ partners }: { partners: any[] }) {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [updating, setUpdating] = useState<string | null>(null);

  const handleStatusUpdate = async (partnerId: string, newStatus: string) => {
    try {
      setUpdating(partnerId);
      await updateDoc(doc(db, 'partners', partnerId), { status: newStatus });
    } catch (error) {
      console.error('Error updating partner:', error);
      alert('Failed to update partner status');
    } finally {
      setUpdating(null);
    }
  };

  const handleEarningsUpdate = async (partnerId: string, earnings: number) => {
    try {
      setUpdating(partnerId);
      await updateDoc(doc(db, 'partners', partnerId), { totalEarnings: earnings });
    } catch (error) {
      console.error('Error updating earnings:', error);
      alert('Failed to update earnings');
    } finally {
      setUpdating(null);
    }
  };

  return (
    <div className="space-y-4">
      {partners.length === 0 ? (
        <div className="text-center py-8 text-gray-400">
          <p>No partners registered yet.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="bg-cyber-dark border border-cyber-accent/20 rounded-lg p-4 hover:border-cyber-accent/40 transition-all"
            >
              <div
                className="cursor-pointer flex justify-between items-start"
                onClick={() => setExpandedId(expandedId === partner.id ? null : partner.id)}
              >
                <div className="flex-1">
                  <h3 className="text-white font-semibold">{partner.name}</h3>
                  <p className="text-gray-400 text-sm">{partner.email}</p>
                  <div className="flex items-center gap-4 mt-2">
                    <span className="text-xs bg-cyber-accent/20 text-cyber-accent px-2 py-1 rounded">
                      Code: {partner.referralCode}
                    </span>
                    <span
                      className={`text-xs px-2 py-1 rounded font-semibold ${
                        partner.status === 'approved'
                          ? 'bg-green-500/20 text-green-400'
                          : partner.status === 'pending'
                          ? 'bg-yellow-500/20 text-yellow-400'
                          : 'bg-red-500/20 text-red-400'
                      }`}
                    >
                      {partner.status?.toUpperCase()}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-cyber-accent font-bold text-lg">
                    {partner.totalReferrals || 0}
                  </p>
                  <p className="text-gray-400 text-xs">referrals</p>
                  <p className="text-green-400 font-semibold text-lg mt-1">
                    ${partner.totalEarnings || 0}
                  </p>
                </div>
              </div>

              {expandedId === partner.id && (
                <div className="mt-4 pt-4 border-t border-cyber-accent/20 space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-gray-400 text-xs mb-1">Company</label>
                      <p className="text-white">{partner.company || 'N/A'}</p>
                    </div>
                    <div>
                      <label className="block text-gray-400 text-xs mb-1">Phone</label>
                      <p className="text-white">{partner.phone || 'N/A'}</p>
                    </div>
                    <div>
                      <label className="block text-gray-400 text-xs mb-1">Registered</label>
                      <p className="text-white text-sm">
                        {partner.createdAt?.toDate?.()?.toLocaleDateString() || 'N/A'}
                      </p>
                    </div>
                    <div>
                      <label className="block text-gray-400 text-xs mb-1">Total Earned</label>
                      <p className="text-green-400 font-semibold">${partner.totalEarnings || 0}</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-gray-400 text-xs">Status</label>
                    <div className="flex gap-2">
                      {['approved', 'pending', 'rejected'].map((status) => (
                        <button
                          key={status}
                          onClick={() => handleStatusUpdate(partner.id, status)}
                          disabled={updating === partner.id}
                          className={`px-3 py-1 rounded text-xs font-semibold transition-all ${
                            partner.status === status
                              ? 'bg-cyber-accent text-cyber-darker'
                              : 'bg-cyber-darker border border-cyber-accent/30 text-gray-400 hover:border-cyber-accent'
                          } disabled:opacity-50`}
                        >
                          {status}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-gray-400 text-xs">Adjust Earnings</label>
                    <input
                      type="number"
                      defaultValue={partner.totalEarnings || 0}
                      onBlur={(e) =>
                        handleEarningsUpdate(partner.id, parseInt(e.target.value) || 0)
                      }
                      className="w-full px-3 py-2 bg-cyber-darker border border-cyber-accent/30 rounded text-white text-sm"
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
