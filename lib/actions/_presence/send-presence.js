const WriteLog = require("../../../helpers/write-log");
const Config = require("../../../config");
const { ErrorHelper } = require("../../../helpers");
const { ClientRequest } = require("../../../helpers");
module.exports = async (presence, subject, conf, headers) => {
  let data = {
    jenis_schema: presence.jenisSchema,
    key: presence.key,
    kuliah: subject.nomor,
    kuliah_asal: subject.kuliah_asal,
    mahasiswa: conf.user.nomor,
  };

  let options = {
    url: Config.url.URL_PRESENSI,
    method: "POST",
    headers,
    data,
  };

  // request with axios asynchronously
  try {
    let response = await ClientRequest(options);
    let text = `Presensi ${subject.matakuliah.nama} pada ${presence.tanggal_format} : ${response.data.pesan}`;
    WriteLog(text);
    return response.data;
  } catch (error) {
    ErrorHelper(error);
    return;
  }
};
