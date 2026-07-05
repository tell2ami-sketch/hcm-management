# HR Management System - Login Guide

## 🚀 Quick Start

Your HR Management System is now set up with authentication! Here's how to use it:

## 📍 Access the Application

1. **Home Page**: http://localhost:3000
2. **Login Page**: http://localhost:3000/login
3. **Dashboard**: http://localhost:3000/dashboard (requires login)

## 🔐 Test Credentials

The system comes with pre-seeded test accounts. All accounts use the same password: **Password123!**

### Admin Account (CEO)
- **Email**: john.smith@company.com
- **Password**: Password123!
- **Role**: ADMIN

### HR Manager
- **Email**: jennifer.harris@company.com
- **Password**: Password123!
- **Role**: HR_MANAGER

### Engineering Manager
- **Email**: sarah.johnson@company.com
- **Password**: Password123!
- **Role**: MANAGER

### Regular Employee
- **Email**: michael.brown@company.com
- **Password**: Password123!
- **Role**: EMPLOYEE

## 📋 Before You Login

Make sure you have:

1. ✅ PostgreSQL running on port 5432
2. ✅ Database created: `hr_management`
3. ✅ Run migrations: `npm run db:push`
4. ✅ Seeded the database: `npm run db:seed`
5. ✅ Development server running: `npm run dev`

## 🔧 Setup Commands (if not done yet)

```bash
# Navigate to project directory
cd hr-management-system

# Install dependencies (if not done)
npm install

# Generate Prisma client
npm run db:generate

# Push database schema
npm run db:push

# Seed the database with test data
npm run db:seed

# Start development server
npm run dev
```

## 🎯 What You Can Do

After logging in, you'll see:

- **Dashboard**: Overview of HR metrics and statistics
- **Quick Actions**: Common tasks like adding employees, requesting leave
- **Recent Activity**: Latest updates in the system
- **User Profile**: Your account information in the header

## 🔄 Logout

Click the "Logout" button in the top-right corner of the dashboard to sign out.

## 🐛 Troubleshooting

### "Invalid email or password" error
- Make sure the database is seeded: `npm run db:seed`
- Check that PostgreSQL is running
- Verify the DATABASE_URL in `.env` file

### "Not authenticated" when accessing dashboard
- Make sure you're logged in first
- Try clearing browser cookies and logging in again

### Page not responding
- Check that `npm run dev` is running
- Verify no errors in the terminal
- Check browser console for errors (F12)

## 📝 Notes

- The login system uses HTTP-only cookies for session management
- Sessions last for 7 days
- All passwords in the seed data are hashed using bcrypt
- The system includes 30 pre-seeded employees across 5 departments

## 🎉 Next Steps

Once logged in, you can:
1. Explore the dashboard
2. View employee data
3. Check department information
4. Review project assignments
5. Access analytics and reports

---

**Made with Bob** 🤖