# Dark Mode Quick Fix - VS Code Find & Replace

Use VS Code's Find & Replace (Ctrl+Shift+H) to fix dark mode on all remaining pages in **5 minutes**.

## 🎯 Pages to Fix

- Payroll (`src/app/payroll/page.tsx`)
- Performance (`src/app/performance/page.tsx`)
- Projects (`src/app/projects/page.tsx`)
- Customers (`src/app/customers/page.tsx`)
- Analytics (`src/app/analytics/page.tsx`)
- Reports (`src/app/reports/page.tsx`)
- Settings (`src/app/settings/page.tsx`)
- Locations (`src/app/locations/page.tsx`)

## 📝 Instructions

1. Open VS Code
2. Press `Ctrl+Shift+H` (Windows/Linux) or `Cmd+Shift+H` (Mac)
3. Enable "Use Regular Expression" (.*) button
4. Set "Files to include": `src/app/**/*.tsx`
5. Apply each find & replace below **one at a time**
6. Click "Replace All" for each

## 🔄 Find & Replace Patterns

### 1. Page Headings (H1)
```
Find: className="text-2xl font-bold text-gray-900"
Replace: className="text-2xl font-bold text-gray-900 dark:text-gray-100"
```

### 2. Descriptions/Subtitles
```
Find: className="text-sm text-gray-600 mt-1"
Replace: className="text-sm text-gray-600 dark:text-gray-400 mt-1"
```

### 3. White Cards/Containers
```
Find: className="bg-white rounded-lg shadow-sm border border-gray-200
Replace: className="bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700
```

### 4. Card Text (Small Gray)
```
Find: className="text-sm text-gray-600 mb-1"
Replace: className="text-sm text-gray-600 dark:text-gray-400 mb-1"
```

### 5. Card Values (Large Bold)
```
Find: className="text-2xl font-bold text-gray-900"
Replace: className="text-2xl font-bold text-gray-900 dark:text-gray-100"
```

### 6. Loading Spinner
```
Find: className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600
Replace: className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 dark:border-blue-400
```

### 7. Loading Text
```
Find: className="text-gray-600">Loading
Replace: className="text-gray-600 dark:text-gray-400">Loading
```

### 8. Empty State Headings
```
Find: className="text-lg font-medium text-gray-900 mb-2"
Replace: className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2"
```

### 9. Empty State Text
```
Find: className="text-gray-600 mb-4"
Replace: className="text-gray-600 dark:text-gray-400 mb-4"
```

### 10. Table Headers (bg-gray-50)
```
Find: className="bg-gray-50">
Replace: className="bg-gray-50 dark:bg-gray-800">
```

### 11. Table Header Text
```
Find: className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase
Replace: className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase
```

### 12. Table Body
```
Find: className="bg-white divide-y divide-gray-200">
Replace: className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
```

### 13. Table Rows Hover
```
Find: className="hover:bg-gray-50">
Replace: className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
```

### 14. Table Cell Text (Regular)
```
Find: className="text-sm text-gray-900">
Replace: className="text-sm text-gray-900 dark:text-gray-100">
```

### 15. Table Cell Text (Muted)
```
Find: className="text-sm text-gray-500">
Replace: className="text-sm text-gray-500 dark:text-gray-400">
```

### 16. Form Inputs/Selects
```
Find: className="px-4 py-2 border border-gray-300 rounded-lg
Replace: className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 rounded-lg
```

### 17. Primary Buttons
```
Find: className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700
Replace: className="px-4 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors
```

### 18. Secondary Buttons
```
Find: className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50
Replace: className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors
```

### 19. Badge Backgrounds (Avatar circles)
```
Find: className="bg-blue-100 rounded-full
Replace: className="bg-blue-100 dark:bg-blue-900/30 rounded-full
```

### 20. Badge Text
```
Find: className="text-blue-600 font-semibold
Replace: className="text-blue-600 dark:text-blue-400 font-semibold
```

### 21. Pagination Text
```
Find: className="text-sm text-gray-600">
Page
Replace: className="text-sm text-gray-600 dark:text-gray-400">
Page
```

### 22. Dividers/Borders
```
Find: className="border-t border-gray-100
Replace: className="border-t border-gray-100 dark:border-gray-800
```

### 23. Link Text
```
Find: className="text-blue-600 hover:text-blue-900
Replace: className="text-blue-600 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-300
```

## ✅ Verification

After applying all replacements:

1. Start dev server: `npm run dev`
2. Visit each page
3. Toggle dark mode (sun/moon icon in header)
4. Verify:
   - All text is readable
   - Cards have dark backgrounds
   - Tables adapt properly
   - Buttons are visible
   - Inputs are usable

## 🎨 Common Patterns Reference

If you need to manually fix any remaining issues:

```tsx
// Headings
className="text-gray-900 dark:text-gray-100"

// Body text
className="text-gray-600 dark:text-gray-400"

// Muted text
className="text-gray-500 dark:text-gray-400"

// Cards
className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700"

// Inputs
className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100"

// Tables
className="bg-gray-50 dark:bg-gray-800" // Header
className="bg-white dark:bg-gray-900" // Body
className="hover:bg-gray-50 dark:hover:bg-gray-800" // Row hover

// Buttons
className="bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600"

// Badges (Success)
className="bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400"

// Badges (Warning)
className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400"

// Badges (Danger)
className="bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400"
```

## 📊 Expected Results

After applying all fixes:

- ✅ **Payroll** - All salary tables, cards, and text readable
- ✅ **Performance** - Review cards and ratings visible
- ✅ **Projects** - Project cards and status badges adapted
- ✅ **Customers** - Customer table and details readable
- ✅ **Analytics** - Charts and metrics visible
- ✅ **Reports** - Report cards and data readable
- ✅ **Settings** - Forms and inputs usable
- ✅ **Locations** - Location table adapted

## ⏱️ Time Estimate

- **Manual (this method):** 5-10 minutes
- **Automated script:** Would need Node.js in PATH
- **Individual file editing:** 2-3 hours

## 💡 Pro Tips

1. **Do one replacement at a time** - Easier to undo if needed
2. **Check "Match Case"** - Ensures exact matches
3. **Preview before replacing** - Click on results to see context
4. **Test frequently** - Toggle dark mode after every few replacements
5. **Use dashboard as reference** - It's already perfect

## 🆘 If Something Breaks

1. Press `Ctrl+Z` to undo last replacement
2. Check the file in git: `git diff src/app/[page]/page.tsx`
3. Revert if needed: `git checkout src/app/[page]/page.tsx`
4. Try again with correct pattern

---

**Made with Bob** 🤖
**Estimated Time:** 5-10 minutes
**Difficulty:** Easy