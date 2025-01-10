import config from "@/config";
import clientRequest from "./client-request";


const url = config.whatsapp.url;
const options: any = {
  method: "post",
  url,
  headers: {
    "Content-Type": "application/json",
  },
  data: null,
};

export default async function sendWa(text: string) {
  const phone = config.whatsapp.phone;
  try {
    options.data = JSON.stringify({
      target: `${phone}@s.whatsapp.net`,
      args: { text },
    });

    let response = await clientRequest(options);
    console.log(response.data);
  } catch (error) {
    return;
  }
}
