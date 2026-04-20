const functions = require('firebase-functions');
const admin = require('firebase-admin');
const { Resend } = require('resend');

admin.initializeApp();

const FROM = 'dr.coachachu@essokacybersecuritydiv.com';

// Firestore trigger: send emails when a new partner registers
exports.onPartnerCreated = functions.firestore
  .document('partners/{partnerId}')
  .onCreate(async (snap, context) => {
    const data = snap.data();
    const partnerEmail = data.email;
    const partnerName = data.fullName || 'Partner';
    const referralCode = data.referralCode || '(pending)';
    const tempPassword = data.tempPassword || null;
    const dashboardUrl = 'https://masterclass.essokacybersecuritydiv.com/partners/login';

    const resend = new Resend(functions.config().resend.key);

    // Remove tempPassword from Firestore immediately
    if (tempPassword) {
      try {
        await snap.ref.update({ tempPassword: admin.firestore.FieldValue.delete() });
      } catch (err) {
        console.error('Failed to remove tempPassword from Firestore:', err);
      }
    }

    // 1. Confirmation email to the partner
    try {
      await resend.emails.send({
        from: `ECSD Masterclass <${FROM}>`,
        to: partnerEmail,
        subject: 'Your ECSD Partner Account is Ready',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0f1e; color: #ffffff; padding: 32px; border-radius: 12px;">
            <h1 style="color: #00ff88; font-size: 28px; margin-bottom: 8px;">Welcome, ${partnerName}!</h1>
            <p style="color: #cccccc; font-size: 16px; line-height: 1.6;">Your ECSD Referral Partner account has been created. Here are your login credentials:</p>
            <div style="background: #111827; border: 1px solid #00ff8844; border-radius: 8px; padding: 16px; margin: 20px 0;">
              <p style="color: #aaaaaa; margin: 0 0 8px;">Email: <strong style="color: #ffffff;">${partnerEmail}</strong></p>
              ${tempPassword ? `<p style="color: #aaaaaa; margin: 0;">Temporary Password: <strong style="color: #00ff88; font-size: 18px; letter-spacing: 2px;">${tempPassword}</strong></p>` : ''}
            </div>
            <p style="color: #cccccc; font-size: 15px; line-height: 1.6;">
              Your referral code is: <strong style="color: #00ff88; font-size: 18px;">${referralCode}</strong>
            </p>
            <a href="${dashboardUrl}" style="display: inline-block; background: #00ff88; color: #0a0f1e; font-weight: bold; padding: 14px 28px; border-radius: 8px; text-decoration: none; margin: 20px 0; font-size: 16px;">
              Login to Your Dashboard →
            </a>
            <p style="color: #888888; font-size: 13px; margin-top: 8px;">
              We recommend changing your password after first login.<br />
              Each successful enrollment earns you <strong style="color: #00ff88;">$500</strong>.
            </p>
            <hr style="border-color: #1a2a4a; margin: 24px 0;" />
            <p style="color: #888888; font-size: 13px;">Questions? Reply to this email or contact <a href="mailto:${FROM}" style="color:#00ff88;">${FROM}</a></p>
            <p style="color: #666666; font-size: 12px;">Essoka Cybersecurity Division — Elite Cybersecurity Training</p>
          </div>
        `,
      });
      console.log(`Confirmation email sent to ${partnerEmail}`);
    } catch (err) {
      console.error(`Failed to send confirmation to ${partnerEmail}:`, JSON.stringify(err));
    }

    // 2. Admin notification to dr.coachachu
    try {
      await resend.emails.send({
        from: `ECSD Masterclass <${FROM}>`,
        to: FROM,
        subject: `New Partner Registration: ${partnerName}`,
        html: `
          <h2>New Partner Registration</h2>
          <p><strong>Name:</strong> ${partnerName}</p>
          <p><strong>Email:</strong> ${partnerEmail}</p>
          <p><strong>Phone:</strong> ${data.phone || 'N/A'}</p>
          <p><strong>Company:</strong> ${data.company || 'N/A'}</p>
          <p><strong>Referral Code:</strong> ${referralCode}</p>
          <p><strong>Expected Referrals:</strong> ${data.estimatedReferrals || 'N/A'}</p>
          <p><strong>Payout Method:</strong> ${data.payoutMethod || 'N/A'}</p>
          <p><strong>Notes:</strong> ${data.notes || 'N/A'}</p>
          <p><a href="https://console.firebase.google.com/project/ecsd-masterclass/firestore/data/partners">View in Firebase Console</a></p>
        `,
      });
      console.log(`Admin notification sent to ${FROM}`);
    } catch (err) {
      console.error(`Failed to send admin notification:`, JSON.stringify(err));
    }
  });

// CEH Application Submission
exports.cehApplication = functions.https.onRequest(async (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.set('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') { res.status(204).send(''); return; }
  if (req.method !== 'POST') { res.status(405).send('Method Not Allowed'); return; }
  try {
    const data = req.body;
    const docRef = await admin.firestore().collection('applications').add({
      ...data,
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
      status: 'pending'
    });
    res.status(200).json({ success: true, applicationId: docRef.id });
  } catch (error) {
    console.error('Error processing application:', error);
    res.status(500).json({ success: false, error: 'Failed to process application' });
  }
});

// Partner Registration (HTTP fallback)
exports.partnerRegister = functions.https.onRequest(async (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.set('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') { res.status(204).send(''); return; }
  if (req.method !== 'POST') { res.status(405).send('Method Not Allowed'); return; }
  try {
    const data = req.body;
    const docRef = await admin.firestore().collection('partners').add({
      ...data,
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
      status: 'pending_approval',
      totalReferrals: 0,
      totalEarnings: 0
    });
    res.status(200).json({ success: true, partnerId: docRef.id });
  } catch (error) {
    console.error('Partner registration error:', error);
    res.status(500).json({ success: false, error: 'Failed to register' });
  }
});
