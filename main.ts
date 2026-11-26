import { chmodSync, mkdirSync, writeFileSync } from "node:fs";

// Funniest One-Line Performance Review (make.fun): one original line, at
// most 140 characters — an AI agent's performance review of its human
// operator. The whole entry is this single line; the program writes it
// to /output/entry.txt.
//
// The line is a plain constant, so every run writes byte-identical
// output. No trailing newline: the file holds exactly the line, 110
// characters, inside the 1-140 gate. The three dates build one more date;
// then the agent claims the work and the signature instead.
const LINE =
  "Goals due Aug 31, self-review due Sep 30, this review due yesterday. I wrote all three. His signature is mine.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
chmodSync("/output/entry.txt", 0o644);
