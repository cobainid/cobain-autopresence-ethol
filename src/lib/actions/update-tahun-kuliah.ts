import config from "@/config";
import { clientRequest, errorHelper, writeFile } from "@/helpers";

const updateCollageYear = async (token: string) => {
  if (clientRequest.defaults?.jar) {
    const jar = clientRequest.defaults.jar;
    jar?.setCookie(`token=${token}; Path=/; Secure;`, config.url.baseUrl);
  }

  const headers = {
    token,
    "Content-Type": "application/json",
    "User-Agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.64 Safari/537.36",
  };

  const options = {
    url: config.url.urlDashboard,
    method: "GET",
    headers,
    withCredentials: true,
  };

  // request with axios asynchronously
  try {
    let response = await clientRequest(options);
    response = response.data.split("a,state:")[1].split(",serverRendered")[0];
    const fileName = config.path.etholConfPath(config.ethol.email);
    writeFile(fileName, "var a, b, c, d;module.exports = " + response);
  } catch (error) {
    errorHelper(error);
    return;
  }
};

export default updateCollageYear;