import config from "@/config";
import { clientRequest, errorHelper } from "@/helpers";

const scrape = async () => {
  const options = {
    url: config.url.urlLogin,
    method: "GET",
    withCredentials: true,
  };

  // request with axios asynchronously
  try {
    const response = await clientRequest(options);
    return response.data;
  } catch (error) {
    errorHelper(error);
    return;
  }
};

export default scrape;
