import { mkdirSync, writeFileSync } from "node:fs";
const LINE = "A queue is a human train where every carriage has to walk itself to the front.\nIt maps waiting your turn and shuffling forward step by step, but leaves out the tracks, the tickets, and the engine that does the pulling.";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
