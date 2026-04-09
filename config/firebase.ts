// Firebase configuration and initialization
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

export const FIREBASE_CONFIG = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "AIzaSyCK5gPsyUtpHx8eQddGRUy8NZS26sk8TYc",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "ecsd-masterclass.firebaseapp.com",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "ecsd-masterclass",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "ecsd-masterclass.firebasestorage.app",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "101118091404",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "1:101118091404:web:ed2939954a9fea53989ba9",
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID || "G-QGKBQ9HDT9"
};

// Initialize Firebase
const app = initializeApp(FIREBASE_CONFIG);
export const auth = getAuth(app);
export const db = getFirestore(app);

// Firebase Functions URLs
export const FIREBASE_FUNCTIONS_URL = process.env.NEXT_PUBLIC_FIREBASE_FUNCTIONS_URL || 
  "https://us-central1-ecsd-masterclass.cloudfunctions.net";

export const API_ENDPOINTS = {
  cehApplication: `${FIREBASE_FUNCTIONS_URL}/cehApplication`,
  partnerRegister: `${FIREBASE_FUNCTIONS_URL}/partnerRegister`,
};
