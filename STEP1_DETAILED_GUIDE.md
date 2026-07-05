# Step 1: Getting the Project Files - Detailed Guide

This guide explains **Step 1** from the SETUP_GUIDE.md in detail, showing you exactly how to get the HR Management System project files onto your computer.

---

## Understanding Step 1

**Step 1** is about getting the project files from where they are stored to your local computer so you can work with them. There are two main ways to do this:

1. **Using Git** (if the project is in a Git repository like GitHub)
2. **Downloading as ZIP** (if you have the files as a compressed folder)

---

## Method 1: Using Git (Recommended)

### What is Git?

Git is a version control system that helps track changes in code. GitHub, GitLab, and Bitbucket are platforms that host Git repositories online.

### Prerequisites

Before you start, you need:
- Git installed on your computer
- The repository URL (looks like: `https://github.com/username/hr-management-system.git`)

### Step-by-Step Instructions

#### 1. Install Git (if not already installed)

**On Windows:**
1. Go to https://git-scm.com/download/win
2. Download the installer
3. Run the installer and follow the prompts (use default settings)
4. Verify installation by opening Command Prompt or PowerShell and typing:
   ```bash
   git --version
   ```
   You should see something like: `git version 2.40.0`

**On Mac:**
1. Open Terminal
2. Type: `git --version`
3. If not installed, it will prompt you to install Xcode Command Line Tools
4. Follow the prompts to install

**On Linux:**
```bash
# Ubuntu/Debian
sudo apt-get update
sudo apt-get install git

# Fedora
sudo dnf install git

# Verify
git --version
```

#### 2. Choose a Location for Your Project

Decide where you want to store the project on your computer. For example:
- Windows: `C:\Users\YourName\Projects\`
- Mac/Linux: `~/Projects/` or `/home/yourname/Projects/`

#### 3. Open Terminal/Command Prompt

**On Windows:**
- Press `Windows + R`
- Type `cmd` or `powershell`
- Press Enter

**On Mac:**
- Press `Cmd + Space`
- Type `Terminal`
- Press Enter

**On Linux:**
- Press `Ctrl + Alt + T`

#### 4. Navigate to Your Chosen Location

Use the `cd` (change directory) command:

```bash
# Windows
cd C:\Users\YourName\Projects

# Mac/Linux
cd ~/Projects
```

**Tip:** If the folder doesn't exist, create it first:
```bash
# Windows
mkdir C:\Users\YourName\Projects
cd C:\Users\YourName\Projects

# Mac/Linux
mkdir -p ~/Projects
cd ~/Projects
```

#### 5. Clone the Repository

Now, clone (download) the project:

```bash
git clone <repository-url>
```

**Example:**
```bash
git clone https://github.com/yourcompany/hr-management-system.git
```

**What happens:**
- Git downloads all project files
- Creates a folder named `hr-management-system`
- Shows progress as it downloads

**Expected Output:**
```
Cloning into 'hr-management-system'...
remote: Enumerating objects: 100, done.
remote: Counting objects: 100% (100/100), done.
remote: Compressing objects: 100% (80/80), done.
remote: Total 100 (delta 20), reused 100 (delta 20)
Receiving objects: 100% (100/100), 1.5 MiB | 2.0 MiB/s, done.
Resolving deltas: 100% (20/20), done.
```

#### 6. Navigate into the Project Folder

```bash
cd hr-management-system
```

#### 7. Verify the Files

List the files to make sure everything downloaded:

```bash
# Windows (Command Prompt)
dir

# Windows (PowerShell) or Mac/Linux
ls
```

**You should see:**
```
prisma/
src/
.env.example
.gitignore
next.config.mjs
package.json
README.md
SETUP_GUIDE.md
tailwind.config.ts
tsconfig.json
... and more files
```

✅ **Success!** You now have the project files on your computer.

---

## Method 2: Downloading as ZIP

### When to Use This Method

Use this method if:
- You don't have Git installed
- The project is provided as a ZIP file
- You're not familiar with Git yet

### Step-by-Step Instructions

#### 1. Download the ZIP File

**If from GitHub:**
1. Go to the repository URL in your web browser
2. Click the green "Code" button
3. Click "Download ZIP"
4. Save the file to your Downloads folder

**If provided directly:**
- Save the ZIP file to a location you can remember (e.g., Downloads folder)

#### 2. Extract the ZIP File

**On Windows:**
1. Navigate to where you saved the ZIP file
2. Right-click on the ZIP file
3. Select "Extract All..."
4. Choose a destination folder (e.g., `C:\Users\YourName\Projects\`)
5. Click "Extract"

**On Mac:**
1. Navigate to where you saved the ZIP file
2. Double-click the ZIP file
3. It will automatically extract to the same location
4. Move the extracted folder to your desired location (e.g., `~/Projects/`)

**On Linux:**
```bash
# Navigate to where the ZIP file is
cd ~/Downloads

# Extract the ZIP file
unzip hr-management-system.zip

# Move to your projects folder
mv hr-management-system ~/Projects/
```

#### 3. Navigate to the Project Folder

Open Terminal/Command Prompt and navigate to the extracted folder:

```bash
# Windows
cd C:\Users\YourName\Projects\hr-management-system

# Mac/Linux
cd ~/Projects/hr-management-system
```

#### 4. Verify the Files

```bash
# Windows (Command Prompt)
dir

# Windows (PowerShell) or Mac/Linux
ls
```

✅ **Success!** You now have the project files on your computer.

---

## Current Situation: Files Already in Your Directory

Based on your current setup, **the project files are already in your directory**:

```
c:/Users/NEELOTPALDUTTA/Downloads/Bob/hr-management-system/
```

This means **Step 1 is already complete** for you! The files are already on your computer.

### What You Should Do Next

Since the files are already there, you can skip Step 1 and move directly to **Step 2: Install Dependencies**.

#### Quick Verification

1. Open Command Prompt or PowerShell
2. Navigate to the project:
   ```bash
   cd C:\Users\NEELOTPALDUTTA\Downloads\Bob\hr-management-system
   ```
3. List the files:
   ```bash
   dir
   ```
4. You should see all the project files

---

## Understanding the Project Structure

Once you have the files, here's what each folder/file does:

```
hr-management-system/
├── prisma/                    # Database configuration
│   └── schema.prisma         # Database structure definition
├── src/                      # Source code
│   ├── app/                 # Next.js pages and routes
│   │   ├── layout.tsx       # Main layout
│   │   ├── page.tsx         # Home page
│   │   └── globals.css      # Global styles
│   └── lib/                 # Utility functions
│       ├── prisma.ts        # Database client
│       ├── utils.ts         # Helper functions
│       └── validations.ts   # Form validations
├── .env.example             # Environment variables template
├── .gitignore              # Files to ignore in Git
├── next.config.mjs         # Next.js configuration
├── package.json            # Project dependencies
├── README.md               # Project documentation
├── SETUP_GUIDE.md          # This setup guide
├── tailwind.config.ts      # Styling configuration
└── tsconfig.json           # TypeScript configuration
```

---

## Common Issues and Solutions

### Issue 1: "git: command not found"

**Problem:** Git is not installed or not in your system PATH.

**Solution:**
1. Install Git from https://git-scm.com/
2. Restart your terminal/command prompt
3. Try again

### Issue 2: "Permission denied"

**Problem:** You don't have permission to write to the directory.

**Solution:**
```bash
# Windows: Run Command Prompt as Administrator
# Mac/Linux: Use sudo or change to a directory you own
cd ~/Projects  # Use your home directory
```

### Issue 3: "Repository not found"

**Problem:** The repository URL is incorrect or you don't have access.

**Solution:**
1. Verify the URL is correct
2. Check if you need to log in to GitHub/GitLab
3. Ensure you have access permissions

### Issue 4: "Cannot extract ZIP file"

**Problem:** ZIP file is corrupted or extraction tool is missing.

**Solution:**
1. Re-download the ZIP file
2. Try a different extraction tool (7-Zip, WinRAR, etc.)
3. On Linux: `sudo apt-get install unzip`

---

## Next Steps

After completing Step 1 (getting the files), you should:

1. ✅ Verify all files are present
2. ➡️ Move to **Step 2: Install Dependencies**
   - This installs all the required software packages
   - Run: `npm install`
3. ➡️ Continue with the rest of the SETUP_GUIDE.md

---

## Visual Guide

### What Your Folder Should Look Like

```
📁 hr-management-system/
  📁 prisma/
    📄 schema.prisma
  📁 src/
    📁 app/
      📄 layout.tsx
      📄 page.tsx
      📄 globals.css
    📁 lib/
      📄 prisma.ts
      📄 utils.ts
      📄 validations.ts
  📄 .env.example
  📄 .gitignore
  📄 next.config.mjs
  📄 package.json
  📄 README.md
  📄 SETUP_GUIDE.md
  📄 tailwind.config.ts
  📄 tsconfig.json
```

---

## Summary

**Step 1** is about getting the project files onto your computer. You can do this by:

1. **Using Git** (recommended): `git clone <url>`
2. **Downloading ZIP**: Extract the ZIP file to your desired location

**In your case**, the files are already in:
```
C:\Users\NEELOTPALDUTTA\Downloads\Bob\hr-management-system\
```

So you can **skip Step 1** and proceed directly to **Step 2: Install Dependencies**.

---

## Need Help?

If you're still having trouble:

1. Check if the files exist in your directory
2. Make sure you're in the correct folder
3. Verify you have the necessary permissions
4. Try the alternative method (Git vs ZIP)

**Ready to continue?** Move on to Step 2 in the SETUP_GUIDE.md!

---

*Last Updated: 2026-05-27*