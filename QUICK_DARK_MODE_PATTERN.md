# 🎨 Quick Dark Mode Pattern Guide

## ✅ Dashboard Page - FIXED!

The dashboard page now has full dark mode support. Use this as a reference for fixing other pages.

---

## 🎯 Pattern to Follow

### 1. Cards & Containers
```tsx
// ❌ Before
<div className="bg-white rounded-lg shadow p-6">

// ✅ After
<div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6 border border-gray-200 dark:border-gray-700 transition-colors">
```

### 2. Headings
```tsx
// ❌ Before
<h3 className="text-lg font-semibold text-gray-900 mb-4">

// ✅ After
<h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
```

### 3. Body Text
```tsx
// ❌ Before
<p className="text-sm text-gray-600">

// ✅ After
<p className="text-sm text-gray-600 dark:text-gray-400">
```

### 4. Badges
```tsx
// ❌ Before
<span className="text-xs font-medium text-green-600 bg-green-100 px-2 py-1 rounded">

// ✅ After
<span className="text-xs font-medium text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded">
```

### 5. Borders & Dividers
```tsx
// ❌ Before
<div className="border-b border-gray-100">

// ✅ After
<div className="border-b border-gray-100 dark:border-gray-800">
```

### 6. Tables
```tsx
// ❌ Before
<table className="min-w-full divide-y divide-gray-200">
  <thead className="bg-gray-50">
    <th className="text-gray-500">

// ✅ After
<table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
  <thead className="bg-gray-50 dark:bg-gray-800">
    <th className="text-gray-500 dark:text-gray-400">
```

### 7. Table Rows
```tsx
// ❌ Before
<tr className="hover:bg-gray-50">
  <td className="text-gray-900">

// ✅ After
<tr className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
  <td className="text-gray-900 dark:text-gray-100">
```

### 8. Inputs & Forms
```tsx
// ❌ Before
<input className="w-full px-3 py-2 border border-gray-300 rounded-lg">

// ✅ After
<input className="w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 rounded-lg">
```

### 9. Buttons (Secondary)
```tsx
// ❌ Before
<button className="px-4 py-2 text-gray-700 bg-white border border-gray-300">

// ✅ After
<button className="px-4 py-2 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
```

### 10. Links
```tsx
// ❌ Before
<Link className="text-blue-600 hover:text-blue-900">

// ✅ After
<Link className="text-blue-600 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-300">
```

---

## 📋 Complete Class Mapping

| Element | Light Mode | Dark Mode Addition |
|---------|-----------|-------------------|
| **Backgrounds** |
| Card | `bg-white` | `dark:bg-gray-900` |
| Section | `bg-gray-50` | `dark:bg-gray-800` |
| Hover | `hover:bg-gray-50` | `dark:hover:bg-gray-800` |
| **Text** |
| Heading | `text-gray-900` | `dark:text-gray-100` |
| Body | `text-gray-600` | `dark:text-gray-400` |
| Muted | `text-gray-500` | `dark:text-gray-500` |
| **Borders** |
| Default | `border-gray-200` | `dark:border-gray-700` |
| Light | `border-gray-100` | `dark:border-gray-800` |
| Input | `border-gray-300` | `dark:border-gray-600` |
| **Badges** |
| Success | `bg-green-100 text-green-600` | `dark:bg-green-900/30 dark:text-green-400` |
| Warning | `bg-yellow-100 text-yellow-600` | `dark:bg-yellow-900/30 dark:text-yellow-400` |
| Danger | `bg-red-100 text-red-600` | `dark:bg-red-900/30 dark:text-red-400` |
| Info | `bg-blue-100 text-blue-600` | `dark:bg-blue-900/30 dark:text-blue-400` |
| **Dividers** |
| Default | `divide-gray-200` | `dark:divide-gray-700` |
| Light | `divide-gray-100` | `dark:divide-gray-800` |

---

## 🚀 Quick Fix Steps

### For Each Page File:

1. **Find all `bg-white`** → Add `dark:bg-gray-900`
2. **Find all `text-gray-900`** → Add `dark:text-gray-100`
3. **Find all `text-gray-600`** → Add `dark:text-gray-400`
4. **Find all `border-gray-200`** → Add `dark:border-gray-700`
5. **Find all `bg-gray-50`** → Add `dark:bg-gray-800`
6. **Add `transition-colors`** to interactive elements

---

## 📁 Files to Update (Priority Order)

### High Priority (User-facing)
1. ✅ `dashboard/page.tsx` - **DONE!**
2. ⏳ `employees/page.tsx` - Tables & cards
3. ⏳ `departments/page.tsx` - Cards
4. ⏳ `leave/page.tsx` - Forms & tables

### Medium Priority
5. ⏳ `payroll/page.tsx` - Tables
6. ⏳ `performance/page.tsx` - Cards & forms
7. ⏳ `projects/page.tsx` - Cards
8. ⏳ `customers/page.tsx` - Tables

### Lower Priority
9. ⏳ `analytics/page.tsx` - Charts
10. ⏳ `reports/page.tsx` - Cards
11. ⏳ `settings/page.tsx` - Forms
12. ⏳ `locations/page.tsx` - Tables

---

## 💡 Pro Tips

### Tip 1: Use VS Code Multi-Cursor
1. Select `bg-white`
2. Press `Ctrl + D` to select next occurrence
3. Press `Ctrl + D` repeatedly to select all
4. Type to replace all at once

### Tip 2: Search & Replace
1. Press `Ctrl + H`
2. Find: `className="([^"]*)\bbg-white\b([^"]*)"`
3. Replace: `className="$1bg-white dark:bg-gray-900$2"`
4. Use regex mode (click `.*` button)

### Tip 3: Test As You Go
- Save file
- Check browser (auto-refresh)
- Toggle theme
- Verify readability

---

## ✅ Verification Checklist

After updating each page, verify:

- [ ] Cards have dark backgrounds
- [ ] Text is readable (light on dark)
- [ ] Borders are visible
- [ ] Badges have dark variants
- [ ] Tables have dark rows
- [ ] Hover states work
- [ ] Forms have dark inputs
- [ ] No white flashes
- [ ] Smooth transitions

---

## 🎨 Color Contrast Guidelines

### Light Mode
- Background: White (#FFFFFF)
- Text: Dark Gray (#111827)
- Contrast Ratio: 16:1 ✅

### Dark Mode
- Background: Dark Gray (#111827)
- Text: Light Gray (#F9FAFB)
- Contrast Ratio: 15:1 ✅

Both exceed WCAG AAA standard (7:1) ✅

---

## 📊 Example: Complete Card

```tsx
<div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6 border border-gray-200 dark:border-gray-700 transition-colors">
  {/* Header */}
  <div className="flex items-center justify-between mb-4">
    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
      Card Title
    </h3>
    <span className="badge badge-success">
      Active
    </span>
  </div>
  
  {/* Content */}
  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
    Card description text goes here.
  </p>
  
  {/* Stats */}
  <div className="flex items-baseline gap-2">
    <span className="text-2xl font-bold text-gray-900 dark:text-gray-100">
      1,234
    </span>
    <span className="text-sm text-gray-500 dark:text-gray-500">
      total
    </span>
  </div>
  
  {/* Footer */}
  <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
    <Link 
      href="/details" 
      className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
    >
      View details →
    </Link>
  </div>
</div>
```

---

## 🎯 Next Steps

1. **Test Dashboard** - Verify it works perfectly
2. **Update Employees Page** - Use same pattern
3. **Update Departments Page** - Use same pattern
4. **Continue with other pages** - One at a time
5. **Test each page** - Toggle theme after each update

---

**Made with Bob** 🤖

*Reference: Dashboard page is the perfect example!*