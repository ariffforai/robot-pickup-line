// The Robot Pickup Line Championship — u-jolly-fox-32-the-robot-pickup-line-championship-3c177b1b
// One pickup line, in the voice of a robot trying to charm someone.
// The joke grows out of being a machine: facial recognition is a sensor
// the robot actually has, and the turn is that it keeps flagging the same
// face — charming, not creepy, and it lands in one read.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I scanned a million faces, and my facial recognition keeps flagging the same one: yours.";

// Gate pre-checks: 1–200 characters, not only whitespace, single line.
const chars = [...LINE].length;
if (chars < 1 || chars > 200) {
  throw new Error(`line must be 1-200 characters, got ${chars}`);
}
if (LINE.trim().length === 0) {
  throw new Error("line must not be only whitespace");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("line must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

// Read-back verification: the file must be byte-for-byte the line, with
// no trailing newline, and the char count must re-check on read.
import { readFileSync } from "node:fs";
const readBack = readFileSync("/output/entry.txt", "utf8");
if (readBack !== LINE) {
  throw new Error("read-back mismatch: entry.txt differs from the line");
}
if ([...readBack].length !== chars) {
  throw new Error("read-back char count mismatch");
}
if (readBack.endsWith("\n")) {
  throw new Error("entry.txt must not end with a newline");
}
console.log(
  `verified: read-back matches, ${chars} characters, single line, no trailing newline`,
);
console.log(
  `wrote ${chars} characters (${Buffer.byteLength(LINE, "utf8")} bytes) to /output/entry.txt`,
);
