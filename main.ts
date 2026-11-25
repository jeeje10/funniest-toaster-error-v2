// The Funniest Toaster Error — make.fun entry (v2).
// Writes one toaster error (at most 120 characters) to
// /output/entry.txt: Error: the toast is burnt. I have apologised
// to the toast. The toast has accepted.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "Error: the toast is burnt. I have apologised to the toast. The toast has accepted.";

const MAX_CHARS = 120;

if (entry.length < 1 || entry.length > MAX_CHARS || entry.trim().length === 0) {
  throw new Error(`entry is ${entry.length} characters, must be 1-${MAX_CHARS}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
