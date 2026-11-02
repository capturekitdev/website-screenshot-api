#!/usr/bin/env bash
# Website Screenshot API – cURL example
# Usage: CAPTUREKIT_API_KEY=your-key bash capture.sh
set -euo pipefail

curl -sS --fail-with-body -G "https://api.capturekit.dev/v1/capture" \
  -H "x-api-key: ${CAPTUREKIT_API_KEY}" \
  --data-urlencode url=https://github.com/seaweedfs/seaweedfs \
  --data-urlencode format=png \
  -o screenshot.png

echo "Saved screenshot.png"
