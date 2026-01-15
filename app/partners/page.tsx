import Link from 'next/link'
import { FaLink, FaMoneyBillWave, FaUserShield, FaClock, FaChartLine } from 'react-icons/fa'

const steps = [
  {
    icon: <FaUserShield className="text-3xl text-cyber-accent" />,
    title: 'Register as a Partner',
    description: 'Quick form to get your referral code approved and activated.',
  },
  {
    icon: <FaLink className="text-3xl text-cyber-gold" />,
    title: 'Share Your Link',
    description: 'We generate a unique link (yourcode) to share with executives and teams.',
  },
  {
    icon: <FaMoneyBillWave className="text-3xl text-primary-400" />,
    title: 'Earn Commissions',
    description: '$500 per enrollment, plus $1,000 bonus when you bring 10+ in a cohort.',
  },
]

const PartnerLanding = () => {
  return (
    <div className="bg-cyber-darker min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-cyber-accent font-semibold uppercase text-sm">Referral Partners</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white font-rajdhani mb-4">Earn with EC-Council Accredited Training</h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Invite executives and business leaders to the Elite Cybersecurity Investor program (CEH Elite V13). We handle delivery; you earn $500 per enrollment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/partners/register" className="bg-cyber-accent text-cyber-darker px-6 py-3 rounded-lg font-bold hover:bg-cyber-accent/90 transition-all">
              Become a Partner
            </Link>
            <Link href="/partners/dashboard" className="border border-cyber-accent text-cyber-accent px-6 py-3 rounded-lg font-bold hover:bg-cyber-accent/10 transition-all">
              Partner Dashboard (Beta)
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {steps.map((step, idx) => (
            <div key={idx} className="bg-cyber-dark/60 border border-cyber-accent/20 rounded-xl p-6 text-center">
              <div className="flex justify-center mb-4">{step.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2 font-rajdhani">{step.title}</h3>
              <p className="text-gray-400 text-sm">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-cyber-dark/70 border border-cyber-accent/20 rounded-2xl p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-2xl font-bold text-white font-rajdhani mb-3">Commission Model</h3>
            <ul className="text-gray-300 space-y-2 text-sm">
              <li>• $500 per successful enrollment</li>
              <li>• $1,000 bonus when you reach 10 enrollments in a cohort</li>
              <li>• Paid within 7 days of payment confirmation</li>
              <li>• Payment methods: bank transfer or mobile money</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white font-rajdhani mb-3">Program Snapshot</h3>
            <ul className="text-gray-300 space-y-2 text-sm">
              <li>• Cohort Start: February 10, 2026</li>
              <li>• Application Deadline: January 25, 2026</li>
              <li>• Max 20 business leaders (interview-only)</li>
              <li>• Investment: $5,000 (payment plans available)</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 bg-gradient-to-r from-cyber-gold/10 to-cyber-accent/10 border border-cyber-gold/30 rounded-xl p-6 flex flex-col md:flex-row gap-4 items-center">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white mb-2 font-rajdhani">Ready to start referring?</h3>
            <p className="text-gray-300 text-sm">Register to receive your unique referral link and partner kit with social posts, email templates, and a tracking dashboard.</p>
          </div>
          <Link href="/partners/register" className="bg-cyber-accent text-cyber-darker px-6 py-3 rounded-lg font-bold hover:bg-cyber-accent/90 transition-all">
            Get My Referral Link
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PartnerLanding
