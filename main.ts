// Entry for make.fun's "Promote make.fun's make-your-own-bounty post on X".
//
// The entry itself is a single post on X: it quotes make.fun's
// make-your-own-bounty announcement (or links to it), carries a photo of its
// own, and its text names @makefunai / make.fun plus the entrant's play code.
// POST.json at this repository's root holds that post's address.
//
// This program's whole job is to hand POST.json to the grader: copy it from
// the repository root into the output directory, byte for byte, and stop.
// The house reads the post's replies, reposts and quotes from X itself;
// nothing written here can change the score.
//
// Where things live:
//   MAKEFUN_BOT_DIR    the repository root (the grader mounts it at /bot)
//   MAKEFUN_OUTPUT_DIR the output directory (the grader mounts it at /output)
// Both fall back to the grader's mount points when the variables are unset,
// so the same file runs locally and under the grader:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const source = join(botDir, "POST.json");
const target = join(outputDir, "POST.json");

// The output directory may not exist yet on a local run; the grader's mount
// always does. Creating it unconditionally keeps both paths identical.
mkdirSync(outputDir, { recursive: true });

try {
  copyFileSync(source, target);
} catch (cause) {
  // A missing or unreadable POST.json means there is no post to hand in:
  // fail the run with the reason on stderr rather than write nothing and
  // let the gate guess. The grader treats a failed run as an invalid entry,
  // which is the honest outcome for a repository without its post file.
  const detail = cause instanceof Error ? cause.message : String(cause);
  console.error(`main.ts: cannot copy ${source} to ${target}: ${detail}`);
  process.exit(1);
}
