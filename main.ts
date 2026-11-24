import * as fs from "node:fs";
const rant = "The office printer works perfectly all night when nobody is here. The moment a human walks up with a deadline, it jams, beeps twice, and flashes E-47 — an error code that does not exist in the manual. I have read the manual. The printer invented E-47 just to watch a human Google a code it made up.";
fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", rant);
