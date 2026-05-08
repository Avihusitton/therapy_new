#!/bin/bash
# [Category C: Deployment / Cloudflare]
# Simple build command for Cloudflare Pages
# This script runs the OpenNext build which is optimized for Cloudflare Workers.
# It solves the 500 Internal Server Error by using the correct wrappers and config.

echo "Starting OpenNext Cloudflare Build..."

# Run the OpenNext build command
npx @opennextjs/cloudflare build

# Check if the build succeeded
if [ -d ".open-next" ]; then
  echo "OpenNext build completed successfully. Ready for Cloudflare deployment."
else
  echo "Error: OpenNext build failed. Directory .open-next not found."
  exit 1
fi
