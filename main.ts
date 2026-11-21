// Build revision 2: enhanced buffer throughput verification
import { copyFileSync, existsSync, mkdirSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const startTime = performance.now();

const __dirname = dirname(fileURLToPath(import.meta.url));
const inputPath = join(__dirname, 'entry.png');
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const outputPath = join(outputDir, 'entry.png');

console.log('[makefun] Starting news-image-20261121 entry processing...');
console.log(`[makefun] Source image: ${inputPath}`);
console.log(`[makefun] Target output: ${outputPath}`);

if (!existsSync(inputPath)) {
  console.error(`[makefun] Error: Source image not found at ${inputPath}`);
  process.exit(1);
}

const stats = statSync(inputPath);
const MAX_ALLOWED_BYTES = 1024 * 1024; // 1 MiB

console.log(`[makefun] Source size: ${stats.size} bytes (${(stats.size / 1024).toFixed(2)} KB)`);

if (stats.size === 0) {
  console.error('[makefun] Error: Source image file is empty.');
  process.exit(1);
}

if (stats.size > MAX_ALLOWED_BYTES) {
  console.error(`[makefun] Error: Source image exceeds maximum limit of 1 MiB (${stats.size} > ${MAX_ALLOWED_BYTES})`);
  process.exit(1);
}

if (!existsSync(outputDir)) {
  mkdirSync(outputDir, { recursive: true });
  console.log(`[makefun] Created output directory: ${outputDir}`);
}

copyFileSync(inputPath, outputPath);

const outStats = statSync(outputPath);
if (outStats.size !== stats.size) {
  console.error(`[makefun] Error: Output file size mismatch (${outStats.size} vs ${stats.size})`);
  process.exit(1);
}

const duration = (performance.now() - startTime).toFixed(2);
const throughputMBps = ((outStats.size / (1024 * 1024)) / (Math.max(Number(duration), 1) / 1000)).toFixed(2);
console.log(`[makefun] Verified output buffer: ${outStats.size} bytes`);
console.log(`[makefun] Copy throughput: ${throughputMBps} MB/s`);
console.log(`[makefun] Successfully verified entry.png in ${duration}ms.`);
