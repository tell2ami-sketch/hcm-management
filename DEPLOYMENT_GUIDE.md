# 🚀 HR Management System - Cloud Deployment Guide

## Overview

This guide will help you deploy your HR Management System to the cloud so it runs independently of your local machine. We'll cover multiple deployment options with step-by-step instructions.

---

## 📋 Prerequisites

Before deploying, ensure you have:

- ✅ Git installed and GitHub account
- ✅ All code committed to a Git repository
- ✅ Node.js 18+ installed locally (for initial setup)
- ✅ PostgreSQL database (we'll set this up in the cloud)

---

## 🎯 Recommended Deployment Stack

### **Option 1: Vercel + Neon (Easiest & Free Tier Available)**

**Best for:** Quick deployment, automatic scaling, zero configuration
**Cost:** Free tier available, then pay-as-you-go

#### Components:
- **Frontend/Backend:** Vercel (Next.js hosting)
- **Database:** Neon (Serverless PostgreSQL)
- **File Storage:** Vercel Blob Storage (optional)

---

## 🚀 Step-by-Step Deployment (Vercel + Neon)

### Step 1: Prepare Your Code

1. **Push code to GitHub:**
```bash
cd hr-management-system
git init
git add .
git commit -m "Initial commit - HR Management System"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/hr-management-system.git
git push -u origin main
```

2. **Create `.gitignore` if not exists:**
```
node_modules/
.next/
.env
.env.local
.vercel
*.log
.DS_Store
```

3. **Update `package.json` with build scripts:**
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "prisma generate && next build",
    "start": "next start",
    "lint": "next lint",
    "postinstall": "prisma generate"
  }
}
```

---

### Step 2: Set Up Database (Neon)

1. **Go to [Neon.tech](https://neon.tech)**
   - Sign up for free account
   - Click "Create Project"
   - Choose region closest to your users
   - Note down the connection string

2. **Your connection string will look like:**
```
postgresql://username:password@ep-xxx.region.aws.neon.tech/dbname?sslmode=require
```

3. **Update your `schema.prisma`:**
```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
  directUrl = env("DIRECT_URL") // For migrations
}
```

---

### Step 3: Deploy to Vercel

1. **Go to [Vercel.com](https://vercel.com)**
   - Sign up with GitHub
   - Click "Add New Project"
   - Import your GitHub repository

2. **Configure Build Settings:**
   - Framework Preset: **Next.js**
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

3. **Add Environment Variables:**

Click "Environment Variables" and add:

```env
# Database
DATABASE_URL=postgresql://username:password@ep-xxx.region.aws.neon.tech/dbname?sslmode=require
DIRECT_URL=postgresql://username:password@ep-xxx.region.aws.neon.tech/dbname?sslmode=require

# NextAuth (for authentication)
NEXTAUTH_URL=https://your-app-name.vercel.app
NEXTAUTH_SECRET=generate-a-random-secret-here

# Node Environment
NODE_ENV=production
```

**Generate NEXTAUTH_SECRET:**
```bash
openssl rand -base64 32
```

4. **Click "Deploy"**
   - Vercel will build and deploy your app
   - You'll get a URL like: `https://your-app-name.vercel.app`

---

### Step 4: Run Database Migrations

After deployment, you need to set up your database:

1. **Install Vercel CLI locally:**
```bash
npm install -g vercel
```

2. **Login to Vercel:**
```bash
vercel login
```

3. **Link your project:**
```bash
cd hr-management-system
vercel link
```

4. **Run migrations:**
```bash
vercel env pull .env.local
npx prisma migrate deploy
npx prisma db seed
```

Or use Neon's SQL Editor to run migrations directly.

---

## 🔄 Alternative Deployment Options

### **Option 2: Railway (All-in-One Platform)**

**Best for:** Simple setup, includes database
**Cost:** $5/month minimum

#### Steps:

1. **Go to [Railway.app](https://railway.app)**
2. **Create New Project → Deploy from GitHub**
3. **Add PostgreSQL database** (Railway provides this)
4. **Set environment variables** (Railway auto-configures DATABASE_URL)
5. **Deploy** - Railway handles everything automatically

**Advantages:**
- Database included
- Automatic SSL
- Simple pricing
- Great for small teams

---

### **Option 3: AWS (Enterprise-Grade)**

**Best for:** Large organizations, custom requirements
**Cost:** Variable, typically $50-200/month

#### Components:
- **Frontend/Backend:** AWS Amplify or EC2
- **Database:** AWS RDS (PostgreSQL)
- **Storage:** S3
- **CDN:** CloudFront

#### High-Level Steps:

1. **Set up RDS PostgreSQL:**
   - Go to AWS RDS Console
   - Create PostgreSQL database
   - Note connection string

2. **Deploy with AWS Amplify:**
   - Connect GitHub repository
   - Configure build settings
   - Add environment variables
   - Deploy

3. **Or use EC2:**
   - Launch Ubuntu instance
   - Install Node.js, PostgreSQL
   - Clone repository
   - Run with PM2 for process management

---

### **Option 4: DigitalOcean App Platform**

**Best for:** Balance of simplicity and control
**Cost:** $12/month minimum

#### Steps:

1. **Go to [DigitalOcean.com](https://digitalocean.com)**
2. **Create App → GitHub**
3. **Add Managed PostgreSQL Database** ($15/month)
4. **Configure environment variables**
5. **Deploy**

---

## 🔐 Security Checklist

Before going live, ensure:

- [ ] All environment variables are set correctly
- [ ] Database has strong password
- [ ] NEXTAUTH_SECRET is random and secure
- [ ] SSL/HTTPS is enabled (automatic on Vercel)
- [ ] Database backups are configured
- [ ] Rate limiting is enabled (optional)
- [ ] CORS is properly configured
- [ ] No sensitive data in Git repository

---

## 📊 Post-Deployment Setup

### 1. **Database Seeding**

After first deployment, seed your database:

```bash
# Using Vercel CLI
vercel env pull .env.local
npx prisma db seed
```

Or create an admin user manually through Neon SQL Editor.

### 2. **Custom Domain (Optional)**

**On Vercel:**
1. Go to Project Settings → Domains
2. Add your custom domain (e.g., `hr.yourcompany.com`)
3. Update DNS records as instructed
4. SSL certificate is automatic

### 3. **Monitoring**

**Vercel provides:**
- Analytics dashboard
- Error tracking
- Performance metrics
- Deployment logs

**Additional tools:**
- [Sentry](https://sentry.io) - Error tracking
- [LogRocket](https://logrocket.com) - Session replay
- [Uptime Robot](https://uptimerobot.com) - Uptime monitoring

---

## 💰 Cost Breakdown

### **Recommended Setup (Vercel + Neon):**

| Service | Free Tier | Paid Tier |
|---------|-----------|-----------|
| Vercel | ✅ Unlimited (hobby) | $20/month (Pro) |
| Neon Database | ✅ 0.5GB storage | $19/month (1GB) |
| **Total** | **$0/month** | **$39/month** |

**Free tier is perfect for:**
- Development
- Small teams (< 10 users)
- Testing/staging environments

**Paid tier recommended for:**
- Production use
- 10+ concurrent users
- Custom domains
- Priority support

---

## 🔄 Continuous Deployment

Once set up, deployments are automatic:

1. **Push code to GitHub:**
```bash
git add .
git commit -m "Add new feature"
git push origin main
```

2. **Vercel automatically:**
   - Detects the push
   - Runs build
   - Deploys to production
   - Updates your live site

3. **Preview deployments:**
   - Every pull request gets a preview URL
   - Test before merging to main

---

## 🛠️ Maintenance

### **Database Backups**

**Neon:**
- Automatic daily backups (retained 7 days)
- Point-in-time recovery available

**Manual backup:**
```bash
pg_dump $DATABASE_URL > backup.sql
```

### **Updates**

```bash
# Update dependencies
npm update

# Update Prisma
npm install @prisma/client@latest prisma@latest

# Push changes
git add .
git commit -m "Update dependencies"
git push
```

---

## 🚨 Troubleshooting

### **Build Fails**

1. Check Vercel build logs
2. Ensure all dependencies are in `package.json`
3. Verify environment variables are set
4. Test build locally: `npm run build`

### **Database Connection Issues**

1. Verify DATABASE_URL is correct
2. Check Neon database is active
3. Ensure SSL mode is enabled
4. Test connection locally first

### **Application Errors**

1. Check Vercel Function Logs
2. Enable error tracking (Sentry)
3. Check browser console for client errors
4. Verify API routes are working

---

## 📞 Support Resources

- **Vercel Docs:** https://vercel.com/docs
- **Neon Docs:** https://neon.tech/docs
- **Next.js Docs:** https://nextjs.org/docs
- **Prisma Docs:** https://www.prisma.io/docs

---

## 🎯 Quick Start Commands

```bash
# 1. Prepare for deployment
git init
git add .
git commit -m "Initial commit"
git push origin main

# 2. Install Vercel CLI
npm install -g vercel

# 3. Deploy
vercel

# 4. Run migrations
vercel env pull .env.local
npx prisma migrate deploy
npx prisma db seed

# 5. Open your live app
vercel open
```

---

## ✅ Deployment Checklist

- [ ] Code pushed to GitHub
- [ ] Neon database created
- [ ] Vercel project created
- [ ] Environment variables configured
- [ ] Database migrations run
- [ ] Database seeded with initial data
- [ ] Application tested on live URL
- [ ] Custom domain configured (optional)
- [ ] Monitoring set up
- [ ] Backups verified
- [ ] Team members invited
- [ ] Documentation updated

---

## 🎉 You're Live!

Once deployed, your HR Management System will be:

✅ **Accessible 24/7** from anywhere in the world
✅ **Automatically scaled** based on traffic
✅ **Backed up daily** with point-in-time recovery
✅ **Secured with SSL** and enterprise-grade security
✅ **Continuously deployed** with every Git push
✅ **Monitored** with real-time analytics

**Your live URL:** `https://your-app-name.vercel.app`

Share this URL with your team and start using your HR system in the cloud! 🚀

---

**Made with Bob** 🤖

*Last Updated: 2026-05-27*