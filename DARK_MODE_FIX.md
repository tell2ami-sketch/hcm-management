# 🌓 Dark Mode Fix Guide

## Problem
The header and sidebar are changing themes, but the main content area (pages) is not responding to theme changes.

## Solution
The page components need dark mode classes added. Here are two ways to fix this:

---

## ✅ Quick Fix (Recommended)

### Option 1: Run the Automated Script

1. **Open Terminal in the `hr-management-system` folder**
   ```bash
   cd hr-management-system
   ```

2. **Run the dark mode migration script**
   ```bash
   node add-dark-mode.js
   ```

3. **Restart your dev server**
   ```bash
   npm run dev
   ```

4. **Test the theme toggle** - Everything should now work!

---

## 🔧 Manual Fix (If script doesn't work)

If Node.js isn't available or the script fails, manually update these classes:

### Common Replacements

Replace these classes throughout your page files:

| **Find** | **Replace With** |
|----------|------------------|
| `bg-white` | `bg-white dark:bg-gray-900` |
| `bg-gray-50` | `bg-gray-50 dark:bg-gray-800` |
| `bg-gray-100` | `bg-gray-100 dark:bg-gray-800` |
| `text-gray-900` | `text-gray-900 dark:text-gray-100` |
| `text-gray-800` | `text-gray-800 dark:text-gray-200` |
| `text-gray-700` | `text-gray-700 dark:text-gray-300` |
| `text-gray-600` | `text-gray-600 dark:text-gray-400` |
| `border-gray-200` | `border-gray-200 dark:border-gray-700` |
| `border-gray-300` | `border-gray-300 dark:border-gray-600` |
| `divide-gray-200` | `divide-gray-200 dark:divide-gray-700` |
| `hover:bg-gray-50` | `hover:bg-gray-50 dark:hover:bg-gray-800` |

### Files to Update

Update these files in `src/app/`:

1. ✅ `dashboard/page.tsx` - Already has MainLayout background
2. ✅ `employees/page.tsx` - Update cards and tables
3. ✅ `departments/page.tsx` - Update cards
4. ✅ `leave/page.tsx` - Update forms and cards
5. ✅ `payroll/page.tsx` - Update tables
6. ✅ `performance/page.tsx` - Update cards
7. ✅ `projects/page.tsx` - Update cards
8. ✅ `customers/page.tsx` - Update tables
9. ✅ `analytics/page.tsx` - Update charts
10. ✅ `reports/page.tsx` - Update cards
11. ✅ `settings/page.tsx` - Update forms
12. ✅ `locations/page.tsx` - Update tables

---

## 📝 Example: Before & After

### Before (No Dark Mode)
```tsx
<div className="bg-white rounded-lg shadow p-6">
  <h3 className="text-lg font-semibold text-gray-900 mb-4">
    Card Title
  </h3>
  <p className="text-gray-600">
    Card content
  </p>
</div>
```

### After (With Dark Mode)
```tsx
<div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6">
  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
    Card Title
  </h3>
  <p className="text-gray-600 dark:text-gray-400">
    Card content
  </p>
</div>
```

---

## 🎯 Quick Test

After making changes:

1. **Restart dev server**
   ```bash
   npm run dev
   ```

2. **Open browser** at `http://localhost:3000`

3. **Login** to the system

4. **Click the theme toggle** (sun/moon icon in header)

5. **Check these areas:**
   - ✅ Header background changes
   - ✅ Sidebar background changes
   - ✅ **Main content background changes** ← This should now work!
   - ✅ Cards change color
   - ✅ Text changes color
   - ✅ Tables change color

---

## 🚀 Alternative: Use VS Code Find & Replace

1. **Open VS Code**

2. **Press `Ctrl + Shift + H`** (Find and Replace in Files)

3. **Set search scope** to `src/app`

4. **Use regex mode** (click the `.*` button)

5. **Find:** `className="([^"]*)\bbg-white\b([^"]*)"`

6. **Replace:** `className="$1bg-white dark:bg-gray-900$2"`

7. **Click "Replace All"**

8. **Repeat for other classes** from the table above

---

## 💡 Pro Tips

### Tip 1: Use Global Styles
Instead of adding dark mode to every component, you can use the global styles already defined in `globals.css`:

```tsx
// Use these pre-defined classes
<div className="card">  // Already has dark mode support
<button className="btn btn-primary">  // Already has dark mode support
<input className="form-input">  // Already has dark mode support
```

### Tip 2: Check the Design System
See `DESIGN_SYSTEM.md` for all available dark mode classes.

### Tip 3: Test Both Modes
Keep the theme toggle visible and test your changes in both light and dark modes.

---

## 🐛 Troubleshooting

### Issue: Script won't run
**Solution:** Make sure Node.js is installed and in your PATH
```bash
node --version  # Should show v18 or higher
```

### Issue: Changes not visible
**Solution:** Hard refresh the browser
- Windows/Linux: `Ctrl + Shift + R`
- Mac: `Cmd + Shift + R`

### Issue: Some elements still not changing
**Solution:** Check if they use inline styles or custom classes
- Look for `style={{}}` attributes
- Check for custom CSS classes

---

## ✅ Verification Checklist

After applying the fix, verify:

- [ ] Dashboard cards change color
- [ ] Employee table changes color
- [ ] Department cards change color
- [ ] Forms have dark backgrounds
- [ ] Buttons adapt to theme
- [ ] Text is readable in both modes
- [ ] Borders are visible in both modes
- [ ] Hover states work in both modes
- [ ] No white flashes when switching
- [ ] Theme persists on page refresh

---

## 📊 What's Already Fixed

✅ **Layout Components:**
- Header (top bar)
- Sidebar (left menu)
- MainLayout (background)

✅ **Theme System:**
- ThemeProvider
- Theme Toggle button
- localStorage persistence
- System preference detection

❌ **Still Needs Fixing:**
- Individual page components (dashboard, employees, etc.)
- Cards, tables, and forms on those pages

---

## 🎉 Expected Result

After the fix:

### Light Mode
- White backgrounds
- Dark text
- Light borders
- Clean, bright interface

### Dark Mode
- Dark gray backgrounds (#111827)
- Light text
- Dark borders
- Easy on the eyes

### Smooth Transition
- Colors fade smoothly (200ms)
- No jarring changes
- Professional appearance

---

## 📚 Additional Resources

- **Design System:** `DESIGN_SYSTEM.md`
- **Implementation Guide:** `DESIGN_SYSTEM_IMPLEMENTATION.md`
- **Theme Guide:** `THEME_GUIDE.md`

---

## 🆘 Need Help?

If you're still having issues:

1. Check browser console for errors (F12)
2. Verify ThemeProvider is in `layout.tsx`
3. Check if `dark` class is on `<html>` element
4. Inspect elements to see if dark mode classes are applied
5. Clear browser cache and localStorage

---

**Made with Bob** 🤖

*Last Updated: 2026-05-27*