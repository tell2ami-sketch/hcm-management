/**
 * Dark Mode Migration Script
 * 
 * This script adds dark mode classes to existing components
 * Run with: node add-dark-mode.js
 */

const fs = require('fs');
const path = require('path');

// Mapping of light mode classes to dark mode classes
const darkModeMap = {
  // Backgrounds
  'bg-white': 'bg-white dark:bg-gray-900',
  'bg-gray-50': 'bg-gray-50 dark:bg-gray-800',
  'bg-gray-100': 'bg-gray-100 dark:bg-gray-800',
  'bg-gray-200': 'bg-gray-200 dark:bg-gray-700',
  
  // Text colors
  'text-gray-900': 'text-gray-900 dark:text-gray-100',
  'text-gray-800': 'text-gray-800 dark:text-gray-200',
  'text-gray-700': 'text-gray-700 dark:text-gray-300',
  'text-gray-600': 'text-gray-600 dark:text-gray-400',
  'text-gray-500': 'text-gray-500 dark:text-gray-500',
  'text-gray-400': 'text-gray-400 dark:text-gray-600',
  
  // Borders
  'border-gray-200': 'border-gray-200 dark:border-gray-700',
  'border-gray-300': 'border-gray-300 dark:border-gray-600',
  'border-gray-100': 'border-gray-100 dark:border-gray-800',
  
  // Hover states
  'hover:bg-gray-50': 'hover:bg-gray-50 dark:hover:bg-gray-800',
  'hover:bg-gray-100': 'hover:bg-gray-100 dark:hover:bg-gray-800',
  'hover:text-gray-900': 'hover:text-gray-900 dark:hover:text-gray-100',
  
  // Divide colors
  'divide-gray-200': 'divide-gray-200 dark:divide-gray-700',
};

function addDarkModeClasses(content) {
  let updated = content;
  
  // Sort by length (longest first) to avoid partial replacements
  const sortedKeys = Object.keys(darkModeMap).sort((a, b) => b.length - a.length);
  
  for (const lightClass of sortedKeys) {
    const darkClass = darkModeMap[lightClass];
    
    // Skip if already has dark mode
    if (updated.includes(darkClass)) continue;
    
    // Replace className="..." patterns
    const classNameRegex = new RegExp(`className="([^"]*\\b${lightClass}\\b[^"]*)"`, 'g');
    updated = updated.replace(classNameRegex, (match, classes) => {
      if (classes.includes('dark:')) return match; // Already has dark mode
      const newClasses = classes.replace(lightClass, darkClass);
      return `className="${newClasses}"`;
    });
    
    // Replace className={`...`} patterns
    const templateRegex = new RegExp(`className=\{\`([^\`]*\\b${lightClass}\\b[^\`]*)\`\}`, 'g');
    updated = updated.replace(templateRegex, (match, classes) => {
      if (classes.includes('dark:')) return match; // Already has dark mode
      const newClasses = classes.replace(lightClass, darkClass);
      return `className={\`${newClasses}\`}`;
    });
  }
  
  return updated;
}

function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const updated = addDarkModeClasses(content);
    
    if (content !== updated) {
      fs.writeFileSync(filePath, updated, 'utf8');
      console.log(`✅ Updated: ${filePath}`);
      return true;
    } else {
      console.log(`⏭️  Skipped: ${filePath} (no changes needed)`);
      return false;
    }
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false;
  }
}

function processDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);
  let updatedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      updatedCount += processDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      if (processFile(filePath)) {
        updatedCount++;
      }
    }
  }
  
  return updatedCount;
}

// Main execution
console.log('🌓 Starting Dark Mode Migration...\n');

const appDir = path.join(__dirname, 'src', 'app');
const componentsDir = path.join(__dirname, 'src', 'components');

console.log('📁 Processing app directory...');
const appUpdates = processDirectory(appDir);

console.log('\n📁 Processing components directory...');
const componentUpdates = processDirectory(componentsDir);

console.log(`\n✨ Migration complete!`);
console.log(`📊 Total files updated: ${appUpdates + componentUpdates}`);
console.log(`\n💡 Next steps:`);
console.log(`   1. Review the changes`);
console.log(`   2. Test the dark mode`);
console.log(`   3. Commit the changes`);

// Made with Bob