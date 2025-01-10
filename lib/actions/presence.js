const ValidateToken = require("../auth/validate-token");
const Config = require("../../config");
const GrabSemuaMataKuliah = require("./grab-semua-mata-kuliah");

const { SendPresence, CheckPresence, HistoryPresence } = require("./_presence");

module.exports = async () => {
  let token = await ValidateToken();

  // get ethol config
  let etholConfig = require(Config.path.ETHOL_CONF_PATH(Config.ethol.email));
  if (!etholConfig) {
    throw new Error(`Config Ethol for ${Config.ethol.email} not found`);
  }

  // set headers
  let headers = { token };

  let listMatkul = await GrabSemuaMataKuliah(
    etholConfig,
    headers,
  );

  let successfulPresences = [];
  for (let i = 0; i < listMatkul.length; i++) {
    let matkul = listMatkul[i];

    let presensi = await CheckPresence(matkul, headers);

    if (presensi.open) {
      let presenceHistories = await HistoryPresence(
        matkul,
        etholConfig,
        headers,
      );
      if (presenceHistories.length > 0) {
        let lastPresence = presenceHistories[0];
        if (lastPresence.key !== presensi.key) {
          let data = await SendPresence(
            presensi,
            matkul,
            etholConfig,
            headers,
          );
          successfulPresences.push(data);
        }
      }
    }
  }
  return successfulPresences;
};
