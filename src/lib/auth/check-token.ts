import config from "@/config";
import { clientRequest, errorHelper } from "@/helpers";

const checkToken = async (token: string) => {
  const headers = { token };

  const options = {
    url: config.url.urlCheckNotification,
    method: "GET",
    headers,
    withCredentials: true,
  };

  // request with axios asynchronously
  try {
    const response = await clientRequest(options);
    const data = response.data ?? {};
    if (Object.hasOwn(data, "jumlah")) return true;
    return false;
  } catch (error) {
    errorHelper(error);
    return;
  }
};

export default checkToken;
