# 🚀 YOUR DEPLOYMENT SETUP
## ECSD Masterclass - FTP Deployment to essokacorp.com

---

## 📋 YOUR SERVER DETAILS

**FTP Host:** ftp.essokacorp.com  
**Path:** /masterclass  
**Username:** ECSDmasterclass2026  
**Domain:** masterclass.essokacybersecuritydiv.com

---

## 🎯 DEPLOYMENT OPTIONS

You have **2 options** for deployment:

### ✅ Option 1: Vercel Auto-Deploy (RECOMMENDED)
**Pros:**
- ✅ Automatic deployment on every push
- ✅ Free SSL certificate
- ✅ Global CDN (fast worldwide)
- ✅ Zero server configuration
- ✅ Preview deployments

**Setup Time:** 10 minutes

### ✅ Option 2: Manual FTP Upload to Your Server
**Pros:**
- ✅ Use your existing hosting
- ✅ Full control
- ✅ No third-party services

**Setup Time:** 30-60 minutes

---

## 🚀 OPTION 1: VERCEL AUTO-DEPLOY (EASIEST)

### Step 1: Create GitHub Repository

```bash
# Create a new repository on GitHub: masterclass.essokacybersecuritydiv.com
# Then run these commands:

cd "/Users/achugustave/Documents/ESSOKA CORP/ECSD/2026 ECSD Website/masterclass-subdomain"

git remote add origin https://github.com/YOUR_USERNAME/masterclass.essokacybersecuritydiv.com.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and sign up/login
2. Click "Add New Project"
3. Import your GitHub repository
4. Vercel auto-detects Next.js - just click "Deploy"
5. Wait 2-3 minutes for deployment

### Step 3: Add Custom Domain

In Vercel Dashboard:
1. Go to Project Settings → Domains
2. Add: `masterclass.essokacybersecuritydiv.com`
3. Vercel will show DNS records

### Step 4: Update DNS

Point your domain to Vercel:
```
Type: CNAME
Host: masterclass
Value: cname.vercel-dns.com
TTL: 3600
```

**✅ Done! Auto-deploys on every git push.**

---

## 🔧 OPTION 2: FTP UPLOAD TO YOUR SERVER

### Requirements
- Node.js on server OR upload built files
- Web server (Apache/Nginx) configured

### Method A: Upload Built Files (Simple)

#### Step 1: Build Locally
```bash
cd "/Users/achugustave/Documents/ESSOKA CORP/ECSD/2026 ECSD Website/masterclass-subdomain"
npm run build
```

#### Step 2: Upload via FTP

**Upload these folders/files:**
```
.next/          (build output)
public/         (static files)
node_modules/   (dependencies - large!)
package.json
next.config.js
```

**FTP Connection:**
- Host: ftp.essokacorp.com
- Username: ECSDmasterclass2026
- Password: masterclass%26%escd
- Path: /masterclass

#### Step 3: Install Dependencies on Server (SSH)
```bash
ssh ECSDmasterclass2026@essokacorp.com
cd /masterclass
npm install --production
```

#### Step 4: Start Application
```bash
npm start
# Or use PM2:
pm2 start npm --name "ecsd-masterclass" -- start
pm2 save
```

#### Step 5: Configure Web Server

**For Apache (.htaccess):**
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteRule ^$ http://127.0.0.1:3000/ [P,L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule ^(.*)$ http://127.0.0.1:3000/$1 [P,L]
</IfModule>
```

**For Nginx:**
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

---

## 🔄 AUTO-DEPLOY WITH FTP (Advanced)

If you want auto-deploy with your FTP server, use GitHub Actions:

### Create `.github/workflows/deploy.yml`

```yaml
name: Deploy to FTP

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Build
      run: npm run build
    
    - name: Deploy to FTP
      uses: SamKirkland/FTP-Deploy-Action@4.3.0
      with:
        server: ftp.essokacorp.com
        username: ECSDmasterclass2026
        password: ${{ secrets.FTP_PASSWORD }}
        server-dir: /masterclass/
```

Then add `FTP_PASSWORD` to GitHub Secrets.

---

## 🎯 MY RECOMMENDATION

**For you, I recommend:**

### Start with Vercel (Option 1)
**Why?**
- ✅ Fastest to deploy (10 minutes)
- ✅ Free SSL, CDN, zero config
- ✅ Auto-deploys on git push
- ✅ Preview URLs for testing
- ✅ Best performance globally

### Use FTP Later (Optional)
If you need specific server features or want to host on your own infrastructure, you can always migrate later.

---

## 🚀 QUICK START (VERCEL)

**Right now, to get live in 10 minutes:**

1. **Create GitHub repository**
   - Go to github.com
   - Create new repo: `masterclass.essokacybersecuritydiv.com`

2. **Push your code**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/masterclass.essokacybersecuritydiv.com.git
   git branch -M main
   git push -u origin main
   ```

3. **Deploy to Vercel**
   - Visit vercel.com
   - Import repository
   - Click Deploy
   - Add custom domain

**✅ Live in 10 minutes!**

---

## 📞 NEED HELP?

- **Vercel Setup:** https://vercel.com/docs
- **FTP Issues:** Contact your hosting provider
- **GitHub:** https://github.com

---

## 🔒 SECURITY NOTE

**Important:** Don't commit FTP credentials to Git!
- Keep passwords in environment variables
- Use GitHub Secrets for CI/CD
- This file is already in `.gitignore`

---

**Ready to deploy? Let me know which option you prefer!**

I recommend: **Vercel for speed, then optionally migrate to FTP later if needed.**
