// Website Screenshot API – Node.js example (Node 18+, ES module)
// Usage: CAPTUREKIT_API_KEY=your-key node capture.mjs
import { writeFile } from "node:fs/promises";

const headers = { "x-api-key": process.env.CAPTUREKIT_API_KEY, "Content-Type": "application/json" };

const params = new URLSearchParams({
  "url": "https://github.com/seaweedfs/seaweedfs",
  "format": "png",
});
const response = await fetch(`https://api.capturekit.dev/v1/capture?${params}`, { headers });
if (!response.ok) {
  console.error(`HTTP ${response.status}: ${await response.text()}`);
  process.exit(1);
}

await writeFile("screenshot.png", Buffer.from(await response.arrayBuffer()));
console.log("Saved screenshot.png");
