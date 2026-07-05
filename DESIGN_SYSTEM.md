# HR Management System - Design System Documentation

## 🎨 Overview

This document outlines the comprehensive design system for the HR Management System, including color palettes, typography, spacing, components, and usage guidelines.

---

## 📐 Design Principles

1. **Consistency** - Uniform design patterns across all pages
2. **Accessibility** - WCAG 2.1 AA compliant
3. **Responsiveness** - Mobile-first approach
4. **Performance** - Optimized for speed and efficiency
5. **Scalability** - Easy to extend and maintain

---

## 🎨 Color System

### Primary Colors
Used for main actions, links, and brand identity.

```css
primary-50:  #eff6ff
primary-100: #dbeafe
primary-200: #bfdbfe
primary-300: #93c5fd
primary-400: #60a5fa
primary-500: #3b82f6 (Base)
primary-600: #2563eb
primary-700: #1d4ed8
primary-800: #1e40af
primary-900: #1e3a8a
```

### Secondary Colors
Used for secondary actions and neutral elements.

```css
secondary-50:  #f8fafc
secondary-100: #f1f5f9
secondary-200: #e2e8f0
secondary-300: #cbd5e1
secondary-400: #94a3b8
secondary-500: #64748b (Base)
secondary-600: #475569
secondary-700: #334155
secondary-800: #1e293b
secondary-900: #0f172a
```

### Semantic Colors

#### Success (Green)
```css
success-500: #22c55e
success-600: #16a34a
success-700: #15803d
```

#### Warning (Yellow)
```css
warning-500: #f59e0b
warning-600: #d97706
warning-700: #b45309
```

#### Danger (Red)
```css
danger-500: #ef4444
danger-600: #dc2626
danger-700: #b91c1c
```

#### Info (Cyan)
```css
info-500: #0ea5e9
info-600: #0284c7
info-700: #0369a1
```

### Usage Examples

```tsx
// Primary button
<button className="bg-primary-600 hover:bg-primary-700 text-white">
  Click Me
</button>

// Success badge
<span className="badge badge-success">Active</span>

// Warning alert
<div className="bg-warning-50 border-warning-500 text-warning-800">
  Warning message
</div>
```

---

## 🌓 Dark Mode

### Enabling Dark Mode

The system supports dark mode using Tailwind's `dark:` variant.

```tsx
// Add dark mode class to root element
<html className="dark">
```

### Dark Mode Colors

All colors automatically adapt to dark mode:

```tsx
// Automatically switches between light and dark
<div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
  Content
</div>
```

### CSS Variables

```css
/* Light mode */
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
}

/* Dark mode */
.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
}
```

---

## 📝 Typography

### Font Family

- **Sans-serif**: Inter (primary)
- **Monospace**: Fira Code (code blocks)

### Font Sizes

```tsx
text-xs:   0.75rem  (12px)
text-sm:   0.875rem (14px)
text-base: 1rem     (16px)
text-lg:   1.125rem (18px)
text-xl:   1.25rem  (20px)
text-2xl:  1.5rem   (24px)
text-3xl:  1.875rem (30px)
text-4xl:  2.25rem  (36px)
text-5xl:  3rem     (48px)
```

### Font Weights

```tsx
font-thin:       100
font-light:      300
font-normal:     400
font-medium:     500
font-semibold:   600
font-bold:       700
font-extrabold:  800
```

### Headings

```tsx
<h1 className="text-4xl lg:text-5xl font-semibold">Heading 1</h1>
<h2 className="text-3xl lg:text-4xl font-semibold">Heading 2</h2>
<h3 className="text-2xl lg:text-3xl font-semibold">Heading 3</h3>
<h4 className="text-xl lg:text-2xl font-semibold">Heading 4</h4>
<h5 className="text-lg lg:text-xl font-semibold">Heading 5</h5>
<h6 className="text-base lg:text-lg font-semibold">Heading 6</h6>
```

### Body Text

```tsx
<p className="text-base leading-7">Regular paragraph text</p>
<p className="text-sm text-gray-600">Small text</p>
<p className="text-xs text-gray-500">Extra small text</p>
```

---

## 📏 Spacing System

### Base Scale (4px)

```tsx
0:    0px
1:    0.25rem  (4px)
2:    0.5rem   (8px)
3:    0.75rem  (12px)
4:    1rem     (16px)
5:    1.25rem  (20px)
6:    1.5rem   (24px)
8:    2rem     (32px)
10:   2.5rem   (40px)
12:   3rem     (48px)
16:   4rem     (64px)
20:   5rem     (80px)
24:   6rem     (96px)
```

### Extended Spacing

```tsx
18:   4.5rem   (72px)
88:   22rem    (352px)
100:  25rem    (400px)
112:  28rem    (448px)
128:  32rem    (512px)
```

### Usage

```tsx
// Padding
<div className="p-4">Padding 16px</div>
<div className="px-6 py-4">Padding X: 24px, Y: 16px</div>

// Margin
<div className="m-4">Margin 16px</div>
<div className="mt-8 mb-4">Margin Top: 32px, Bottom: 16px</div>

// Gap (Flexbox/Grid)
<div className="flex gap-4">Gap 16px</div>
<div className="grid gap-6">Gap 24px</div>
```

---

## 🔲 Border Radius

```tsx
rounded-sm:   calc(0.5rem - 4px)  (4px)
rounded:      0.25rem              (4px)
rounded-md:   calc(0.5rem - 2px)  (6px)
rounded-lg:   0.5rem               (8px)
rounded-xl:   calc(0.5rem + 4px)  (12px)
rounded-2xl:  calc(0.5rem + 8px)  (16px)
rounded-3xl:  calc(0.5rem + 12px) (20px)
rounded-full: 9999px
```

### Usage

```tsx
<div className="rounded-lg">Rounded corners</div>
<button className="rounded-md">Button</button>
<img className="rounded-full" />
```

---

## 🎭 Shadows

```tsx
shadow-sm:   0 1px 2px 0 rgb(0 0 0 / 0.05)
shadow:      0 1px 3px 0 rgb(0 0 0 / 0.1)
shadow-md:   0 4px 6px -1px rgb(0 0 0 / 0.1)
shadow-lg:   0 10px 15px -3px rgb(0 0 0 / 0.1)
shadow-xl:   0 20px 25px -5px rgb(0 0 0 / 0.1)
shadow-2xl:  0 25px 50px -12px rgb(0 0 0 / 0.25)
```

### Usage

```tsx
<div className="shadow-md">Card with shadow</div>
<div className="hover:shadow-lg transition-shadow">Hover effect</div>
```

---

## 🧩 Component Classes

### Cards

```tsx
// Basic card
<div className="card">
  <div className="card-header">
    <h3 className="card-title">Title</h3>
    <p className="card-description">Description</p>
  </div>
  <div>Content</div>
  <div className="card-footer">Footer</div>
</div>

// Hover effect
<div className="card hover:shadow-md transition-shadow">
  Content
</div>
```

### Badges

```tsx
<span className="badge badge-primary">Primary</span>
<span className="badge badge-success">Success</span>
<span className="badge badge-warning">Warning</span>
<span className="badge badge-danger">Danger</span>
<span className="badge badge-secondary">Secondary</span>
<span className="badge badge-info">Info</span>
<span className="badge badge-outline">Outline</span>
```

### Buttons

```tsx
// Variants
<button className="btn btn-primary">Primary</button>
<button className="btn btn-secondary">Secondary</button>
<button className="btn btn-success">Success</button>
<button className="btn btn-danger">Danger</button>
<button className="btn btn-outline">Outline</button>
<button className="btn btn-ghost">Ghost</button>

// Sizes
<button className="btn btn-primary btn-sm">Small</button>
<button className="btn btn-primary">Default</button>
<button className="btn btn-primary btn-lg">Large</button>

// Loading state
<button className="btn btn-primary btn-loading">Loading</button>
```

### Forms

```tsx
<div className="form-group">
  <label className="form-label">Label</label>
  <input type="text" className="form-input" />
  <p className="form-help">Help text</p>
  <p className="form-error">Error message</p>
</div>

// Select
<select className="form-select">
  <option>Option 1</option>
</select>

// Textarea
<textarea className="form-textarea"></textarea>

// Checkbox/Radio
<input type="checkbox" className="form-checkbox" />
<input type="radio" className="form-radio" />
```

### Tables

```tsx
<table className="table-auto">
  <thead>
    <tr>
      <th>Header</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Data</td>
    </tr>
  </tbody>
</table>

// Striped table
<table className="table-auto table-striped">
  ...
</table>
```

### Status Indicators

```tsx
<span className="status-dot status-dot-active"></span> Active
<span className="status-dot status-dot-inactive"></span> Inactive
<span className="status-dot status-dot-pending"></span> Pending
<span className="status-dot status-dot-error"></span> Error
<span className="status-dot status-dot-info"></span> Info
```

### Empty States

```tsx
<div className="empty-state">
  <svg className="empty-state-icon">...</svg>
  <h3 className="empty-state-title">No data found</h3>
  <p className="empty-state-description">Try adjusting your filters</p>
  <button className="btn btn-primary">Add New</button>
</div>
```

### Skeleton Loading

```tsx
<div className="skeleton-card">
  <div className="skeleton-avatar"></div>
  <div className="skeleton-text w-3/4 mb-2"></div>
  <div className="skeleton-text w-1/2"></div>
</div>
```

---

## 🎬 Animations

### Built-in Animations

```tsx
animate-spin        // Spinning
animate-ping        // Pinging
animate-pulse       // Pulsing
animate-bounce      // Bouncing
animate-spin-slow   // Slow spin
animate-pulse-slow  // Slow pulse
```

### Custom Animations

```tsx
animate-fade-in         // Fade in
animate-slide-in-right  // Slide from right
animate-slide-in-left   // Slide from left
animate-slide-in-up     // Slide from bottom
animate-scale-in        // Scale in
animate-shimmer         // Shimmer effect
```

### Usage

```tsx
<div className="animate-fade-in">Fades in</div>
<div className="animate-slide-in-up">Slides up</div>
```

---

## 📱 Responsive Design

### Breakpoints

```tsx
sm:  640px   // Small devices
md:  768px   // Medium devices
lg:  1024px  // Large devices
xl:  1280px  // Extra large devices
2xl: 1536px  // 2X large devices
```

### Usage

```tsx
// Mobile first
<div className="text-sm md:text-base lg:text-lg">
  Responsive text
</div>

// Grid
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  ...
</div>

// Visibility
<div className="mobile-only">Mobile only</div>
<div className="mobile-hidden">Hidden on mobile</div>
<div className="tablet-only">Tablet only</div>
<div className="desktop-only">Desktop only</div>
```

---

## 🎯 Utility Classes

### Gradients

```tsx
<div className="gradient-primary">Primary gradient</div>
<div className="gradient-secondary">Secondary gradient</div>
<div className="gradient-success">Success gradient</div>
```

### Glass Morphism

```tsx
<div className="glass">Glass effect (light)</div>
<div className="glass-dark">Glass effect (dark)</div>
```

### Text Truncation

```tsx
<p className="truncate">Single line truncate</p>
<p className="truncate-2">Two line truncate</p>
<p className="truncate-3">Three line truncate</p>
```

### Scrollbar

```tsx
<div className="hide-scrollbar">Hidden scrollbar</div>
<div className="smooth-scroll">Smooth scrolling</div>
```

---

## ♿ Accessibility

### Screen Reader Only

```tsx
<span className="sr-only">Screen reader only text</span>
```

### Focus Visible

```tsx
<button className="focus-visible">Accessible focus</button>
```

### Reduced Motion

Automatically respects user's motion preferences:

```css
@media (prefers-reduced-motion: reduce) {
  /* Animations disabled */
}
```

---

## 🖨️ Print Styles

```tsx
<div className="no-print">Hidden when printing</div>
```

---

## 💡 Best Practices

### 1. Use Semantic Colors

```tsx
// ✅ Good
<button className="btn btn-danger">Delete</button>

// ❌ Avoid
<button className="bg-red-500">Delete</button>
```

### 2. Consistent Spacing

```tsx
// ✅ Good - Uses spacing scale
<div className="p-4 mb-6">Content</div>

// ❌ Avoid - Arbitrary values
<div className="p-[17px] mb-[23px]">Content</div>
```

### 3. Responsive Design

```tsx
// ✅ Good - Mobile first
<div className="text-sm md:text-base lg:text-lg">

// ❌ Avoid - Desktop first
<div className="text-lg md:text-base sm:text-sm">
```

### 4. Dark Mode Support

```tsx
// ✅ Good - Supports both modes
<div className="bg-white dark:bg-gray-900">

// ❌ Avoid - Light mode only
<div className="bg-white">
```

### 5. Accessibility

```tsx
// ✅ Good - Accessible
<button className="btn btn-primary focus-visible" aria-label="Submit">
  Submit
</button>

// ❌ Avoid - Not accessible
<div onClick={handleClick}>Submit</div>
```

---

## 🔧 Customization

### Extending Colors

Edit `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      brand: {
        500: '#your-color',
      }
    }
  }
}
```

### Custom Components

Add to `globals.css`:

```css
@layer components {
  .my-component {
    @apply bg-white rounded-lg shadow-md p-4;
  }
}
```

---

## 📚 Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Tailwind UI Components](https://tailwindui.com)
- [Color Palette Generator](https://uicolors.app)
- [Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

---

## 🎉 Quick Reference

### Common Patterns

```tsx
// Card with hover effect
<div className="card hover:shadow-lg transition-all">

// Primary button with loading
<button className="btn btn-primary btn-loading">

// Form input with error
<input className="form-input border-red-500" />
<p className="form-error">Error message</p>

// Badge with status
<span className="badge badge-success">
  <span className="status-dot status-dot-active"></span>
  Active
</span>

// Responsive grid
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
```

---

**Made with Bob** 🤖

*Last Updated: 2026-05-27*