import config from "@/config";
import { clientRequest, errorHelper } from "@/helpers";
import qs from "querystring";
import prepareFormData from "./prepare-form-data";
import scrape from "./scrape";

const Act = async () => {
  const html = await scrape();
  const data = await prepareFormData(html);

  // delete data.reset
  delete data.reset;

  const headers = config.header;

  const options = {
    url: config.url.urlLogin,
    method: "POST",
    data: qs.stringify(data),
    headers,
    withCredentials: true,
  };

  // request with axios asynchronously
  try {
    const response = await clientRequest(options);
    return response.data.split("'token', '")[1].split("'")[0]; // token
  } catch (error) {
    errorHelper(error);
  }
};


export default Act;