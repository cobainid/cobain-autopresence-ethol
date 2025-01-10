const fs = require("fs");
const { CheckToken } = require(".");
const Config = require("../../config");
const { ReadFile, WriteFile } = require("../../helpers");
const UpdateTahunKuliah = require("../actions/update-tahun-kuliah");
const Act = require("./act");

const DoLogin = async () => {
  let token = await Act();
  if (!token) {
    throw new Error("Invalid token received from server");
  }
  WriteFile(Config.path.TOKEN_PATH(Config.ethol.email), token);
  await UpdateTahunKuliah(token);
  return token;
};

module.exports = async () => {
  let token = "";
  let filePath = Config.path.TOKEN_PATH(Config.ethol.email);
  if (!fs.existsSync(filePath)) {
    token = await DoLogin();
  } else {
    token = ReadFile(filePath);
    let is_token_valid = await CheckToken(token);

    if (!is_token_valid) {
      token = await DoLogin();
    }
  }
  return token;
};
