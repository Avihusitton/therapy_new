#!/bin/bash
set -e
echo "DEBUG: Starting custom build script (build-cf.sh)"

# 1. Run the standard Next.js build
echo "DEBUG: Running 'next build'..."
npx next build

# 2. Run the OpenNext build, skipping the Next.js step to avoid recursion
echo "DEBUG: Running 'opennextjs-cloudflare build --skipNextBuild'..."
npx @opennextjs/cloudflare build --skipNextBuild

echo "DEBUG: Build script finished successfully!"
