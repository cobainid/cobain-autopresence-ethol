// const WriteLog = require("../../../helpers/write-log");
// const Config = require("../../../config");
// const { ErrorHelper } = require("../../../helpers");
// const { ClientRequest } = require("../../../helpers");

import config from "@/config";
import helper from "@/helpers";

const sendPresence = async (
  presence: IPresence,
  subject: ISubject,
  conf: IEtholConfig,
  headers: any
) => {
  const data = {
    jenis_schema: presence.jenisSchema,
    key: presence.key,
    kuliah: subject.nomor,
    kuliah_asal: subject.kuliah_asal,
    mahasiswa: conf.user.nomor,
  };

  const options = {
    url: config.url.urlPresence,
    method: "POST",
    headers,
    data,
  };

  // request with axios asynchronously
  try {
    const response = await helper.clientRequest(options);
    const text = `Presensi ${subject.matakuliah.nama} pada ${presence.tanggal_format} : ${response.data.pesan}`;
    helper.writeLog(text);
    return response.data;
  } catch (error) {
    helper.errorHelper(error);
    return;
  }
};

export default sendPresence;
