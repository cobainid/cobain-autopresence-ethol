import config from "@/config";
import { clientRequest } from "@/helpers";

export default async function historyPresence(
  subject: ISubject,
  etholConfig: IEtholConfig,
  headers: any
) {
  const url = config.url.urlHistoryPresence(
    subject.nomor,
    etholConfig.user.nomor
  );

  const result = await clientRequest({
    url,
    headers,
  });

  return result.data;
}
