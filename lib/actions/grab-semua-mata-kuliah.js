const Config = require("../../config");
const { ErrorHelper } = require("../../helpers");
const { ClientRequest } = require("../../helpers");

module.exports = async (etholConfig, headers) => {
  let url = Config.url.URL_LIST_MATAKULIAH;
  const tahunAktif = etholConfig.config_aplikasi?.tahun_aktif;
  const semesterAktif = etholConfig.config_aplikasi?.semester_aktif;

  if (!semesterAktif || !semesterAktif) {
    throw new Error(
      "Tahun Aktif dan Semester Aktif belum diatur di Ethol Config"
    );
  }

  // replace the placeholders in the url with the actual values
  const replacement = {
    "{tahun_aktif}": tahunAktif,
    "{semester_aktif}": semesterAktif,
  };

  Object.entries(replacement).map((value) => {
    url = url.replace(value[0], value[1]);
  });

  let options = {
    url: url,
    method: "GET",
    headers,
    withCredentials: true,
  };

  // request with axios asynchronously
  try {
    let response = await ClientRequest(options);
    return response.data;
  } catch (error) {
    ErrorHelper(error);
    return;
  }
};
