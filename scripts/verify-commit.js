import fs from 'fs';
import path from 'path';

const files = process.argv.slice(2);
let hasError = false;

console.log('🛡️  Running AI safety checks on committed files...');

for (const file of files) {
  // Only check JS/TS source files
  if (!/\.(js|jsx|ts|tsx)$/.test(file)) continue;
  
  // Skip tests and config files
  if (file.includes('.config.') || file.includes('jest') || file.includes('test')) continue;

  const content = fs.readFileSync(file, 'utf8');
  const filename = path.basename(file);

  // 1. Check for SSR violations (Browser APIs without guards)
  const browserApiRegex = /\b(window\.|document\.|localStorage\.|AudioContext\b)/;
  if (browserApiRegex.test(content)) {
    // Allow if they have an SSR guard anywhere in the file (basic check)
    // Looking for: typeof window === 'undefined' or typeof window !== 'undefined'
    const hasGuard = /typeof window\s*(===|!==|==|!=)\s*['"`]undefined['"`]/.test(content);
    
    if (!hasGuard) {
      console.error(`\n❌ [SSR Guard Missing] in ${filename}:`);
      console.error(`   Found usage of browser API (window, document, etc.) but no SSR guard was detected.`);
      console.error(`   Fix: Add "if (typeof window === 'undefined') return;" before using browser APIs.`);
      hasError = true;
    }
  }

  // 2. Check for AI Placeholders / Secrets leakage
  const placeholderRegex = new RegExp('YOUR_' + 'API_KEY|sk-' + 'test-[a-zA-Z0-9]+', 'i');
  if (placeholderRegex.test(content)) {
    console.error(`\n❌ [AI Placeholder Leak] in ${filename}:`);
    console.error(`   Found dummy AI placeholder like [API KEY HIDDEN] or [SK-TEST HIDDEN]`);
    console.error(`   Fix: Remove placeholder text before committing.`);
    hasError = true;
  }
}

if (hasError) {
  console.error(`\n🚫 Commit blocked! Please fix the errors above and try committing again.\n`);
  process.exit(1);
} else {
  console.log('✅ Safety checks passed.');
}
