import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    
    // Log the application (in production, save to database)
    console.log("New CEH Application:", {
      timestamp: new Date().toISOString(),
      applicant: data.fullName,
      email: data.email,
    })
    
    // Format email content
    const emailContent = `
New CEH Elite V13 Application Received
========================================

PERSONAL INFORMATION:
- Full Name: ${data.fullName}
- Email: ${data.email}
- Phone: ${data.phone}
- LinkedIn: ${data.linkedinUrl || "Not provided"}

PROFESSIONAL BACKGROUND:
- Current Role: ${data.currentRole}
- Company: ${data.company || "Not provided"}
- Years of Experience: ${data.yearsExperience}
- Current Salary: ${data.currentSalary}

TECHNICAL QUALIFICATION:
- Technical Background: ${data.technicalBackground}
- Current Certifications: ${data.certifications || "None"}
- Cybersecurity Experience: ${data.cyberExperience}

MOTIVATION & COMMITMENT:
- Why CEH Elite: ${data.whyCEH}
- Career Goals: ${data.careerGoals}
- Availability: ${data.availability}
- Investment Readiness: ${data.investmentReady}

NEXT STEPS:
1. Review application within 24-48 hours
2. Send acceptance/rejection email
3. If accepted, send Calendly link for interview
4. Follow up if no response in 3 days

Submitted: ${new Date().toLocaleString()}
    `
    
    // In production, send actual email here using a service like:
    // - SendGrid
    // - AWS SES
    // - Resend
    // - Nodemailer with SMTP
    
    // For now, we'll just log it (you can set up email service later)
    console.log("Email to be sent:", emailContent)
    
    // Send confirmation email to applicant
    const applicantEmailContent = `
Dear ${data.fullName},

Thank you for your interest in CEH Elite V13!

We've received your application and our team will review it within 24-48 hours. 

What happens next:
1. ✅ Application review (24-48 hours)
2. 📧 We'll email you our decision
3. 📞 If accepted, you'll schedule a discovery call
4. 🎯 We'll discuss your goals and program details

In the meantime, feel free to:
- Book a discovery call: https://calendly.com/bthedugrp/30min
- Email us: info@essokacybersecuritydiv.com
- Call/WhatsApp: +237677604100

Best regards,
Dr. Coach Achu Gustave
Founder & Lead Instructor
ESSOKA Cybersecurity Division

---
Application received: ${new Date().toLocaleString()}
    `
    
    console.log("Applicant confirmation:", applicantEmailContent)
    
    // Return success response
    return NextResponse.json({ 
      success: true,
      message: "Application submitted successfully",
      nextStep: "Schedule interview at https://calendly.com/bthedugrp/30min"
    })
    
  } catch (error) {
    console.error("Error processing application:", error)
    return NextResponse.json(
      { success: false, error: "Failed to process application" },
      { status: 500 }
    )
  }
}
