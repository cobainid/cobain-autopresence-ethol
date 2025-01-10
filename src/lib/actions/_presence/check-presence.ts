import config from "@/config";
import clientRequest from "@/helpers/client-request";

export default async function checkPresence(subject: ISubject, headers: any) {
  // cek presensi terakhir
  const urlLastPresence = config.url.urlLastPresence(subject.nomor);
  const responseValidatePresence = await clientRequest({
    url: urlLastPresence,
    headers,
  });

  return responseValidatePresence.data;
}
