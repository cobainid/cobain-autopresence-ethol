const Config = require("../../../config");
const { ClientRequest } = require("../../../helpers");
module.exports = async (subject, etholConfig, headers) => {
  // cek riwayat presensi
  let url = Config.url.URL_RIWAYAT_PRESENSI;
  url = url
    .replace("{nomor_matkul}", subject.nomor)
    .replace("{nomor_mahasiswa}", etholConfig.user.nomor);

  let result = await ClientRequest({
    url,
    headers,
  });

  return result.data;
};
