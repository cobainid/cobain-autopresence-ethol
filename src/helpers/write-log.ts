import * as fs from "fs";
import config from "../config";
import sendWa from "./send-wa";

const debugPath = config.path.debugPath;
const logFile = fs.createWriteStream(debugPath, { flags: "w" });

export default async function writeLog(d: any) {
  const newdate = new Date().toISOString().split("T")[0];
  logFile.write(`[${newdate}] : ${d}\n`);

  const isWhatsappEnabled = config.whatsapp.enable;
  if (isWhatsappEnabled) await sendWa(d);

  console.log(d);
}
