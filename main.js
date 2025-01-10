"use strict";

require("module-alias/register");

const Config = require("@/config/index.js");

const { Presence } = require("./lib/actions");
const confs = require(Config.path.BASE_PATH + "./credentials.js");

const main = async () => {
  for (let configIndex = 0; configIndex < confs.length; configIndex++) {
    let config = confs[configIndex];
    Config.ethol = config.ethol;
    Config.whatsapp = config.whatsapp;

    try {
      let success_presence = await Presence();
      console.log(
        `Success presence in config ${Config.ethol.email}:`,
        success_presence,
      );
    } catch (error) {
      console.error(`Error in config ${Config.ethol.email}:`, error.message);
    }
  }
};

main();
