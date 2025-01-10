const PrepareFormData = require("./prepare-form-data");
const Scrape = require("./scrape");
const Config = require("../../config");
const qs = require("querystring");
const { ErrorHelper } = require("../../helpers");
const { ClientRequest } = require("../../helpers");

module.exports = async () => {
  let html = await Scrape();
  let data = await PrepareFormData(html);

  // delete data.reset
  delete data.reset;
  data = qs.stringify(data);

  let headers = Config.headers;

  let options = {
    url: Config.url.URL_LOGIN,
    method: "POST",
    data,
    headers,
    withCredentials: true,
  };

  // request with axios asynchronously
  try {
    let response = await ClientRequest(options);
    let token = response.data.split("'token', '")[1].split("'")[0];
    return token;
  } catch (error) {
    ErrorHelper(error);
  }
};
