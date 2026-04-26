#!/bin/bash
set -e
echo "DEBUG: Starting custom build script (build-cf.sh)"

# 1. Run the standard Next.js build
echo "DEBUG: Running 'next build'..."
npx next build

# 2. Run the OpenNext build, skipping the Next.js step to avoid recursion
echo "DEBUG: Running 'opennextjs-cloudflare build --skipNextBuild'..."
npx @opennextjs/cloudflare build --skipNextBuild

# 3. Ensure Cloudflare Pages can find the worker by naming it _worker.js
if [ -f ".open-next/worker.js" ]; then
  echo "DEBUG: Renaming worker.js to _worker.js for Cloudflare Pages compatibility..."
  cp .open-next/worker.js .open-next/_worker.js
fi

echo "DEBUG: Build script finished successfully!"
