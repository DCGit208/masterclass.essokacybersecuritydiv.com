'use client'

import Link from 'next/link'
import { FaLinkedin, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt, FaShieldAlt } from 'react-icons/fa'

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
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
                className="text-gray-400 hover:text-cyber-accent transition-colors">
                <FaLinkedin className="text-xl" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyber-accent transition-colors">
                <FaTwitter className="text-xl" />
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
              <li><Link href="/#about" className="text-gray-400 hover:text-cyber-accent transition-colors">About Us</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-white font-semibold mb-4 font-rajdhani">Training Areas</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-400">VAPT & Penetration Testing</li>
              <li className="text-gray-400">Cyber Forensics</li>
              <li className="text-gray-400">Software Security</li>
              <li className="text-gray-400">Network Defense</li>
              <li className="text-gray-400">Governance & Compliance</li>
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
                <FaMapMarkerAlt className="text-cyber-accent mt-1 flex-shrink-0" />
                <span>Cameroon</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cyber-accent/20 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Essoka Cybersecurity Division. All rights reserved. | BTH Education Group
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
