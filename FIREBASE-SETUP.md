# Firebase Setup Guide for CEH Elite V13 Masterclass

## Overview
This project uses a **hybrid deployment**:
- **Static site** → FTP server (via GitHub Actions)
- **API endpoints** → Firebase Functions

## Prerequisites
- Firebase account (free tier is sufficient)
- Firebase CLI installed: `npm install -g firebase-tools`

## Setup Steps

### 1. Initialize Firebase Project

```bash
# Login to Firebase
firebase login

# Initialize Firebase in this project
cd "/Users/achugustave/Documents/ESSOKA CORP/ECSD/2026 ECSD Website/masterclass-subdomain"
firebase init

# Select:
# - Functions (use existing code in functions/)
# - Firestore (use existing rules in firestore.rules)
# - Use your existing Firebase project or create new one
# - Choose JavaScript
# - Install dependencies: Yes
```

### 2. Deploy Firebase Functions

```bash
cd functions
npm install
cd ..
firebase deploy --only functions
```

After deployment, you'll see URLs like:
```
✔ functions[cehApplication]: https://us-central1-YOUR_PROJECT.cloudfunctions.net/cehApplication
✔ functions[partnerRegister]: https://us-central1-YOUR_PROJECT.cloudfunctions.net/partnerRegister
```

### 3. Update Environment Variables

Create `.env.local` in project root:

```env
# Firebase Config (from Firebase Console > Project Settings)
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

# Firebase Functions URL (from step 2)
NEXT_PUBLIC_FIREBASE_FUNCTIONS_URL=https://us-central1-YOUR_PROJECT.cloudfunctions.net
```

### 4. Update GitHub Secrets

Add to GitHub repository secrets (Settings > Secrets > Actions):
- `FIREBASE_API_KEY`
- `FIREBASE_PROJECT_ID`
- `FIREBASE_FUNCTIONS_URL`

### 5. Deploy Static Site

```bash
# Build and deploy
git add .
git commit -m "Add Firebase Functions integration"
git push origin main
```

GitHub Actions will:
1. Build static site
2. Deploy to FTP server
3. Forms will submit to Firebase Functions

## Testing

After deployment, test:

1. **Partner Registration**: https://masterclass.essokacybersecuritydiv.com/partners/register
   - Submit form
   - Check Firebase Console > Firestore > `partners` collection

2. **Application Form**: https://masterclass.essokacybersecuritydiv.com/masterclass/ceh-elite-v13
   - Click "Apply" button
   - Submit application
   - Check Firebase Console > Firestore > `applications` collection

3. **Referral Tracking**:
   - Visit: `https://masterclass.essokacybersecuritydiv.com/masterclass/ceh-elite-v13?ref=TEST`
   - Apply → Check if `referralCode: "TEST"` appears in Firestore

## Firestore Data Structure

### Applications Collection
```javascript
{
  fullName: "John Doe",
  email: "john@example.com",
  phone: "+1234567890",
  referralCode: "CABREL",
  timestamp: Timestamp,
  status: "pending"
}
```

### Partners Collection
```javascript
{
  fullName: "Partner Name",
  email: "partner@example.com",
  referralCode: "CABREL",
  totalReferrals: 0,
  totalEarnings: 0,
  timestamp: Timestamp,
  status: "pending_approval"
}
```

## Cost Estimate
Firebase free tier includes:
- **Functions**: 2M invocations/month
- **Firestore**: 50K reads, 20K writes/day
- **Hosting**: 10 GB/month

**Expected usage for 100 applications/month**: $0 (well within free tier)

## Troubleshooting

**Functions not deploying?**
```bash
firebase deploy --only functions --debug
```

**CORS errors?**
- Functions already include CORS headers
- If issues persist, check Firebase Console > Functions > Logs

**Form submissions failing?**
- Check browser console for errors
- Verify `NEXT_PUBLIC_FIREBASE_FUNCTIONS_URL` in `.env.local`
- Check Firebase Console > Functions > Logs

## Next Steps (Optional)

1. **Email Notifications**: Add SendGrid/Mailgun to Firebase Functions
2. **Partner Dashboard**: Build admin panel to approve partners
3. **Analytics**: Add Firebase Analytics for tracking
4. **Referral Tracking**: Build dashboard showing partner stats

## Support
Questions? Email: dr.coachachu@essokacybersecuritydiv.com
