# Recruitment & Applicant Tracking System (ATS) - Implementation Plan

## 🎯 Overview

A comprehensive recruitment module to manage the entire hiring lifecycle from job posting to candidate onboarding. This module will streamline the recruitment process, improve candidate experience, and provide analytics for better hiring decisions.

## 📊 Database Schema Design

### New Enums

```prisma
enum JobStatus {
  DRAFT           // Job posting being created
  OPEN            // Actively accepting applications
  ON_HOLD         // Temporarily paused
  CLOSED          // No longer accepting applications
  FILLED          // Position has been filled
}

enum JobType {
  FULL_TIME
  PART_TIME
  CONTRACT
  INTERNSHIP
  TEMPORARY
}

enum ExperienceLevel {
  ENTRY_LEVEL
  JUNIOR
  MID_LEVEL
  SENIOR
  LEAD
  EXECUTIVE
}

enum ApplicationStatus {
  APPLIED         // Initial application received
  SCREENING       // Resume/profile review
  SHORTLISTED     // Passed initial screening
  INTERVIEW       // In interview process
  ASSESSMENT      // Technical/skill assessment
  OFFER           // Offer extended
  ACCEPTED        // Offer accepted
  REJECTED        // Application rejected
  WITHDRAWN       // Candidate withdrew
}

enum InterviewType {
  PHONE_SCREEN
  VIDEO_CALL
  IN_PERSON
  TECHNICAL
  HR_ROUND
  PANEL
  FINAL
}

enum InterviewStatus {
  SCHEDULED
  COMPLETED
  CANCELLED
  RESCHEDULED
  NO_SHOW
}

enum OfferStatus {
  DRAFT
  SENT
  ACCEPTED
  REJECTED
  NEGOTIATING
  EXPIRED
}

enum CandidateSource {
  CAREER_SITE     // Company website
  JOB_BOARD       // LinkedIn, Indeed, etc.
  REFERRAL        // Employee referral
  RECRUITER       // External recruiter
  SOCIAL_MEDIA    // Social media platforms
  CAMPUS          // Campus recruitment
  WALK_IN         // Walk-in candidate
  OTHER
}
```

### New Models

```prisma
// Job Posting
model JobPosting {
  id                String            @id @default(cuid())
  title             String
  description       String            @db.Text
  requirements      String            @db.Text
  responsibilities  String            @db.Text
  
  // Job Details
  departmentId      String
  department        Department        @relation(fields: [departmentId], references: [id])
  locationId        String?
  location          Location?         @relation(fields: [locationId], references: [id])
  
  jobType           JobType
  experienceLevel   ExperienceLevel
  status            JobStatus         @default(DRAFT)
  
  // Compensation
  salaryMin         Decimal?          @db.Decimal(12, 2)
  salaryMax         Decimal?          @db.Decimal(12, 2)
  currency          String            @default("USD")
  
  // Additional Info
  numberOfPositions Int               @default(1)
  skills            String[]          // Array of required skills
  benefits          String?           @db.Text
  
  // Dates
  postedDate        DateTime?
  closingDate       DateTime?
  createdAt         DateTime          @default(now())
  updatedAt         DateTime          @updatedAt
  
  // Relations
  hiringManagerId   String
  hiringManager     Employee          @relation("HiringManager", fields: [hiringManagerId], references: [id])
  
  applications      Application[]
  interviews        Interview[]
  
  @@index([status, departmentId])
  @@index([postedDate])
}

// Candidate/Applicant
model Candidate {
  id                String            @id @default(cuid())
  
  // Personal Info
  firstName         String
  lastName          String
  email             String            @unique
  phone             String?
  
  // Professional Info
  currentJobTitle   String?
  currentCompany    String?
  totalExperience   Int?              // Years of experience
  expectedSalary    Decimal?          @db.Decimal(12, 2)
  noticePeriod      Int?              // Days
  
  // Documents
  resumeUrl         String?
  coverLetterUrl    String?
  portfolioUrl      String?
  linkedInUrl       String?
  githubUrl         String?
  
  // Location
  city              String?
  state             String?
  country           String?
  
  // Metadata
  source            CandidateSource   @default(CAREER_SITE)
  referredBy        String?           // Employee ID if referred
  tags              String[]          // Skills, keywords
  
  createdAt         DateTime          @default(now())
  updatedAt         DateTime          @updatedAt
  
  // Relations
  applications      Application[]
  interviews        Interview[]
  offers            Offer[]
  notes             CandidateNote[]
  
  @@index([email])
  @@index([source])
}

// Job Application
model Application {
  id                String            @id @default(cuid())
  
  candidateId       String
  candidate         Candidate         @relation(fields: [candidateId], references: [id], onDelete: Cascade)
  
  jobPostingId      String
  jobPosting        JobPosting        @relation(fields: [jobPostingId], references: [id], onDelete: Cascade)
  
  status            ApplicationStatus @default(APPLIED)
  
  // Application Details
  coverLetter       String?           @db.Text
  answers           Json?             // Answers to screening questions
  
  // Screening
  screeningScore    Int?              // 0-100
  screeningNotes    String?           @db.Text
  screenedBy        String?
  screenedAt        DateTime?
  
  // Rejection
  rejectionReason   String?           @db.Text
  rejectedBy        String?
  rejectedAt        DateTime?
  
  appliedAt         DateTime          @default(now())
  updatedAt         DateTime          @updatedAt
  
  // Relations
  interviews        Interview[]
  offers            Offer[]
  statusHistory     ApplicationStatusHistory[]
  
  @@unique([candidateId, jobPostingId])
  @@index([status, jobPostingId])
  @@index([appliedAt])
}

// Application Status History (Audit Trail)
model ApplicationStatusHistory {
  id                String            @id @default(cuid())
  
  applicationId     String
  application       Application       @relation(fields: [applicationId], references: [id], onDelete: Cascade)
  
  fromStatus        ApplicationStatus?
  toStatus          ApplicationStatus
  
  notes             String?           @db.Text
  changedBy         String            // Employee ID
  changedAt         DateTime          @default(now())
  
  @@index([applicationId, changedAt])
}

// Interview Scheduling
model Interview {
  id                String            @id @default(cuid())
  
  applicationId     String
  application       Application       @relation(fields: [applicationId], references: [id], onDelete: Cascade)
  
  candidateId       String
  candidate         Candidate         @relation(fields: [candidateId], references: [id], onDelete: Cascade)
  
  jobPostingId      String
  jobPosting        JobPosting        @relation(fields: [jobPostingId], references: [id])
  
  // Interview Details
  type              InterviewType
  status            InterviewStatus   @default(SCHEDULED)
  round             Int               @default(1)
  
  // Scheduling
  scheduledDate     DateTime
  duration          Int               // Minutes
  location          String?           // Physical location or meeting link
  meetingLink       String?
  
  // Interviewers
  interviewers      InterviewParticipant[]
  
  // Feedback
  overallRating     Int?              // 1-5
  feedback          String?           @db.Text
  recommendation    String?           // STRONG_YES, YES, MAYBE, NO, STRONG_NO
  
  // Notes
  notes             String?           @db.Text
  
  createdAt         DateTime          @default(now())
  updatedAt         DateTime          @updatedAt
  
  @@index([candidateId, scheduledDate])
  @@index([status, scheduledDate])
}

// Interview Participants (Interviewers)
model InterviewParticipant {
  id                String            @id @default(cuid())
  
  interviewId       String
  interview         Interview         @relation(fields: [interviewId], references: [id], onDelete: Cascade)
  
  employeeId        String
  employee          Employee          @relation(fields: [employeeId], references: [id])
  
  // Individual Feedback
  rating            Int?              // 1-5
  feedback          String?           @db.Text
  recommendation    String?
  submittedAt       DateTime?
  
  createdAt         DateTime          @default(now())
  
  @@unique([interviewId, employeeId])
}

// Job Offer
model Offer {
  id                String            @id @default(cuid())
  
  applicationId     String
  application       Application       @relation(fields: [applicationId], references: [id], onDelete: Cascade)
  
  candidateId       String
  candidate         Candidate         @relation(fields: [candidateId], references: [id], onDelete: Cascade)
  
  status            OfferStatus       @default(DRAFT)
  
  // Offer Details
  jobTitle          String
  departmentId      String
  locationId        String?
  
  // Compensation
  salary            Decimal           @db.Decimal(12, 2)
  currency          String            @default("USD")
  bonus             Decimal?          @db.Decimal(12, 2)
  equity            String?           // Stock options, RSUs
  
  // Benefits
  benefits          String?           @db.Text
  
  // Dates
  startDate         DateTime?
  offerDate         DateTime?
  expiryDate        DateTime?
  acceptedDate      DateTime?
  rejectedDate      DateTime?
  
  // Documents
  offerLetterUrl    String?
  
  // Notes
  notes             String?           @db.Text
  rejectionReason   String?           @db.Text
  
  createdBy         String            // Employee ID
  createdAt         DateTime          @default(now())
  updatedAt         DateTime          @updatedAt
  
  @@index([candidateId, status])
  @@index([status, offerDate])
}

// Candidate Notes (Internal)
model CandidateNote {
  id                String            @id @default(cuid())
  
  candidateId       String
  candidate         Candidate         @relation(fields: [candidateId], references: [id], onDelete: Cascade)
  
  note              String            @db.Text
  isPrivate         Boolean           @default(false)
  
  createdBy         String            // Employee ID
  createdAt         DateTime          @default(now())
  updatedAt         DateTime          @updatedAt
  
  @@index([candidateId, createdAt])
}

// Recruitment Analytics
model RecruitmentMetrics {
  id                String            @id @default(cuid())
  
  // Period
  periodStart       DateTime
  periodEnd         DateTime
  
  // Metrics
  jobPostings       Int               @default(0)
  applications      Int               @default(0)
  interviews        Int               @default(0)
  offers            Int               @default(0)
  hires             Int               @default(0)
  
  // Time Metrics (in days)
  avgTimeToHire     Decimal?          @db.Decimal(8, 2)
  avgTimeToInterview Decimal?         @db.Decimal(8, 2)
  avgTimeToOffer    Decimal?          @db.Decimal(8, 2)
  
  // Conversion Rates (percentage)
  applicationToInterview Decimal?     @db.Decimal(5, 2)
  interviewToOffer  Decimal?          @db.Decimal(5, 2)
  offerAcceptanceRate Decimal?        @db.Decimal(5, 2)
  
  // Source Effectiveness
  sourceBreakdown   Json?             // Applications by source
  
  createdAt         DateTime          @default(now())
  
  @@index([periodStart, periodEnd])
}
```

### Updates to Existing Models

```prisma
// Add to Employee model
model Employee {
  // ... existing fields ...
  
  // Recruitment Relations
  managedJobPostings    JobPosting[]  @relation("HiringManager")
  interviewParticipation InterviewParticipant[]
}
```

## 🎨 Features & Functionality

### 1. Job Posting Management

#### Features:
- **Create Job Postings**
  - Rich text editor for job description
  - Requirements and responsibilities sections
  - Salary range (optional)
  - Skills tagging
  - Multiple positions support
  
- **Job Status Management**
  - Draft → Open → On Hold → Closed → Filled
  - Automatic closing on deadline
  - Reopen closed positions
  
- **Job Board Integration**
  - Public career page
  - Share on social media
  - Export to job boards (LinkedIn, Indeed)
  
- **Templates**
  - Save job posting templates
  - Clone existing postings
  - Department-specific templates

#### Pages:
- `/recruitment/jobs` - List all job postings
- `/recruitment/jobs/new` - Create new job posting
- `/recruitment/jobs/[id]` - Job details & applications
- `/recruitment/jobs/[id]/edit` - Edit job posting
- `/recruitment/career-site` - Public career page

### 2. Candidate Management

#### Features:
- **Candidate Database**
  - Centralized candidate profiles
  - Resume parsing (extract info automatically)
  - Document management (resume, cover letter, portfolio)
  - Candidate tagging and categorization
  
- **Candidate Sourcing**
  - Track source of each candidate
  - Employee referral tracking
  - Source effectiveness analytics
  
- **Candidate Communication**
  - Email templates (application received, interview invite, rejection)
  - Bulk email to candidates
  - Communication history
  
- **Talent Pool**
  - Save promising candidates for future
  - Search and filter talent pool
  - Reactivate old candidates

#### Pages:
- `/recruitment/candidates` - All candidates
- `/recruitment/candidates/[id]` - Candidate profile
- `/recruitment/talent-pool` - Saved candidates

### 3. Application Tracking

#### Features:
- **Application Pipeline**
  - Kanban board view (Applied → Screening → Interview → Offer)
  - Drag-and-drop status updates
  - Bulk actions (reject, move to next stage)
  
- **Application Screening**
  - Screening questions
  - Resume scoring
  - Keyword matching
  - Automated screening rules
  
- **Application Status**
  - Status history/audit trail
  - Automated status updates
  - Candidate notifications
  
- **Collaboration**
  - Internal notes on applications
  - @mention team members
  - Share candidate profiles

#### Pages:
- `/recruitment/applications` - All applications
- `/recruitment/applications/[id]` - Application details
- `/recruitment/pipeline` - Kanban board view

### 4. Interview Management

#### Features:
- **Interview Scheduling**
  - Calendar integration
  - Multiple interview rounds
  - Panel interviews support
  - Automated email invites
  
- **Interview Types**
  - Phone screen
  - Video call (Zoom, Teams integration)
  - In-person
  - Technical assessment
  - HR round
  - Final round
  
- **Interview Feedback**
  - Structured feedback forms
  - Rating system (1-5 stars)
  - Recommendation (Strong Yes to Strong No)
  - Collaborative feedback
  
- **Interview Scheduling**
  - Interviewer availability
  - Conflict detection
  - Reschedule/cancel interviews
  - Interview reminders

#### Pages:
- `/recruitment/interviews` - All interviews
- `/recruitment/interviews/schedule` - Schedule interview
- `/recruitment/interviews/[id]` - Interview details
- `/recruitment/interviews/[id]/feedback` - Submit feedback

### 5. Offer Management

#### Features:
- **Offer Creation**
  - Offer letter templates
  - Compensation details
  - Benefits package
  - Start date selection
  
- **Offer Approval Workflow**
  - Multi-level approval
  - Budget approval
  - HR approval
  
- **Offer Tracking**
  - Offer status (Sent, Accepted, Rejected, Negotiating)
  - Offer expiry dates
  - Offer acceptance rate
  
- **Offer Negotiation**
  - Track negotiation history
  - Counter-offers
  - Final offer details

#### Pages:
- `/recruitment/offers` - All offers
- `/recruitment/offers/new` - Create offer
- `/recruitment/offers/[id]` - Offer details

### 6. Analytics & Reporting

#### Metrics:
- **Recruitment Funnel**
  - Applications → Interviews → Offers → Hires
  - Conversion rates at each stage
  - Drop-off analysis
  
- **Time Metrics**
  - Time to hire
  - Time to interview
  - Time to offer
  - Time to fill position
  
- **Source Effectiveness**
  - Applications by source
  - Hires by source
  - Cost per hire by source
  - Quality of hire by source
  
- **Hiring Manager Performance**
  - Jobs posted
  - Time to fill
  - Offer acceptance rate
  
- **Department Analytics**
  - Hiring by department
  - Open positions by department
  - Average time to hire

#### Pages:
- `/recruitment/analytics` - Dashboard
- `/recruitment/reports` - Custom reports
- `/recruitment/reports/funnel` - Recruitment funnel
- `/recruitment/reports/time-to-hire` - Time metrics

### 7. Career Site (Public)

#### Features:
- **Public Job Board**
  - List all open positions
  - Search and filter jobs
  - Job details page
  - Apply online
  
- **Application Form**
  - Resume upload
  - Cover letter
  - Screening questions
  - Social profile links
  
- **Company Info**
  - About company
  - Culture and values
  - Employee testimonials
  - Office locations

#### Pages:
- `/careers` - Public career site
- `/careers/jobs` - Job listings
- `/careers/jobs/[id]` - Job details
- `/careers/apply/[jobId]` - Application form

## 🔐 Permissions & Access Control

### Roles:

1. **ADMIN**
   - Full access to all recruitment features
   - Manage job postings
   - View all candidates and applications
   - Access analytics

2. **HR_MANAGER**
   - Create and manage job postings
   - View all candidates and applications
   - Schedule interviews
   - Create offers
   - Access analytics

3. **HIRING_MANAGER**
   - View jobs they're managing
   - Review applications for their jobs
   - Provide interview feedback
   - Request offers

4. **INTERVIEWER**
   - View assigned interviews
   - Submit interview feedback
   - View candidate profiles

5. **EMPLOYEE**
   - Refer candidates
   - View referral status

## 📱 User Interface Components

### Reusable Components:

1. **JobCard** - Display job posting summary
2. **CandidateCard** - Display candidate profile
3. **ApplicationCard** - Display application summary
4. **InterviewCard** - Display interview details
5. **OfferCard** - Display offer summary
6. **StatusBadge** - Display status with colors
7. **PipelineBoard** - Kanban board for applications
8. **InterviewCalendar** - Calendar view of interviews
9. **FeedbackForm** - Interview feedback form
10. **OfferLetterPreview** - Preview offer letter

## 🔄 Workflows

### 1. Job Posting Workflow
```
Create Draft → Review → Publish → Accept Applications → Close → Fill
```

### 2. Application Workflow
```
Applied → Screening → Shortlisted → Interview → Assessment → Offer → Accepted/Rejected
```

### 3. Interview Workflow
```
Schedule → Send Invite → Conduct → Submit Feedback → Decision
```

### 4. Offer Workflow
```
Create Draft → Approval → Send to Candidate → Negotiation → Accepted/Rejected
```

## 📧 Email Notifications

### Automated Emails:

1. **To Candidates:**
   - Application received confirmation
   - Application status updates
   - Interview invitation
   - Interview reminder (24 hours before)
   - Interview rescheduled
   - Offer letter
   - Rejection (with feedback option)

2. **To Hiring Team:**
   - New application received
   - Interview scheduled
   - Feedback reminder
   - Offer approval request
   - Offer accepted/rejected

## 🎯 Implementation Priority

### Phase 1: Core Features (Week 1-2)
- [ ] Database schema implementation
- [ ] Job posting CRUD
- [ ] Candidate management
- [ ] Basic application tracking
- [ ] Public career site

### Phase 2: Interview Management (Week 3)
- [ ] Interview scheduling
- [ ] Interview feedback
- [ ] Calendar integration
- [ ] Email notifications

### Phase 3: Offer Management (Week 4)
- [ ] Offer creation
- [ ] Offer templates
- [ ] Offer tracking
- [ ] Approval workflow

### Phase 4: Analytics & Reporting (Week 5)
- [ ] Recruitment metrics
- [ ] Dashboard
- [ ] Custom reports
- [ ] Export functionality

### Phase 5: Advanced Features (Week 6)
- [ ] Resume parsing
- [ ] Automated screening
- [ ] Talent pool
- [ ] Employee referrals
- [ ] Integration with job boards

## 📊 Success Metrics

### Key Performance Indicators (KPIs):

1. **Time to Hire** - Average days from job posting to offer acceptance
2. **Cost per Hire** - Total recruitment cost / number of hires
3. **Quality of Hire** - Performance rating of new hires after 6 months
4. **Offer Acceptance Rate** - Offers accepted / offers made
5. **Source Effectiveness** - Hires by source / applications by source
6. **Candidate Experience Score** - Survey feedback from candidates
7. **Time to Fill** - Days from job opening to position filled
8. **Application Completion Rate** - Completed applications / started applications

## 🔗 Integration Opportunities

### External Integrations:

1. **Job Boards**
   - LinkedIn Jobs
   - Indeed
   - Glassdoor
   - Monster

2. **Calendar**
   - Google Calendar
   - Microsoft Outlook
   - Apple Calendar

3. **Video Conferencing**
   - Zoom
   - Microsoft Teams
   - Google Meet

4. **Background Check**
   - Checkr
   - HireRight
   - Sterling

5. **Assessment Tools**
   - HackerRank (Technical)
   - Codility (Technical)
   - TestGorilla (Skills)

## 💡 Best Practices

1. **Candidate Experience**
   - Simple application process
   - Regular communication
   - Timely feedback
   - Transparent process

2. **Data Privacy**
   - GDPR compliance
   - Data retention policies
   - Candidate consent
   - Secure document storage

3. **Bias Reduction**
   - Blind resume screening
   - Structured interviews
   - Diverse interview panels
   - Standardized evaluation

4. **Process Efficiency**
   - Automated workflows
   - Template usage
   - Bulk actions
   - Quick filters

## 📝 Next Steps

1. Review and approve this plan
2. Create database migration for new tables
3. Implement Phase 1 features
4. Design UI mockups
5. Develop API endpoints
6. Build frontend pages
7. Test with sample data
8. Deploy to production

---

**Estimated Total Development Time:** 6-8 weeks
**Team Size:** 2-3 developers
**Priority:** High (Essential for growing organizations)

**Made with Bob** 🤖
*Last Updated: 2026-05-27*