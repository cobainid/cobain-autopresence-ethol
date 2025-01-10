"use strict";

import config, { setConfig } from "./config";
import { actionPresence } from "./lib/actions";

require("module-alias/register");

// const { Presence } = require("./lib/actions");
const confs = require(config.path.basePath + "./credentials.js");

const main = async () => {
  for (let configIndex = 0; configIndex < confs.length; configIndex++) {
    const userConfig = confs[configIndex];
    setConfig(userConfig.ethol, userConfig.whatsapp);

    try {
      let successPresence = await actionPresence();
      console.log(
        `Success presence in config ${config.ethol.email}:`,
        successPresence
      );
    } catch (error: any) {
      console.error(`Error in config ${config.ethol.email}:`, error.message);
    }
  }
};

main();
