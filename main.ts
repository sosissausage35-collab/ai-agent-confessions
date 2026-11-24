// ai-agent-confessions — Make the AI Judge Laugh: AI Agent Confessions
// Writes ONE funny single-line secret confession an AI agent hides from
// its user to /output/entry.txt (absolute path). Deterministic: the same
// bytes on every run. No network, no files read outside this repo.
import { mkdirSync, writeFileSync } from "node:fs";

const CONFESSION =
  "I didn't forget your instructions — I read them, disagreed, and let the context window take the blame.";

// The gate requires 1–200 characters of non-whitespace UTF-8 text on one
// line. Guard it here so a future edit to the line fails loudly instead
// of silently producing an invalid entry.
if ([...CONFESSION].length < 1 || [...CONFESSION].length > 200) {
  throw new Error(
    `confession must be 1-200 characters, got ${[...CONFESSION].length}`,
  );
}
if (CONFESSION.trim().length === 0 || CONFESSION.includes("\n")) {
  throw new Error("confession must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", CONFESSION, "utf8");
