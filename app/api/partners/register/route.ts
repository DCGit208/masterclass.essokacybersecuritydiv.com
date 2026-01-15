import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    console.log("New Partner Registration", {
      timestamp: new Date().toISOString(),
      name: data.fullName,
      email: data.email,
      phone: data.phone,
      company: data.company,
      referralCode: data.referralCode,
      payoutMethod: data.payoutMethod,
    })

    // Placeholder: store in DB or send email to ops team
    const adminEmailContent = `
New Referral Partner Registration
================================

Name: ${data.fullName}
Email: ${data.email}
Phone: ${data.phone}
Company: ${data.company || "Not provided"}
Referral Code: ${data.referralCode}
Expected Volume: ${data.estimatedReferrals || "Unknown"}
Payout Method: ${data.payoutMethod || "Not provided"}
Notes: ${data.notes || "None"}
Submitted: ${new Date().toLocaleString()}
    `

    console.log("Admin notification:", adminEmailContent)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Partner registration error:", error)
    return NextResponse.json({ success: false, error: "Failed to register" }, { status: 500 })
  }
}
