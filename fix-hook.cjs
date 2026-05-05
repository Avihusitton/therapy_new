const fs = require('fs');
const content = [
  '#!/bin/sh',
  '',
  'branch=stage',
  'if [ "" = "main" ]; then',
  '  echo "אסור commit על main! עבור ל-stage"',
  '  exit 1',
  'fi',
  '',
  'if [ -t 1 ]; then',
  '  printf "קראת את ARCHITECTURE.md? (y/n): "',
  '  read answer </dev/tty',
  '  if [ "" != "y" ]; then',
  '    echo "Commit בוטל."',
  '    exit 1',
  '  fi',
  'fi',
  '',
  'npx lint-staged',
].join('\n');
fs.writeFileSync('.husky/pre-commit', content, 'utf8');
console.log('done');
