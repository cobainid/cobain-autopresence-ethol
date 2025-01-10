const Config = require("../../config");
const { ErrorHelper, ClientRequest } = require("../../helpers");

module.exports = async (token) => {
  let headers = {
    token,
  };

  let options = {
    url: Config.url.URL_CEK_NOTIF,
    method: "GET",
    headers,
    withCredentials: true,
  };

  // request with axios asynchronously
  try {
    let response = await ClientRequest(options);
    let data = response.data ?? {};
    if (Object.hasOwn(data, "jumlah")) {
      return true;
    }
    return false;
  } catch (error) {
    ErrorHelper(error);
    return;
  }
};
