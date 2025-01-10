const Config = require("../../config");
const { ErrorHelper } = require("../../helpers");
const WriteFile = require("../../helpers/write-file");
const { ClientRequest } = require("../../helpers");

module.exports = async (token) => {
  ClientRequest.defaults.jar.setCookie(
    "token=" + token + "; Path=/; Secure;",
    Config.url.BASE_URL,
  );
  let headers = {
    token: `${token}`,
    "Content-Type": "application/json",
    "User-Agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.64 Safari/537.36",
  };
  let options = {
    url: Config.url.URL_DASHBOARD,
    method: "GET",
    headers,
    withCredentials: true,
  };

  // request with axios asynchronously
  try {
    let response = await ClientRequest(options);
    response = response.data.split("a,state:")[1].split(",serverRendered")[0];
    // console.log(JSON.parse(JSON.stringify(response)));
    WriteFile(
      Config.path.ETHOL_CONF_PATH(Config.ethol.email),
      "var a, b, c, d;module.exports = " + response,
    );
    // return response.data;
  } catch (error) {
    ErrorHelper(error);
    return;
  }
};
