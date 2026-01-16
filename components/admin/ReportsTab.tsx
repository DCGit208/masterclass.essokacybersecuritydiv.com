'use client';

import { useState } from 'react';

export default function ReportsTab({
  partners,
  applications,
}: {
  partners: any[];
  applications: any[];
}) {
  const paidApps = applications.filter((app) => app.status === 'paid');
  const pendingApps = applications.filter((app) => app.status === 'pending');
  const approvedPartners = partners.filter((p) => p.status === 'approved');

  const totalCommissions = paidApps.reduce((sum, app) => sum + 500, 0);
  const topPartners = approvedPartners
    .sort((a, b) => (b.totalReferrals || 0) - (a.totalReferrals || 0))
    .slice(0, 5);

  const conversionRate =
    applications.length > 0 ? ((paidApps.length / applications.length) * 100).toFixed(1) : '0';

  const exportToCSV = () => {
    // Partners report
    const partnersCSV = [
      ['Partner Report', new Date().toLocaleDateString()],
      ['Name', 'Email', 'Company', 'Referral Code', 'Status', 'Total Referrals', 'Total Earnings'],
      ...approvedPartners.map((p) => [
        p.name,
        p.email,
        p.company || 'N/A',
        p.referralCode,
        p.status,
        p.totalReferrals || 0,
        `$${p.totalEarnings || 0}`,
      ]),
    ]
      .map((row) => row.join(','))
      .join('\n');

    // Applications report
    const appsCSV = [
      ['Applications Report', new Date().toLocaleDateString()],
      [
        'Name',
        'Email',
        'Company',
        'Role',
        'Status',
        'Referred By',
        'Applied Date',
        'Payment Date',
      ],
      ...applications.map((app) => {
        const partner = partners.find((p) => p.referralCode === app.referralCode);
        return [
          app.name,
          app.email,
          app.company || 'N/A',
          app.role || 'N/A',
          app.status,
          partner ? partner.name : 'Organic',
          app.createdAt?.toDate?.()?.toLocaleDateString() || 'N/A',
          app.paymentDate ? new Date(app.paymentDate).toLocaleDateString() : 'N/A',
        ];
      }),
    ]
      .map((row) => row.join(','))
      .join('\n');

    // Download
    const element = document.createElement('a');
    element.setAttribute('href', `data:text/csv;charset=utf-8,${encodeURIComponent(partnersCSV)}`);
    element.setAttribute('download', `partners-report-${Date.now()}.csv`);
    element.click();
  };

  return (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-cyber-dark border border-cyber-accent/20 rounded-lg p-6">
          <p className="text-gray-400 text-sm">Total Revenue</p>
          <p className="text-3xl font-bold text-green-400">${totalCommissions}</p>
          <p className="text-xs text-gray-500 mt-2">{paidApps.length} × $500</p>
        </div>
        <div className="bg-cyber-dark border border-cyber-accent/20 rounded-lg p-6">
          <p className="text-gray-400 text-sm">Conversion Rate</p>
          <p className="text-3xl font-bold text-blue-400">{conversionRate}%</p>
          <p className="text-xs text-gray-500 mt-2">
            {paidApps.length} of {applications.length} applications
          </p>
        </div>
        <div className="bg-cyber-dark border border-cyber-accent/20 rounded-lg p-6">
          <p className="text-gray-400 text-sm">Avg Earnings/Partner</p>
          <p className="text-3xl font-bold text-cyan-400">
            $
            {approvedPartners.length > 0
              ? (
                  approvedPartners.reduce((sum, p) => sum + (p.totalEarnings || 0), 0) /
                  approvedPartners.length
                ).toFixed(0)
              : 0}
          </p>
          <p className="text-xs text-gray-500 mt-2">{approvedPartners.length} partners</p>
        </div>
        <div className="bg-cyber-dark border border-cyber-accent/20 rounded-lg p-6">
          <p className="text-gray-400 text-sm">Pending Approval</p>
          <p className="text-3xl font-bold text-yellow-400">
            {partners.filter((p) => p.status === 'pending').length}
          </p>
          <p className="text-xs text-gray-500 mt-2">{pendingApps.length} pending applications</p>
        </div>
      </div>

      {/* Top Partners */}
      <div className="bg-cyber-dark border border-cyber-accent/20 rounded-lg p-6">
        <h3 className="text-xl font-bold text-white mb-4">Top Performing Partners</h3>
        <div className="space-y-3">
          {topPartners.length === 0 ? (
            <p className="text-gray-400 text-sm">No partners yet</p>
          ) : (
            topPartners.map((partner, index) => (
              <div key={partner.id} className="flex justify-between items-center p-3 bg-cyber-darker rounded">
                <div className="flex items-center gap-3">
                  <span className="text-cyber-accent font-bold text-lg w-8 text-center">#{index + 1}</span>
                  <div>
                    <p className="text-white font-semibold">{partner.name}</p>
                    <p className="text-gray-400 text-xs">{partner.email}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-cyber-accent font-bold">{partner.totalReferrals || 0}</p>
                  <p className="text-green-400 text-sm">${partner.totalEarnings || 0}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Referral Source Breakdown */}
      <div className="bg-cyber-dark border border-cyber-accent/20 rounded-lg p-6">
        <h3 className="text-xl font-bold text-white mb-4">Application Sources</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-cyber-darker p-4 rounded">
            <div className="flex justify-between items-center mb-2">
              <p className="text-gray-400">Via Referrals</p>
              <p className="text-cyber-accent font-bold">
                {applications.filter((a) => a.referralCode).length}
              </p>
            </div>
            <div className="w-full bg-cyber-accent/20 rounded-full h-2">
              <div
                className="bg-cyber-accent h-2 rounded-full"
                style={{
                  width: `${
                    applications.length > 0
                      ? (applications.filter((a) => a.referralCode).length /
                          applications.length) *
                        100
                      : 0
                  }%`,
                }}
              />
            </div>
          </div>
          <div className="bg-cyber-darker p-4 rounded">
            <div className="flex justify-between items-center mb-2">
              <p className="text-gray-400">Organic</p>
              <p className="text-green-400 font-bold">
                {applications.filter((a) => !a.referralCode).length}
              </p>
            </div>
            <div className="w-full bg-green-500/20 rounded-full h-2">
              <div
                className="bg-green-500 h-2 rounded-full"
                style={{
                  width: `${
                    applications.length > 0
                      ? (applications.filter((a) => !a.referralCode).length /
                          applications.length) *
                        100
                      : 0
                  }%`,
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Export */}
      <button
        onClick={exportToCSV}
        className="w-full bg-cyber-accent text-cyber-darker py-3 rounded-lg font-bold hover:bg-cyber-accent/90 transition-all"
      >
        Export All Data as CSV
      </button>
    </div>
  );
}
