# Design System Implementation Guide

## 🎯 Overview

This guide explains how to implement and use the HR Management System design system in your application.

---

## 📦 Installation & Setup

### 1. Theme Provider Setup

Wrap your application with the `ThemeProvider` to enable dark mode support.

**File: `src/app/layout.tsx`**

```tsx
import { ThemeProvider } from '@/components/providers/ThemeProvider';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
```

### 2. Add Theme Toggle to Header

**File: `src/components/layout/Header.tsx`**

```tsx
import { ThemeToggle } from '@/components/ui/ThemeToggle';

export function Header() {
  return (
    <header className="flex items-center justify-between p-4">
      <h1>HR Management System</h1>
      <ThemeToggle />
    </header>
  );
}
```

### 3. Add Theme Selector to Settings

**File: `src/app/settings/page.tsx`**

```tsx
import { ThemeSelector } from '@/components/ui/ThemeToggle';

export default function SettingsPage() {
  return (
    <div className="card">
      <h2 className="card-title">Appearance</h2>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
        Customize how the application looks
      </p>
      <ThemeSelector />
    </div>
  );
}
```

---

## 🎨 Using Colors

### Primary Actions

```tsx
// Buttons
<button className="bg-primary-600 hover:bg-primary-700 text-white">
  Primary Action
</button>

// Links
<a className="text-primary-600 hover:text-primary-700">
  Learn More
</a>

// Backgrounds
<div className="bg-primary-50 dark:bg-primary-900">
  Highlighted content
</div>
```

### Status Colors

```tsx
// Success
<span className="badge badge-success">Approved</span>
<div className="bg-success-50 border-l-4 border-success-500 p-4">
  Success message
</div>

// Warning
<span className="badge badge-warning">Pending</span>
<div className="bg-warning-50 border-l-4 border-warning-500 p-4">
  Warning message
</div>

// Danger
<span className="badge badge-danger">Rejected</span>
<div className="bg-danger-50 border-l-4 border-danger-500 p-4">
  Error message
</div>

// Info
<span className="badge badge-info">New</span>
<div className="bg-info-50 border-l-4 border-info-500 p-4">
  Info message
</div>
```

### Dark Mode Support

```tsx
// Automatic dark mode support
<div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
  Content adapts to theme
</div>

// Borders
<div className="border border-gray-200 dark:border-gray-700">
  Border adapts to theme
</div>

// Text colors
<p className="text-gray-600 dark:text-gray-400">
  Secondary text
</p>
```

---

## 📝 Typography

### Headings

```tsx
<h1 className="text-4xl lg:text-5xl font-semibold mb-4">
  Main Heading
</h1>

<h2 className="text-3xl lg:text-4xl font-semibold mb-3">
  Section Heading
</h2>

<h3 className="text-2xl lg:text-3xl font-semibold mb-2">
  Subsection Heading
</h3>
```

### Body Text

```tsx
<p className="text-base leading-7 mb-4">
  Regular paragraph text with comfortable line height.
</p>

<p className="text-sm text-gray-600 dark:text-gray-400">
  Secondary information or helper text.
</p>

<p className="text-xs text-gray-500 dark:text-gray-500">
  Metadata or timestamps.
</p>
```

### Font Weights

```tsx
<span className="font-light">Light text</span>
<span className="font-normal">Normal text</span>
<span className="font-medium">Medium text</span>
<span className="font-semibold">Semibold text</span>
<span className="font-bold">Bold text</span>
```

---

## 🧩 Components

### Cards

```tsx
// Basic card
<div className="card">
  <div className="card-header">
    <h3 className="card-title">Card Title</h3>
    <p className="card-description">Card description</p>
  </div>
  <div>
    Card content goes here
  </div>
  <div className="card-footer">
    <button className="btn btn-primary">Action</button>
  </div>
</div>

// Hoverable card
<div className="card hover:shadow-lg transition-all cursor-pointer">
  Interactive card
</div>
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

// States
<button className="btn btn-primary" disabled>Disabled</button>
<button className="btn btn-primary btn-loading">Loading</button>
```

### Forms

```tsx
<form>
  <div className="form-group">
    <label className="form-label" htmlFor="name">
      Full Name
    </label>
    <input
      type="text"
      id="name"
      className="form-input"
      placeholder="Enter your name"
    />
    <p className="form-help">This will be displayed on your profile</p>
  </div>

  <div className="form-group">
    <label className="form-label" htmlFor="email">
      Email Address
    </label>
    <input
      type="email"
      id="email"
      className="form-input"
      placeholder="you@example.com"
    />
    <p className="form-error">Please enter a valid email</p>
  </div>

  <div className="form-group">
    <label className="form-label" htmlFor="bio">
      Bio
    </label>
    <textarea
      id="bio"
      className="form-textarea"
      placeholder="Tell us about yourself"
    />
  </div>

  <div className="form-group">
    <label className="form-label" htmlFor="country">
      Country
    </label>
    <select id="country" className="form-select">
      <option>United States</option>
      <option>Canada</option>
      <option>United Kingdom</option>
    </select>
  </div>

  <div className="form-group">
    <label className="flex items-center">
      <input type="checkbox" className="form-checkbox" />
      <span className="ml-2 text-sm">I agree to the terms</span>
    </label>
  </div>

  <button type="submit" className="btn btn-primary">
    Submit
  </button>
</form>
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

### Tables

```tsx
<table className="table-auto">
  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>John Doe</td>
      <td>john@example.com</td>
      <td>
        <span className="badge badge-success">Active</span>
      </td>
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
<div className="flex items-center">
  <span className="status-dot status-dot-active"></span>
  <span>Active</span>
</div>

<div className="flex items-center">
  <span className="status-dot status-dot-pending"></span>
  <span>Pending</span>
</div>

<div className="flex items-center">
  <span className="status-dot status-dot-error"></span>
  <span>Error</span>
</div>
```

### Empty States

```tsx
<div className="empty-state">
  <svg className="empty-state-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
  </svg>
  <h3 className="empty-state-title">No data found</h3>
  <p className="empty-state-description">
    Get started by creating your first item
  </p>
  <button className="btn btn-primary">Create New</button>
</div>
```

### Loading States

```tsx
// Skeleton loading
<div className="skeleton-card">
  <div className="flex items-center gap-4 mb-4">
    <div className="skeleton-avatar"></div>
    <div className="flex-1">
      <div className="skeleton-text w-3/4 mb-2"></div>
      <div className="skeleton-text w-1/2"></div>
    </div>
  </div>
  <div className="skeleton h-32"></div>
</div>

// Spinner
<div className="flex items-center justify-center p-8">
  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
</div>
```

---

## 📱 Responsive Design

### Using Responsive Hooks

```tsx
'use client';

import { useIsMobile, useIsTablet, useIsDesktop, useCurrentBreakpoint } from '@/lib/responsive';

export function ResponsiveComponent() {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  const isDesktop = useIsDesktop();
  const breakpoint = useCurrentBreakpoint();

  return (
    <div>
      {isMobile && <MobileView />}
      {isTablet && <TabletView />}
      {isDesktop && <DesktopView />}
      
      <p>Current breakpoint: {breakpoint}</p>
    </div>
  );
}
```

### Responsive Classes

```tsx
// Hide/Show based on screen size
<div className="mobile-only">Visible only on mobile</div>
<div className="mobile-hidden">Hidden on mobile</div>
<div className="tablet-only">Visible only on tablet</div>
<div className="desktop-only">Visible only on desktop</div>

// Responsive grid
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

// Responsive text
<h1 className="text-2xl md:text-3xl lg:text-4xl">
  Responsive heading
</h1>

// Responsive padding
<div className="p-4 md:p-6 lg:p-8">
  Responsive padding
</div>
```

---

## 🎬 Animations

### Built-in Animations

```tsx
// Fade in
<div className="animate-fade-in">Fades in on mount</div>

// Slide in
<div className="animate-slide-in-right">Slides from right</div>
<div className="animate-slide-in-left">Slides from left</div>
<div className="animate-slide-in-up">Slides from bottom</div>

// Scale in
<div className="animate-scale-in">Scales in</div>

// Spin
<div className="animate-spin">Spinning</div>
<div className="animate-spin-slow">Slow spinning</div>

// Pulse
<div className="animate-pulse">Pulsing</div>
<div className="animate-pulse-slow">Slow pulsing</div>
```

### Transition Classes

```tsx
// Smooth transitions
<button className="transition-colors hover:bg-primary-700">
  Color transition
</button>

<div className="transition-all hover:shadow-lg hover:scale-105">
  Multiple transitions
</div>

<div className="transition-transform hover:translate-x-2">
  Transform transition
</div>
```

---

## 🎨 Utility Classes

### Gradients

```tsx
<div className="gradient-primary text-white p-8">
  Primary gradient background
</div>

<div className="gradient-success text-white p-8">
  Success gradient background
</div>
```

### Glass Morphism

```tsx
<div className="glass p-6">
  Glass effect (light mode)
</div>

<div className="glass-dark p-6">
  Glass effect (dark mode)
</div>
```

### Text Utilities

```tsx
// Truncate
<p className="truncate">Single line truncate...</p>
<p className="truncate-2">Two line truncate...</p>
<p className="truncate-3">Three line truncate...</p>

// Text balance
<h1 className="text-balance">Balanced text wrapping</h1>
```

---

## ♿ Accessibility

### Focus States

```tsx
<button className="focus-visible">
  Accessible focus ring
</button>

<input className="form-input focus:ring-2 focus:ring-primary-500" />
```

### Screen Reader Only

```tsx
<span className="sr-only">
  This text is only visible to screen readers
</span>
```

### ARIA Labels

```tsx
<button aria-label="Close dialog">
  <svg>...</svg>
</button>

<input aria-describedby="email-help" />
<p id="email-help" className="form-help">
  We'll never share your email
</p>
```

---

## 🎯 Best Practices

### 1. Always Use Design System Classes

```tsx
// ✅ Good
<button className="btn btn-primary">Submit</button>

// ❌ Avoid
<button className="px-4 py-2 bg-blue-500 text-white rounded">Submit</button>
```

### 2. Support Dark Mode

```tsx
// ✅ Good
<div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">

// ❌ Avoid
<div className="bg-white text-gray-900">
```

### 3. Use Semantic Colors

```tsx
// ✅ Good
<span className="badge badge-success">Active</span>

// ❌ Avoid
<span className="bg-green-100 text-green-800 px-2 py-1 rounded">Active</span>
```

### 4. Mobile-First Responsive

```tsx
// ✅ Good
<div className="text-sm md:text-base lg:text-lg">

// ❌ Avoid
<div className="text-lg md:text-base sm:text-sm">
```

### 5. Consistent Spacing

```tsx
// ✅ Good
<div className="p-4 mb-6">

// ❌ Avoid
<div className="p-[17px] mb-[23px]">
```

---

## 📚 Examples

### Complete Form Example

```tsx
<div className="card">
  <div className="card-header">
    <h2 className="card-title">Create Employee</h2>
    <p className="card-description">Add a new employee to the system</p>
  </div>

  <form className="space-y-4">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="form-group">
        <label className="form-label" htmlFor="firstName">
          First Name
        </label>
        <input
          type="text"
          id="firstName"
          className="form-input"
          placeholder="John"
        />
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="lastName">
          Last Name
        </label>
        <input
          type="text"
          id="lastName"
          className="form-input"
          placeholder="Doe"
        />
      </div>
    </div>

    <div className="form-group">
      <label className="form-label" htmlFor="email">
        Email Address
      </label>
      <input
        type="email"
        id="email"
        className="form-input"
        placeholder="john.doe@example.com"
      />
    </div>

    <div className="form-group">
      <label className="form-label" htmlFor="department">
        Department
      </label>
      <select id="department" className="form-select">
        <option>Engineering</option>
        <option>Marketing</option>
        <option>Sales</option>
      </select>
    </div>

    <div className="card-footer flex justify-end gap-2">
      <button type="button" className="btn btn-secondary">
        Cancel
      </button>
      <button type="submit" className="btn btn-primary">
        Create Employee
      </button>
    </div>
  </form>
</div>
```

### Complete Dashboard Card Example

```tsx
<div className="card hover:shadow-lg transition-all">
  <div className="flex items-center justify-between mb-4">
    <div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
        Total Employees
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        Active workforce
      </p>
    </div>
    <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg">
      <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    </div>
  </div>

  <div className="flex items-baseline gap-2">
    <span className="text-3xl font-bold text-gray-900 dark:text-gray-100">
      1,234
    </span>
    <span className="badge badge-success">
      +12%
    </span>
  </div>

  <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
    <a href="/employees" className="text-sm text-primary-600 dark:text-primary-400 hover:underline">
      View all employees →
    </a>
  </div>
</div>
```

---

**Made with Bob** 🤖

*Last Updated: 2026-05-27*