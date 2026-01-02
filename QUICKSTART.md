# ⚡ QUICK START GUIDE
## Get Your Masterclass Site Running in 5 Minutes

---

## 🚀 Fast Track Setup

### Step 1: Install Dependencies (2 min)

Open terminal in the `masterclass-subdomain` folder:

```bash
# Automated setup (recommended)
./setup.sh

# OR manual setup
npm install
```

### Step 2: Start Development Server (1 min)

```bash
npm run dev
```

### Step 3: Open in Browser (30 sec)

Visit: **http://localhost:3000**

✅ **Done! Your masterclass site is running locally.**

---

## 🎨 Quick Customizations

### Change Countdown Date

Edit: `app/masterclass/ceh-elite-v13/page.tsx`

```tsx
<CEHCountdown targetDate="2026-02-15T00:00:00" />
                          ↑↑↑↑↑↑↑↑↑↑
                    Change this date
```

### Update Contact Info

Edit these files:
- `components/Footer.tsx`
- `components/CTASection.tsx`
- `components/ceh/CEHPackage.tsx`

Search for: `dr.coachachu@essokacybersecuritydiv.com` and `+237 677 60 41 00`

### Change Colors

Edit: `tailwind.config.ts`

```typescript
cyber: {
  dark: '#0a0e27',      // Dark background
  darker: '#050714',    // Darker background
  accent: '#00f0ff',    // ← Change cyan accent
  gold: '#ffd700',      // ← Change gold color
  red: '#ff0040',       // ← Change red accent
}
```

---

## 🚀 Deploy to Production

### Option 1: Vercel (Easiest - 15 min)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repo
   - Click "Deploy"

3. **Add Custom Domain**
   - In Vercel dashboard → Settings → Domains
   - Add: `masterclass.essokacybersecuritydiv.com`
   - Update DNS as instructed

✅ **Live in 15 minutes!**

### Option 2: Manual Build

```bash
# Build for production
npm run build

# Start production server
npm start
```

Then configure your web server (nginx/Apache) to point to this app.

---

## 📁 File Structure

```
masterclass-subdomain/
├── app/
│   ├── page.tsx                    # Homepage
│   └── masterclass/ceh-elite-v13/
│       └── page.tsx                # CEH program page
├── components/
│   ├── Navbar.tsx                  # Navigation
│   ├── Hero.tsx                    # Hero section
│   ├── RegistrationForm.tsx        # Lead capture
│   └── ceh/                        # CEH-specific
├── public/                         # Images, files
├── README.md                       # Full documentation
├── DEPLOYMENT.md                   # Deployment guide
├── STRATEGY.md                     # Marketing strategy
└── PROJECT-SUMMARY.md              # This project summary
```

---

## 🎯 Common Commands

```bash
npm run dev      # Start development (hot reload)
npm run build    # Build for production
npm start        # Run production build
npm run lint     # Check code quality
```

---

## 📖 Need More Help?

- **Technical Setup:** Read [README.md](README.md)
- **Deployment:** Read [DEPLOYMENT.md](DEPLOYMENT.md)
- **Marketing:** Read [STRATEGY.md](STRATEGY.md)
- **Overview:** Read [PROJECT-SUMMARY.md](PROJECT-SUMMARY.md)

---

## ✅ Checklist Before Launch

- [ ] Tested locally (`npm run dev`)
- [ ] Updated countdown date
- [ ] Verified contact information
- [ ] Added real testimonials (if available)
- [ ] Tested on mobile device
- [ ] Forms working correctly
- [ ] SSL certificate installed
- [ ] Google Analytics added
- [ ] Shared with team for review

---

## 🎉 You're Ready!

**Your world-class masterclass platform is ready to launch.**

Start promoting your CEH Elite v13 program and fill those 20 slots!

---

**Questions?** Review the documentation files or reach out for support.

**Let's transform enterprise cybersecurity training! 🚀**
