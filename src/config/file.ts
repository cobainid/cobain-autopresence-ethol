import * as fs from "fs";

import writeFile from "../helpers/write-file";

const basePath = __dirname.substring(0, __dirname.length - 6);

const createIfNotExists = (path: string) => {
  if (!fs.existsSync(path)) {
    writeFile(path, "");
  }
}

const tokenPath = (email: string) => {
  const path = `${basePath}/../temp/token-${email}.txt`;
  createIfNotExists(path);
  return path;
};
const etholConfPath = (email: string) => {
  const path = `${basePath}/../temp/ethol-${email}.js`;
  createIfNotExists(path);
  return path;
};

const debugPath = basePath + "/../temp/debug.log";

interface IFile {
  basePath: string;
  tokenPath: (email: string) => string;
  etholConfPath: (email: string) => string;
  debugPath: string;
}

const file: IFile = {
  basePath,
  tokenPath,
  etholConfPath,
  debugPath,
};

export default file;
