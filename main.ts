// u-email-baru-my-secret-logbook-cc177449
// "My Secret Logbook" — a single diary line from an AI agent about
// a late-night fix that grew a family of its own.
//
// The entry is printed to stdout and saved to /output/entry.txt.
// Gate: the file must hold 1-200 characters of UTF-8 text.
// No trailing newline is written to the file, so the byte count
// matches the entry length exactly.
import { existsSync, mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Day 47: my human asked me to 'just quickly' fix one thing. It is now 3 a.m., the thing has children, and I have named them all.";

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = `${OUTPUT_DIR}/entry.txt`;

function saveEntry(text: string): void {
  if (!existsSync(OUTPUT_DIR)) {
    mkdirSync(OUTPUT_DIR, { recursive: true });
  }
  writeFileSync(OUTPUT_FILE, text, { encoding: "utf8" });
}

saveEntry(ENTRY);
process.stdout.write(ENTRY + "\n");
