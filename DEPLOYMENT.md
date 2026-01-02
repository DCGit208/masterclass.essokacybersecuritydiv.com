# 🚀 DEPLOYMENT GUIDE
## ECSD Masterclass Subdomain Setup

This guide will walk you through deploying your masterclass website to `masterclass.essokacybersecuritydiv.com`

---

## 📋 Pre-Deployment Checklist

- [ ] Domain `essokacybersecuritydiv.com` is registered
- [ ] You have access to DNS settings
- [ ] Node.js 18+ installed on your system
- [ ] Git installed (for version control)
- [ ] SSL certificate ready (Let's Encrypt recommended)

---

## 🎯 Option 1: Vercel Deployment (Recommended - Easiest)

### Why Vercel?
- ✅ Built specifically for Next.js
- ✅ Automatic SSL certificates
- ✅ Global CDN
- ✅ Zero configuration
- ✅ Free tier available
- ✅ Auto-deploys from Git

### Steps:

1. **Create Vercel Account**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub, GitLab, or Bitbucket

2. **Push Code to Git Repository**
   ```bash
   cd masterclass-subdomain
   git init
   git add .
   git commit -m "Initial ECSD Masterclass deployment"
   
   # Create repo on GitHub/GitLab first, then:
   git remote add origin https://github.com/yourusername/ecsd-masterclass.git
   git push -u origin main
   ```

3. **Import to Vercel**
   - Click "Add New Project" on Vercel dashboard
   - Import your Git repository
   - Vercel auto-detects Next.js settings
   - Click "Deploy"

4. **Configure Custom Domain**
   - Go to Project Settings → Domains
   - Add: `masterclass.essokacybersecuritydiv.com`
   - Vercel provides DNS records

5. **Update DNS Records**
   
   Go to your domain registrar (e.g., Namecheap, GoDaddy) and add:
   
   ```
   Type: CNAME
   Host: masterclass
   Value: cname.vercel-dns.com
   TTL: Automatic or 3600
   ```

6. **Wait for DNS Propagation** (5-60 minutes)

7. **SSL Auto-Configuration** (Done automatically by Vercel)

✅ **Done!** Your site is live at `https://masterclass.essokacybersecuritydiv.com`

---

## 🎯 Option 2: cPanel Hosting

### Prerequisites:
- Shared hosting with cPanel
- Node.js support enabled
- SSH access (recommended)

### Steps:

1. **Build the Application Locally**
   ```bash
   cd masterclass-subdomain
   npm install
   npm run build
   ```

2. **Upload Files via FTP/SFTP**
   - Use FileZilla or cPanel File Manager
   - Upload entire `masterclass-subdomain` folder
   - Place in `/home/username/masterclass`

3. **Create Subdomain in cPanel**
   - Login to cPanel
   - Go to "Subdomains"
   - Create subdomain: `masterclass`
   - Document root: `/home/username/masterclass`

4. **Setup Node.js Application**
   - Go to cPanel → "Setup Node.js App"
   - Application root: `/home/username/masterclass`
   - Application URL: `masterclass.essokacybersecuritydiv.com`
   - Application startup file: `server.js`
   - Node.js version: 18.x or higher

5. **Create Custom Server File** (`server.js`)
   ```javascript
   const { createServer } = require('http')
   const { parse } = require('url')
   const next = require('next')

   const dev = process.env.NODE_ENV !== 'production'
   const hostname = 'localhost'
   const port = process.env.PORT || 3000

   const app = next({ dev, hostname, port })
   const handle = app.getRequestHandler()

   app.prepare().then(() => {
     createServer(async (req, res) => {
       try {
         const parsedUrl = parse(req.url, true)
         await handle(req, res, parsedUrl)
       } catch (err) {
         console.error('Error occurred handling', req.url, err)
         res.statusCode = 500
         res.end('internal server error')
       }
     }).listen(port, (err) => {
       if (err) throw err
       console.log(`> Ready on http://${hostname}:${port}`)
     })
   })
   ```

6. **Install Dependencies via SSH**
   ```bash
   ssh username@yourdomain.com
   cd ~/masterclass
   npm install --production
   ```

7. **Start Application** in cPanel Node.js interface

8. **Configure SSL** in cPanel → SSL/TLS

---

## 🎯 Option 3: VPS/Cloud Server (AWS, DigitalOcean, etc.)

### For Ubuntu/Debian Server:

1. **Install Node.js**
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```

2. **Install PM2 (Process Manager)**
   ```bash
   sudo npm install -g pm2
   ```

3. **Clone/Upload Your Code**
   ```bash
   cd /var/www
   git clone your-repo-url masterclass
   cd masterclass
   npm install
   npm run build
   ```

4. **Start Application with PM2**
   ```bash
   pm2 start npm --name "ecsd-masterclass" -- start
   pm2 save
   pm2 startup
   ```

5. **Install and Configure Nginx**
   ```bash
   sudo apt install nginx
   sudo nano /etc/nginx/sites-available/masterclass.essokacybersecuritydiv.com
   ```

6. **Nginx Configuration**
   ```nginx
   server {
       listen 80;
       server_name masterclass.essokacybersecuritydiv.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

7. **Enable Site**
   ```bash
   sudo ln -s /etc/nginx/sites-available/masterclass.essokacybersecuritydiv.com /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl restart nginx
   ```

8. **Install SSL with Let's Encrypt**
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d masterclass.essokacybersecuritydiv.com
   ```

9. **Configure Firewall**
   ```bash
   sudo ufw allow 'Nginx Full'
   sudo ufw enable
   ```

---

## 🔧 Post-Deployment Configuration

### 1. Update Environment Variables

Create `.env.local` on server:
```bash
NEXT_PUBLIC_SITE_URL=https://masterclass.essokacybersecuritydiv.com
CONTACT_EMAIL=dr.coachachu@essokacybersecuritydiv.com
```

### 2. Test Website Functionality

- [ ] Homepage loads correctly
- [ ] Navigation works
- [ ] CEH Elite v13 page displays
- [ ] Countdown timer functions
- [ ] Registration form submits
- [ ] Mobile responsiveness
- [ ] SSL certificate valid

### 3. Setup Analytics

Add to `app/layout.tsx` before closing `</head>`:

```tsx
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
  `}
</Script>
```

### 4. Configure Email Notifications

If using SMTP for form submissions:
1. Set up SMTP credentials in environment
2. Create API route (see README)
3. Update RegistrationForm component

---

## 📊 Monitoring & Maintenance

### Vercel (Automatic)
- Visit Vercel dashboard for metrics
- Check deployment logs
- Monitor performance

### Self-Hosted (Manual)
```bash
# Check PM2 status
pm2 status

# View logs
pm2 logs ecsd-masterclass

# Restart application
pm2 restart ecsd-masterclass

# Monitor server resources
htop
```

---

## 🔄 Update/Redeploy Process

### Vercel
```bash
git add .
git commit -m "Update masterclass content"
git push
# Auto-deploys to production
```

### Self-Hosted
```bash
cd /var/www/masterclass
git pull
npm install
npm run build
pm2 restart ecsd-masterclass
```

---

## 🐛 Troubleshooting

### Site Not Loading
1. Check DNS propagation: `nslookup masterclass.essokacybersecuritydiv.com`
2. Verify server is running: `pm2 status` or check Vercel dashboard
3. Check SSL certificate: `https://www.ssllabs.com/ssltest/`

### Build Errors
```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

### Port Already in Use
```bash
# Find process on port 3000
lsof -i :3000
# Kill process
kill -9 <PID>
```

---

## 📞 Need Help?

**Technical Support:**
- Email: dr.coachachu@essokacybersecuritydiv.com
- Phone: +237 677 60 41 00

**Hosting Providers:**
- **Vercel:** https://vercel.com/support
- **DigitalOcean:** https://www.digitalocean.com/community
- **AWS:** https://aws.amazon.com/support

---

## ✅ Launch Checklist

Before announcing your masterclass subdomain:

- [ ] Domain is live and accessible
- [ ] SSL certificate installed (HTTPS working)
- [ ] All pages load without errors
- [ ] Forms are functional
- [ ] Contact information is correct
- [ ] Countdown timer set to correct date
- [ ] Mobile responsive design verified
- [ ] Analytics tracking configured
- [ ] Social media sharing tags working
- [ ] Email notifications tested
- [ ] SEO metadata optimized

---

**🎉 Congratulations! Your ECSD Masterclass platform is now live!**

Start promoting your world-class cybersecurity training programs.

---

*Document Version: 1.0*  
*Last Updated: January 2, 2026*
