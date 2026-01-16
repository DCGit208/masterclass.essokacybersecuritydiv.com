// Firebase configuration and initialization
// Replace these values with your Firebase project config after setup

export const FIREBASE_CONFIG = {
  // After you run 'firebase init', copy values from Firebase Console
  // Project Settings > General > Your apps > Firebase SDK snippet
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "YOUR_API_KEY",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "YOUR_PROJECT.firebaseapp.com",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "YOUR_PROJECT_ID",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "YOUR_PROJECT.appspot.com",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "YOUR_SENDER_ID",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "YOUR_APP_ID"
};

// Firebase Functions URLs (will be generated after deployment)
export const FIREBASE_FUNCTIONS_URL = process.env.NEXT_PUBLIC_FIREBASE_FUNCTIONS_URL || 
  "https://YOUR_REGION-YOUR_PROJECT.cloudfunctions.net";

export const API_ENDPOINTS = {
  cehApplication: `${FIREBASE_FUNCTIONS_URL}/cehApplication`,
  partnerRegister: `${FIREBASE_FUNCTIONS_URL}/partnerRegister`,
};
