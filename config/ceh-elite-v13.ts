/**
 * CEH Elite V13 - Central Configuration
 * 
 * UPDATE THIS FILE ONLY - All components will automatically use these values
 * Replace placeholder URLs with your actual links before launch
 */

export const CEH_ELITE_CONFIG = {
  // ============================================
  // 🔴 REQUIRED: Replace before launch
  // ============================================
  
  /** Main application form URL (custom form modal opens) */
  applicationUrl: "#apply-modal",
  
  /** Calendly booking link for discovery calls */
  bookingUrl: "https://calendly.com/bthedugrp/30min",
  
  
  // ============================================
  // 📅 Cohort Dates & Deadlines
  // ============================================
  
  /** When the cohort starts (display format) */
  cohortStartDate: "February 10, 2026",
  
  /** Application deadline (display format) - URGENT: Only 19 days left! */
  applicationDeadline: "January 25, 2026",
  
  /** Countdown timer target (ISO 8601 format for CEHCountdown component) */
  countdownTarget: "2026-02-10T00:00:00",
  
  
  // ============================================
  // 💰 Pricing & Program Details
  // ============================================
  
  price: 5000,
  currency: "USD",
  maxSlots: 20,
  duration: "12 weeks",
  format: "Live Online + Labs",
  
  
  // ============================================
  // 👤 Instructor Details
  // ============================================
  
  instructor: {
    name: "Dr. Coach Achu Gustave",
    title: "EC-Council Global Instructor of the Year 2022",
    credentials: "AEC-Sr., CSCU, CEH, CHFI, CEI, ISO 27001 PECB Lead Auditor",
    photo: "/team/dr-achu-gustave.png",
    linkedinUrl: "https://www.linkedin.com/in/drcoachachugustave",
    awardImage: "/Global Instructor award.png",
    awardTitle: "EC-Council Global Instructor of the Year 2022",
    yearsExperience: "15+",
    studentsTrained: "1000+",
    projectsDelivered: "50+",
    specialties: [
      "Mentored and built cybersecurity companies and programs",
      "Trained government agencies globally",
      "EC-Council certified instructor"
    ],
  },
  
  
  // ============================================
  // 📞 Contact Information
  // ============================================
  
  contact: {
    email: "info@essokacybersecuritydiv.com",
    phone: "+237677604100",
    supportEmail: "support@essokacybersecuritydiv.com",
  },
  
  
  // ============================================
  // 🎥 Media Assets
  // ============================================
  
  media: {
    /** Video embed URL (YouTube, Vimeo, etc.) - leave empty to show placeholder */
    heroVideoUrl: "/ceh-elite-hero-video.mp4",
    
    /** Open Graph image for social sharing */
    ogImage: "/og-ceh-elite.jpg",
  },
  
  
  // ============================================
  // 💬 Social Proof & Testimonials
  // ============================================
  
  testimonials: [
    {
      name: "John Smith",
      role: "Senior Security Engineer at Fortune 500",
      company: "Tech Corp",
      quote: "This program transformed my career. Within 3 months of completing, I moved from SOC Analyst to Penetration Testing Lead with a 40% salary increase.",
      image: "/testimonials/placeholder-1.jpg",
    },
    {
      name: "Sarah Johnson", 
      role: "Cybersecurity Consultant",
      company: "SecureIT Solutions",
      quote: "The practical labs and real-world scenarios prepared me for actual client engagements. Best investment I've made in my professional development.",
      image: "/testimonials/placeholder-2.jpg",
    },
    {
      name: "Michael Chen",
      role: "IT Security Manager",
      company: "Financial Services Inc",
      quote: "Not just exam prep - this is elite-level training. The red team scenarios and 1-on-1 mentorship made all the difference in my certification success.",
      image: "/testimonials/placeholder-3.jpg",
    },
  ],
  
  
  // ============================================
  // 📊 Trust Signals & Stats
  // ============================================
  
  stats: {
    studentsTrained: "500+",
    passRate: "95%",
    careerAdvancement: "85%",
    yearsExperience: "15+",
  },
  
  
  // ============================================
  // 🎓 Program Package Inclusions
  // ============================================
  
  packageInclusions: [
    {
      name: "Official CEH eCourseware",
      duration: "2-year access",
      description: "Complete official EC-Council study materials",
    },
    {
      name: "CEH Knowledge Exam Voucher",
      duration: "1-year validity",
      description: "Official certification exam voucher",
    },
    {
      name: "CEH Practical Exam Voucher",
      duration: "1-year validity",
      description: "Hands-on practical certification exam",
    },
    {
      name: "Exam Retakes",
      duration: "1-year coverage",
      description: "One free retake for each exam",
    },
    {
      name: "iLabs Access",
      duration: "6 months",
      description: "Unlimited access to virtual labs",
    },
    {
      name: "Engage & Challenge Platform",
      duration: "1-year access",
      description: "Practice scenarios and CTF challenges",
    },
    {
      name: "Video Library",
      duration: "1-year access",
      description: "On-demand lecture recordings",
    },
  ],
}

/**
 * Quick Launch Checklist:
 * 
 * 1. ✅ Update applicationUrl with your Google Form / Typeform / custom form link
 * 2. ✅ Update bookingUrl with your Calendly link
 * 3. ✅ Set correct cohortStartDate and applicationDeadline
 * 4. ✅ Update countdownTarget to match cohort start
 * 5. ✅ Add instructor.photo path (upload photo to /public/team/)
 * 6. ✅ Update contact.phone with real number
 * 7. ✅ Replace testimonials with real client feedback (or keep placeholders)
 * 8. ✅ Add heroVideoUrl if you have a video (optional)
 * 9. Run: npm run build
 * 10. Commit & push to deploy
 */
