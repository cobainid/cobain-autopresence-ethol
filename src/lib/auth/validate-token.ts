import config from "@/config";
import { readFile, writeFile } from "@/helpers";
import * as fs from "fs";
import updateCollageYear from "../actions/update-tahun-kuliah";
import Act from "./act";
import checkToken from "./check-token";

const doLogin = async () => {
  let token = await Act();
  if (!token) {
    throw new Error("Invalid token received from server");
  }
  writeFile(config.path.tokenPath(config.ethol.email), token);
  await updateCollageYear(token);
  return token;
};

const validateToken = async () => {
  let token = "";
  const filePath = config.path.tokenPath(config.ethol.email);
  if (!fs.existsSync(filePath)) {
    token = await doLogin();
  } else {
    token = readFile(filePath);

    const isTokenValid = await checkToken(token);
    if (!isTokenValid) {
      token = await doLogin();
    }
  }
  return token;
};

export default validateToken;
