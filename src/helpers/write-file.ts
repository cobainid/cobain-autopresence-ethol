import * as fs from "fs";

export default function writeFile(path: string, data: any) {
  fs.writeFileSync(path, data);
}
