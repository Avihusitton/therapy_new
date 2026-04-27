#!/bin/bash
# Simple build command for Cloudflare Pages to avoid dashboard configuration changes
# We switched to static export to eliminate the 500 Cold Start timeout!
npm run build

# If Cloudflare Pages is expecting the OpenNext output directory (e.g. .open-next/assets or .open-next/worker)
# We will create those directories and copy the static HTML files there to ensure it deploys successfully
# without needing to change the Cloudflare dashboard configuration.
mkdir -p .open-next/assets
cp -r out/* .open-next/assets/

# Also copy to .open-next/worker just in case the dashboard is pointed there
mkdir -p .open-next/worker
cp -r out/* .open-next/worker/

# If the dashboard is pointed to the default `out` directory, it's already there!
echo "Static build completed successfully. Ready for Cloudflare Pages deployment."
