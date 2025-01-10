import sendWa from "./send-wa";
import config from "../config";

export default async function errorHelper(text: any) {
  if (config.whatsapp.enable) {
    await sendWa("ERROR: " + String(text));
  }
}
