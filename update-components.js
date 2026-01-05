const fs = require('fs');
const path = require('path');

const updates = {
  'components/ceh/v2/CEHHeroV2.tsx': {
    oldImport: `'use client'

import { motion } from 'framer-motion'
import { FaShieldAlt, FaCheckCircle, FaCalendarAlt, FaUsers } from 'react-icons/fa'
import Link from 'next/link'

const CEHHeroV2 = () => {
  // TODO: Replace with actual application form URL
  const APPLICATION_URL = "https://YOUR_APPLICATION_FORM_LINK"
  // TODO: Replace with actual Calendly booking URL
  const CALENDLY_URL = "https://YOUR_BOOKING_LINK"
  // TODO: Replace with actual application deadline date
  const APPLICATION_DEADLINE = "February 28, 2026"`,
    newImport: `'use client'

import { motion } from 'framer-motion'
import { FaShieldAlt, FaCheckCircle, FaCalendarAlt, FaUsers } from 'react-icons/fa'
import Link from 'next/link'
import { CEH_ELITE_CONFIG } from '@/config/ceh-elite-v13'

const CEHHeroV2 = () => {`,
    replaceRefs: [
      { from: 'APPLICATION_URL', to: 'CEH_ELITE_CONFIG.applicationUrl' },
      { from: 'CALENDLY_URL', to: 'CEH_ELITE_CONFIG.bookingUrl' },
      { from: 'APPLICATION_DEADLINE', to: 'CEH_ELITE_CONFIG.applicationDeadline' },
    ]
  },
  'components/ceh/v2/CEHCohort.tsx': {
    oldImport: `'use client'

import { motion } from 'framer-motion'
import { FaCalendarAlt, FaUsers, FaClipboardCheck, FaClock } from 'react-icons/fa'
import CEHCountdown from '../CEHCountdown'

const CEHCohort = () => {
  // TODO: Update these dates
  const COHORT_START_DATE = "March 15, 2026"
  const APPLICATION_DEADLINE = "February 28, 2026"
  const COUNTDOWN_TARGET = "2026-03-15T00:00:00"`,
    newImport: `'use client'

import { motion } from 'framer-motion'
import { FaCalendarAlt, FaUsers, FaClipboardCheck, FaClock } from 'react-icons/fa'
import CEHCountdown from '../CEHCountdown'
import { CEH_ELITE_CONFIG } from '@/config/ceh-elite-v13'

const CEHCohort = () => {`,
    replaceRefs: [
      { from: 'COHORT_START_DATE', to: 'CEH_ELITE_CONFIG.cohortStartDate' },
      { from: 'APPLICATION_DEADLINE', to: 'CEH_ELITE_CONFIG.applicationDeadline' },
      { from: 'COUNTDOWN_TARGET', to: 'CEH_ELITE_CONFIG.countdownTarget' },
    ]
  },
};

console.log('🔧 Updating component files...\n');

Object.entries(updates).forEach(([file, config]) => {
  try {
    let content = fs.readFileSync(file, 'utf8');
    
    // Replace imports
    content = content.replace(config.oldImport, config.newImport);
    
    // Replace all references
    config.replaceRefs.forEach(({ from, to }) => {
      const regex = new RegExp(`\\b${from}\\b`, 'g');
      content = content.replace(regex, to);
    });
    
    fs.writeFileSync(file, content, 'utf8');
    console.log(`✅ Updated: ${file}`);
  } catch (error) {
    console.error(`❌ Failed to update ${file}:`, error.message);
  }
});

console.log('\n✨ Component updates complete!');
console.log('📝 Run: npm run build');
