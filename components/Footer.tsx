'use client'

import Link from 'next/link'
import Image from 'next/image'
import { FaLinkedin, FaFacebook, FaEnvelope, FaPhone, FaMapMarkerAlt, FaShieldAlt, FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-cyber-darker border-t border-cyber-accent/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <FaShieldAlt className="text-2xl text-cyber-accent" />
              <h3 className="text-xl font-bold text-white font-rajdhani">ECSD MASTERCLASS</h3>
            </div>
            <p className="text-gray-400 text-sm">
              World-class cybersecurity training programs for enterprises and professionals.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/drcoachachugustave" target="_blank" rel="noopener noreferrer" 
                className="text-gray-400 hover:text-cyber-accent transition-colors">
                <FaLinkedin className="text-xl" />
              </a>
              <a href="https://facebook.com/essokacyberdiv" target="_blank" rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyber-accent transition-colors">
                <FaFacebook className="text-xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 font-rajdhani">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-cyber-accent transition-colors">Home</Link></li>
              <li><Link href="/#programs" className="text-gray-400 hover:text-cyber-accent transition-colors">Programs</Link></li>
              <li><Link href="/masterclass/ceh-elite-v13" className="text-gray-400 hover:text-cyber-accent transition-colors">CEH Elite v13</Link></li>
              <li><Link href="/#register" className="text-gray-400 hover:text-cyber-accent transition-colors">Register</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-white font-semibold mb-4 font-rajdhani">Training Areas</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/#programs" className="text-gray-400 hover:text-cyber-accent transition-colors">VAPT & Penetration Testing</Link></li>
              <li><Link href="/#programs" className="text-gray-400 hover:text-cyber-accent transition-colors">Cyber Forensics</Link></li>
              <li><Link href="/#programs" className="text-gray-400 hover:text-cyber-accent transition-colors">Software Security</Link></li>
              <li><Link href="/#programs" className="text-gray-400 hover:text-cyber-accent transition-colors">Network Defense</Link></li>
              <li><Link href="/#programs" className="text-gray-400 hover:text-cyber-accent transition-colors">Governance & Compliance</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4 font-rajdhani">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2 text-gray-400">
                <FaEnvelope className="text-cyber-accent mt-1 flex-shrink-0" />
                <a href="mailto:dr.coachachu@essokacybersecuritydiv.com" className="hover:text-cyber-accent transition-colors">
                  dr.coachachu@essokacybersecuritydiv.com
                </a>
              </li>
              <li className="flex items-start space-x-2 text-gray-400">
                <FaPhone className="text-cyber-accent mt-1 flex-shrink-0" />
                <a href="tel:+237677604100" className="hover:text-cyber-accent transition-colors">
                  +237 677 60 41 00
                </a>
              </li>
              <li className="flex items-start space-x-2 text-gray-400">
                <FaWhatsapp className="text-green-500 mt-1 flex-shrink-0" />
                <a href="https://wa.me/237677604100?text=Hi,%20I'm%20interested%20in%20ECSD%20Masterclass" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition-colors">
                  WhatsApp Chat
                </a>
              </li>
              <li className="flex items-start space-x-2 text-gray-400">
                <FaMapMarkerAlt className="text-cyber-accent mt-1 flex-shrink-0" />
                <span>Cameroon</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Accreditation Section */}
        <div className="border-t border-cyber-accent/20 mt-8 pt-8 mb-8">
          <div className="text-center mb-6">
            <h4 className="text-white font-bold text-lg font-rajdhani mb-4">Official EC-Council Accredited Training Center</h4>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              {/* ATC Badge */}
              <div className="text-center">
                <Image src="/atc-logo.png" alt="EC-Council ATC Logo" width={80} height={80} className="mx-auto mb-2" />
                <p className="text-gray-300 text-xs font-semibold">Cert ID: EATCS2208</p>
                <p className="text-gray-400 text-xs">Valid through June 30, 2026</p>
              </div>
              
              {/* Divider */}
              <div className="hidden sm:block w-px h-24 bg-cyber-accent/20" />
              
              {/* Instructor Credentials */}
              <div className="text-center">
                <p className="text-cyber-gold font-bold text-sm mb-1">Certified EC-Council Instructor (CEI)</p>
                <p className="text-white font-semibold mb-2">Dr. Coach Achu Gustave</p>
                <p className="text-gray-400 text-xs mb-1">Global Instructor of the Year 2022</p>
                <p className="text-gray-400 text-xs">ISO/IEC 27001 Lead Auditor | CHFI Certified</p>
              </div>
            </div>
          </div>

          {/* Trust Statement */}
          <div className="text-center bg-cyber-dark/50 border border-cyber-accent/20 rounded-lg p-4">
            <p className="text-gray-300 text-sm">
              <span className="text-cyber-accent font-bold">Enterprise-Grade Training</span> — Essoka Cybersecurity Division is an official EC-Council Accredited Training Center delivering world-class CEH Elite V13 certification, penetration testing training, and offensive security mentorship for business leaders and enterprises.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cyber-accent/20 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Essoka Cybersecurity Division. All rights reserved. | BTH Education Group - ICD
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Powered by world-class cybersecurity expertise
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
