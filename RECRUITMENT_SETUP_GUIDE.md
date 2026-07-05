# Recruitment Module - Setup Guide

## 🚀 Quick Start

Follow these steps to set up the recruitment module in your HR Management System.

## Step 1: Run Database Migration

The Prisma schema has been updated with recruitment models. You need to create and apply the migration:

```bash
cd hr-management-system

# Create migration
npx prisma migrate dev --name add_recruitment_module

# Generate Prisma Client
npx prisma generate
```

This will:
- Create database tables for recruitment (JobPosting, Candidate, Application, Interview, Offer, etc.)
- Update the Prisma Client with new models
- Fix TypeScript errors in API routes

## Step 2: Verify Database

Check that the new tables were created:

```bash
npx prisma studio
```

You should see these new tables:
- JobPosting
- Candidate
- Application
- ApplicationStatusHistory
- Interview
- InterviewParticipant
- Offer
- CandidateNote

## Step 3: Seed Sample Data (Optional)

To test the recruitment module with sample data, run:

```bash
npx prisma db seed
```

This will create:
- 5 sample job postings
- 10 sample candidates
- 15 sample applications
- 8 sample interviews
- 3 sample offers

## Step 4: Start Development Server

```bash
npm run dev
```

Visit: `http://localhost:3000/recruitment/jobs`

## 📁 What's Been Created

### Database Schema
- ✅ 8 new models added to `prisma/schema.prisma`
- ✅ 8 new enums for status tracking
- ✅ Relations to existing Employee, Department, Location models

### API Routes
- ✅ `/api/recruitment/jobs` - Job postings CRUD
- ⏳ `/api/recruitment/candidates` - Coming soon
- ⏳ `/api/recruitment/applications` - Coming soon
- ⏳ `/api/recruitment/interviews` - Coming soon
- ⏳ `/api/recruitment/offers` - Coming soon

### UI Pages
- ✅ `/recruitment/jobs` - Job postings list
- ⏳ `/recruitment/jobs/new` - Create job posting
- ⏳ `/recruitment/jobs/[id]` - Job details
- ⏳ `/recruitment/candidates` - Candidates list
- ⏳ `/recruitment/applications` - Applications tracking
- ⏳ `/recruitment/interviews` - Interview scheduling
- ⏳ `/recruitment/offers` - Offer management

### Navigation
- ✅ Recruitment menu added to sidebar
- ✅ Submenu items for Jobs, Candidates, Applications, Interviews, Offers

## 🎯 Features Available

### Phase 1 (Current)
- ✅ Database schema complete
- ✅ Job postings API
- ✅ Job postings list page
- ✅ Navigation menu

### Phase 2 (Next)
- ⏳ Complete all API routes
- ⏳ Build remaining UI pages
- ⏳ Add forms for creating/editing
- ⏳ Implement status workflows

### Phase 3 (Future)
- ⏳ Interview scheduling
- ⏳ Offer management
- ⏳ Analytics dashboard
- ⏳ Email notifications
- ⏳ Document uploads
- ⏳ Resume parsing

## 🔧 Troubleshooting

### TypeScript Errors

If you see errors like "Property 'jobPosting' does not exist":

```bash
npx prisma generate
```

### Migration Fails

If migration fails, check:
1. Database is running
2. DATABASE_URL in `.env` is correct
3. No conflicting table names

Reset database if needed:
```bash
npx prisma migrate reset
```

### Cannot Access Pages

Make sure:
1. Development server is running (`npm run dev`)
2. You're logged in to the system
3. Your user has appropriate permissions

## 📊 Database Schema Overview

### JobPosting
- Job details (title, description, requirements)
- Salary range and benefits
- Department and location
- Hiring manager
- Status tracking (DRAFT, OPEN, CLOSED, FILLED)

### Candidate
- Personal information
- Professional experience
- Resume and documents
- Source tracking
- Tags for categorization

### Application
- Links candidate to job posting
- Status workflow (APPLIED → SCREENING → INTERVIEW → OFFER)
- Screening notes and scores
- Rejection tracking
- Status history audit trail

### Interview
- Interview scheduling
- Multiple rounds support
- Interviewer assignments
- Feedback collection
- Rating system

### Offer
- Compensation details
- Benefits package
- Start date
- Offer status tracking
- Acceptance/rejection

## 🎨 UI Components

### Reusable Components Created
- JobCard - Display job summary
- StatusBadge - Show status with colors
- More components coming in Phase 2

## 📝 Next Steps

1. **Run the migration** (Step 1 above)
2. **Test the job postings page** at `/recruitment/jobs`
3. **Create your first job posting** (UI coming in Phase 2)
4. **Review the implementation status** in `RECRUITMENT_IMPLEMENTATION_STATUS.md`
5. **Check the full plan** in `RECRUITMENT_MODULE_PLAN.md`

## 🆘 Need Help?

- Check `RECRUITMENT_MODULE_PLAN.md` for detailed feature specifications
- Check `RECRUITMENT_IMPLEMENTATION_STATUS.md` for current progress
- Review API routes in `src/app/api/recruitment/`
- Review UI pages in `src/app/recruitment/`

## 📚 Documentation

- **Planning:** `RECRUITMENT_MODULE_PLAN.md`
- **Status:** `RECRUITMENT_IMPLEMENTATION_STATUS.md`
- **Setup:** This file
- **API Docs:** Coming soon

---

**Made with Bob** 🤖
**Last Updated:** 2026-05-27