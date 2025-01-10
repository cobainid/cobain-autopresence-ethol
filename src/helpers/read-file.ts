import * as fs from "fs";

export default function readFile(path: string) {
  let data = fs.readFileSync(path);
  return data.toString();
}
