# HR Management System - Complete Setup Guide

This guide will walk you through setting up the HR Management System from scratch.

## 📋 Table of Contents

1. [Prerequisites](#prerequisites)
2. [Installation Steps](#installation-steps)
3. [Database Setup](#database-setup)
4. [Configuration](#configuration)
5. [Running the Application](#running-the-application)
6. [Troubleshooting](#troubleshooting)
7. [Production Deployment](#production-deployment)

---

## Prerequisites

### Required Software

1. **Node.js** (v18.0.0 or higher)
   - Download from: https://nodejs.org/
   - Verify installation: `node --version`

2. **npm** (v9.0.0 or higher)
   - Comes with Node.js
   - Verify installation: `npm --version`

3. **PostgreSQL** (v14.0 or higher)
   - Option A: Local installation from https://www.postgresql.org/download/
   - Option B: Use Supabase (recommended for beginners): https://supabase.com/

4. **Git**
   - Download from: https://git-scm.com/
   - Verify installation: `git --version`

### Optional Tools

- **VS Code**: Recommended code editor
- **Postman**: For API testing
- **pgAdmin**: PostgreSQL database management tool

---

## Installation Steps

### Step 1: Clone or Download the Project

```bash
# If using Git
git clone <repository-url>
cd hr-management-system

# Or download and extract the ZIP file
```

### Step 2: Install Dependencies

```bash
npm install
```

This will install all required packages including:
- Next.js 14
- React 18
- Prisma
- NextAuth.js
- Tailwind CSS
- And many more...

**Note**: Installation may take 5-10 minutes depending on your internet speed.

---

## Database Setup

### Option A: Using Supabase (Recommended for Beginners)

1. **Create a Supabase Account**
   - Go to https://supabase.com/
   - Sign up for a free account
   - Create a new project

2. **Get Database Connection String**
   - In your Supabase project dashboard
   - Go to Settings → Database
   - Copy the "Connection string" (URI format)
   - Replace `[YOUR-PASSWORD]` with your database password

3. **Update .env File**
   ```env
   DATABASE_URL="postgresql://postgres:[YOUR-PASSWORD]@db.[PROJECT-REF].supabase.co:5432/postgres"
   ```

### Option B: Using Local PostgreSQL

1. **Install PostgreSQL**
   - Download and install from https://www.postgresql.org/download/
   - Remember the password you set during installation

2. **Create Database**
   ```bash
   # Open PostgreSQL command line (psql)
   psql -U postgres
   
   # Create database
   CREATE DATABASE hr_management;
   
   # Exit
   \q
   ```

3. **Update .env File**
   ```env
   DATABASE_URL="postgresql://postgres:your-password@localhost:5432/hr_management?schema=public"
   ```

---

## Configuration

### Step 1: Create Environment File

```bash
# Copy the example file
cp .env.example .env

# On Windows PowerShell
copy .env.example .env
```

### Step 2: Configure Environment Variables

Open `.env` file and update the following:

```env
# Database (Required)
DATABASE_URL="your-database-connection-string"

# NextAuth (Required)
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="generate-a-random-secret-here"

# Email (Optional - for sending emails)
SENDGRID_API_KEY="your-sendgrid-api-key"
EMAIL_FROM="noreply@yourcompany.com"

# App Configuration
NEXT_PUBLIC_APP_URL="http://localhost:3000"
NEXT_PUBLIC_APP_NAME="HR Management System"
```

### Step 3: Generate NextAuth Secret

```bash
# On Linux/Mac
openssl rand -base64 32

# On Windows (PowerShell)
[Convert]::ToBase64String((1..32 | ForEach-Object { Get-Random -Minimum 0 -Maximum 256 }))

# Or use an online generator
# https://generate-secret.vercel.app/32
```

Copy the generated string and paste it as `NEXTAUTH_SECRET` in your `.env` file.

### Step 4: Initialize Database

```bash
# Generate Prisma Client
npm run db:generate

# Push schema to database
npm run db:push

# Seed database with sample data (optional)
npm run db:seed
```

**Expected Output:**
```
✔ Generated Prisma Client
✔ Database schema pushed successfully
✔ Database seeded with sample data
```

---

## Running the Application

### Development Mode

```bash
npm run dev
```

The application will start on http://localhost:3000

**Default Login Credentials:**
```
Email: admin@company.com
Password: Admin123!
```

**⚠️ Important**: Change the default password immediately!

### Production Build

```bash
# Build the application
npm run build

# Start production server
npm start
```

---

## Troubleshooting

### Common Issues and Solutions

#### 1. "Cannot find module" errors

**Solution:**
```bash
# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall dependencies
npm install
```

#### 2. Database connection errors

**Symptoms:**
- "Can't reach database server"
- "Connection refused"

**Solutions:**
- Verify DATABASE_URL is correct
- Check if PostgreSQL is running
- Ensure database exists
- Check firewall settings

#### 3. Prisma Client errors

**Solution:**
```bash
# Regenerate Prisma Client
npm run db:generate

# If that doesn't work, clear cache
npx prisma generate --force
```

#### 4. Port 3000 already in use

**Solution:**
```bash
# On Linux/Mac
lsof -ti:3000 | xargs kill -9

# On Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Or use a different port
PORT=3001 npm run dev
```

#### 5. TypeScript errors

**Solution:**
```bash
# Run type checking
npm run type-check

# If errors persist, delete .next folder
rm -rf .next
npm run dev
```

#### 6. Tailwind CSS not working

**Solution:**
```bash
# Ensure Tailwind is properly configured
# Delete .next folder
rm -rf .next

# Restart dev server
npm run dev
```

---

## Production Deployment

### Deploying to Vercel (Recommended)

1. **Push Code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to https://vercel.com/
   - Sign in with GitHub
   - Click "New Project"
   - Import your repository
   - Configure environment variables
   - Click "Deploy"

3. **Set Environment Variables in Vercel**
   - Go to Project Settings → Environment Variables
   - Add all variables from your `.env` file
   - Update `NEXTAUTH_URL` to your production URL
   - Generate a new `NEXTAUTH_SECRET` for production

### Deploying to Other Platforms

#### AWS

```bash
# Install AWS Amplify CLI
npm install -g @aws-amplify/cli

# Initialize Amplify
amplify init

# Deploy
amplify publish
```

#### DigitalOcean

```bash
# Build the application
npm run build

# Use PM2 for process management
npm install -g pm2
pm2 start npm --name "hr-system" -- start
```

#### Docker

```bash
# Build Docker image
docker build -t hr-management-system .

# Run container
docker run -p 3000:3000 --env-file .env hr-management-system
```

---

## Database Management

### View Database with Prisma Studio

```bash
npm run db:studio
```

This opens a visual database editor at http://localhost:5555

### Database Migrations

```bash
# Create a migration
npx prisma migrate dev --name your_migration_name

# Apply migrations in production
npx prisma migrate deploy

# Reset database (⚠️ Deletes all data)
npx prisma migrate reset
```

### Backup Database

```bash
# PostgreSQL backup
pg_dump -U postgres hr_management > backup.sql

# Restore from backup
psql -U postgres hr_management < backup.sql
```

---

## Performance Optimization

### 1. Enable Caching

Add Redis for caching (optional):

```bash
npm install redis
```

### 2. Optimize Images

- Use Next.js Image component
- Compress images before upload
- Use WebP format when possible

### 3. Database Optimization

```bash
# Analyze database performance
npx prisma studio

# Add indexes for frequently queried fields
# (Already included in schema.prisma)
```

### 4. Monitor Performance

```bash
# Install Vercel Analytics
npm install @vercel/analytics

# Add to your app
```

---

## Security Checklist

Before going to production:

- [ ] Change all default passwords
- [ ] Generate strong NEXTAUTH_SECRET
- [ ] Enable HTTPS
- [ ] Set up rate limiting
- [ ] Configure CORS properly
- [ ] Enable database backups
- [ ] Set up monitoring and alerts
- [ ] Review and update security headers
- [ ] Enable audit logging
- [ ] Implement 2FA for admin accounts

---

## Getting Help

### Resources

- **Documentation**: See README.md
- **API Reference**: See API_Documentation.md
- **Database Schema**: See Database_ERD.md
- **Planning Docs**: See HR_Management_System_Plan.md

### Support Channels

- **Email**: support@yourcompany.com
- **GitHub Issues**: [Link to issues]
- **Community Forum**: [Link to forum]
- **Stack Overflow**: Tag with `hr-management-system`

---

## Next Steps

After successful setup:

1. **Customize Branding**
   - Update company logo
   - Modify color scheme in `tailwind.config.ts`
   - Update email templates

2. **Configure Email**
   - Set up SendGrid account
   - Configure email templates
   - Test email delivery

3. **Add Users**
   - Create employee accounts
   - Set up departments
   - Configure locations

4. **Import Data**
   - Prepare CSV files
   - Use import tools
   - Verify data integrity

5. **Train Users**
   - Create user guides
   - Conduct training sessions
   - Set up support system

---

## Maintenance

### Regular Tasks

**Daily:**
- Monitor error logs
- Check system performance
- Review security alerts

**Weekly:**
- Database backup
- Update dependencies
- Review user feedback

**Monthly:**
- Security audit
- Performance optimization
- Feature updates

---

## Useful Commands

```bash
# Development
npm run dev              # Start dev server
npm run build           # Build for production
npm run start           # Start production server
npm run lint            # Run ESLint
npm run type-check      # Check TypeScript types
npm run format          # Format code with Prettier

# Database
npm run db:generate     # Generate Prisma Client
npm run db:push         # Push schema to database
npm run db:studio       # Open Prisma Studio
npm run db:seed         # Seed database

# Deployment
vercel                  # Deploy to Vercel
vercel --prod          # Deploy to production
```

---

**Setup Complete! 🎉**

You're now ready to use the HR Management System. If you encounter any issues, refer to the Troubleshooting section or contact support.

*Last Updated: 2026-05-27*