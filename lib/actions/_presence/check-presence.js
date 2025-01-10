const Config = require("../../../config");
const { ClientRequest } = require("../../../helpers");
module.exports = async (subject, headers) => {
  // cek presensi terakhir
  let urlLastPresence = Config.url.URL_PRESENSI_TERAKHIR;
  urlLastPresence = urlLastPresence.replace("{matkul}", subject.nomor);

  let responseValidatePresence = await ClientRequest({
    url: urlLastPresence,
    headers,
  });

  return responseValidatePresence.data;
};
