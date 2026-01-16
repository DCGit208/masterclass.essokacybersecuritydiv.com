const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

// CEH Application Submission
exports.cehApplication = functions.https.onRequest(async (req, res) => {
  // Enable CORS
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.set('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(204).send('');
    return;
  }

  if (req.method !== 'POST') {
    res.status(405).send('Method Not Allowed');
    return;
  }

  try {
    const data = req.body;

    // Log application to Firestore
    const docRef = await admin.firestore().collection('applications').add({
      ...data,
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
      status: 'pending'
    });

    console.log('New CEH Application:', {
      id: docRef.id,
      applicant: data.fullName,
      email: data.email,
      referralCode: data.referralCode || 'None'
    });

    // TODO: Send email notifications (integrate SendGrid/Mailgun later)

    res.status(200).json({
      success: true,
      message: 'Application submitted successfully',
      applicationId: docRef.id,
      nextStep: 'Schedule interview at https://calendly.com/bthedugrp/30min'
    });

  } catch (error) {
    console.error('Error processing application:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to process application'
    });
  }
});

// Partner Registration
exports.partnerRegister = functions.https.onRequest(async (req, res) => {
  // Enable CORS
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.set('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(204).send('');
    return;
  }

  if (req.method !== 'POST') {
    res.status(405).send('Method Not Allowed');
    return;
  }

  try {
    const data = req.body;

    // Save partner registration to Firestore
    const docRef = await admin.firestore().collection('partners').add({
      ...data,
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
      status: 'pending_approval',
      totalReferrals: 0,
      totalEarnings: 0
    });

    console.log('New Partner Registration:', {
      id: docRef.id,
      name: data.fullName,
      email: data.email,
      referralCode: data.referralCode
    });

    // TODO: Send confirmation email

    res.status(200).json({
      success: true,
      message: 'Partner registration received',
      partnerId: docRef.id
    });

  } catch (error) {
    console.error('Partner registration error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to register'
    });
  }
});
