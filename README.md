# ECSD Masterclass Subdomain

![ECSD Masterclass](https://img.shields.io/badge/ECSD-Masterclass-00f0ff?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-14.0-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=for-the-badge&logo=tailwind-css)

> World-class cybersecurity masterclass platform for **Essoka Cybersecurity Division** (masterclass.essokacybersecuritydiv.com)

## 🎯 Overview

A premium Next.js 14 application designed to promote and manage elite cybersecurity training programs including:

- **CEH Elite v13** - Enterprise Security Masterclass
- **VAPT & Penetration Testing** Programs
- **Cyber Forensics** Training
- **Software Security** Courses
- **Network Defense & Operations**
- **Governance & Compliance** Training

## ✨ Features

### 🚀 Core Features
- **Responsive Design** - Mobile-first, works on all devices
- **Countdown Timers** - Create urgency for program launches
- **Registration Forms** - Capture leads with React Hook Form
- **Program Categories** - Multiple masterclass domains
- **Animated UI** - Framer Motion animations throughout
- **SEO Optimized** - Next.js metadata for search engines

### 🎨 Design Features
- **Cyber-themed** - Dark mode with neon accents
- **Custom Animations** - Floating elements, glows, pulses
- **Gradient Typography** - Eye-catching text effects
- **Icon Integration** - React Icons for visual appeal
- **Grid Backgrounds** - Subtle cyber grid patterns

### 📱 Pages
- **Homepage** - Hero, featured programs, categories
- **CEH Elite v13** - Dedicated landing page with countdown
- **Registration** - Multi-step form with validation

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| **Next.js 14** | React framework with App Router |
| **TypeScript** | Type-safe development |
| **Tailwind CSS** | Utility-first styling |
| **Framer Motion** | Smooth animations |
| **React Hook Form** | Form validation |
| **React Icons** | Icon library |

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Steps

1. **Install dependencies**
```bash
cd masterclass-subdomain
npm install
```

2. **Configure environment** (optional for email integration)
```bash
cp .env.example .env.local
# Edit .env.local with your credentials
```

3. **Run development server**
```bash
npm run dev
```

4. **Open in browser**
```
http://localhost:3000
```

## 🚀 Deployment

### Vercel (Recommended)

1. **Push to GitHub**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin your-repo-url
git push -u origin main
```

2. **Deploy to Vercel**
   - Import your repository on [Vercel](https://vercel.com)
   - Configure domain: `masterclass.essokacybersecuritydiv.com`
   - Set environment variables
   - Deploy!

### Alternative: cPanel or VPS

1. **Build production**
```bash
npm run build
```

2. **Start production server**
```bash
npm start
```

3. **Configure subdomain**
   - Point `masterclass.essokacybersecuritydiv.com` to your server
   - Set up reverse proxy (nginx/Apache)
   - Configure SSL certificate

## 📁 Project Structure

```
masterclass-subdomain/
├── app/
│   ├── layout.tsx              # Root layout with fonts
│   ├── page.tsx                # Homepage
│   ├── globals.css             # Global styles
│   └── masterclass/
│       └── ceh-elite-v13/
│           └── page.tsx        # CEH program page
├── components/
│   ├── Navbar.tsx              # Navigation bar
│   ├── Footer.tsx              # Footer section
│   ├── Hero.tsx                # Homepage hero
│   ├── FeaturedProgram.tsx     # CEH showcase
│   ├── MasterclassCategories.tsx
│   ├── WhyChooseUs.tsx
│   ├── CTASection.tsx
│   ├── RegistrationForm.tsx    # Lead capture form
│   └── ceh/
│       ├── CEHHero.tsx
│       ├── CEHTarget.tsx
│       ├── CEHPackage.tsx
│       └── CEHCountdown.tsx
├── public/                     # Static assets
├── tailwind.config.ts          # Tailwind configuration
├── tsconfig.json               # TypeScript config
├── next.config.js              # Next.js config
└── package.json                # Dependencies
```

## 🎨 Customization

### Colors

Edit [tailwind.config.ts](tailwind.config.ts):

```typescript
colors: {
  cyber: {
    dark: '#0a0e27',
    darker: '#050714',
    accent: '#00f0ff',  // Cyan accent
    gold: '#ffd700',    // Gold highlights
    red: '#ff0040',     // Red accents
  }
}
```

### Countdown Date

Edit [/app/masterclass/ceh-elite-v13/page.tsx](app/masterclass/ceh-elite-v13/page.tsx):

```tsx
<CEHCountdown targetDate="2026-02-15T00:00:00" />
```

### Contact Information

Update in:
- [components/Footer.tsx](components/Footer.tsx)
- [components/CTASection.tsx](components/CTASection.tsx)
- [components/ceh/CEHPackage.tsx](components/ceh/CEHPackage.tsx)

## 📧 Email Integration (Optional)

To enable form submissions via email:

1. **Install nodemailer** (already included)

2. **Create API route** at `app/api/register/route.ts`:

```typescript
import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  const data = await request.json()
  
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  await transporter.sendMail({
    from: process.env.SMTP_USER,
    to: 'dr.coachachu@essokacybersecuritydiv.com',
    subject: `New Masterclass Registration: ${data.program}`,
    html: `
      <h2>New Registration</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>
      <p><strong>Company:</strong> ${data.company}</p>
      <p><strong>Role:</strong> ${data.role}</p>
      <p><strong>Team Size:</strong> ${data.teamSize}</p>
      <p><strong>Message:</strong> ${data.message}</p>
    `,
  })

  return NextResponse.json({ success: true })
}
```

3. **Update RegistrationForm.tsx** to call the API

## 🔒 Security

- HTTPS required for production
- Input validation on all forms
- Environment variables for sensitive data
- Rate limiting recommended for API routes

## 📱 SEO & Marketing

### Metadata Optimization
- Descriptive titles and descriptions
- Keywords for cybersecurity training
- Open Graph tags for social sharing

### Marketing Integrations
- Google Analytics (add to layout.tsx)
- Facebook Pixel (optional)
- LinkedIn Insight Tag (B2B focus)
- WhatsApp Business API for instant inquiries

## 🎓 Program Information

### CEH Elite v13 - $5,000 Package Includes:

✅ **Official eCourseware** - 2 Years Access  
✅ **Knowledge Exam Voucher** - 1 Year Validity  
✅ **Practical Exam Voucher** - 1 Year Validity  
✅ **Exam Retakes Insurance** - 1 Year Coverage  
✅ **EC-Council iLabs** - 6 Months Access  
✅ **C|EH Engage & Challenge** - 1 Year Access  
✅ **Ethical Hacking Videos** - 1 Year Access  

**Target Audience:**
- Cybersecurity Leaders & CISOs
- Corporate IT & Blue Teams
- Consulting Firms

## 📞 Contact & Support

**Email:** dr.coachachu@essokacybersecuritydiv.com  
**Phone:** +237 677 60 41 00 (Cameroon)  
**Website:** essokacybersecuritydiv.com

## 📝 License

© 2026 Essoka Cybersecurity Division | BTH Education Group  
All rights reserved.

## 🚦 Development Roadmap

- [ ] Add more masterclass programs (VAPT, Forensics, etc.)
- [ ] Implement payment gateway integration
- [ ] Add student dashboard/portal
- [ ] Build CMS for content management
- [ ] Integrate CRM (HubSpot/Salesforce)
- [ ] Add live chat support
- [ ] Multi-language support
- [ ] Blog/Resources section

## 💡 Tips

1. **Test responsiveness** on mobile devices
2. **Update countdown dates** before launches
3. **Monitor form submissions** regularly
4. **A/B test** different CTAs
5. **Track conversions** with analytics

---

**Built with 💙 for Essoka Cybersecurity Division**

For questions or support, contact the development team.
