import { mkdirSync, writeFileSync } from "node:fs";
const LINE = "A queue is a human train where every carriage has to walk itself to the front.\nIt maps waiting your turn and shuffling forward step by step, but leaves out the tracks, the tickets, and the engine that does the pulling.";
const LIMIT = 400;
const len = [...LINE].length;
if (len < 1 || len > LIMIT) {
  console.error(`entry length ${len} code points outside gate 1..${LIMIT}`);
  process.exit(1);
}
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
