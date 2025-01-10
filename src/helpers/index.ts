import clientRequest from "./client-request";
import errorHelper from "./error-helper";
import readFile from "./read-file";
import sendWa from "./send-wa";
import writeFile from "./write-file";
import writeLog from "./write-log";

export { clientRequest, errorHelper, readFile, sendWa, writeFile, writeLog };
const helpers = {
  clientRequest,
  readFile,
  sendWa,
  writeFile,
  writeLog,
  errorHelper,
};

export default helpers;
