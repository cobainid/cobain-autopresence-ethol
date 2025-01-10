import config from "@/config";
import { clientRequest, errorHelper } from "@/helpers";

const grebSubjects = async (etholConfig: IEtholConfig, headers: any) => {
  const tahunAktif = etholConfig.config_aplikasi?.tahun_aktif;
  const semesterAktif = etholConfig.config_aplikasi?.semester_aktif;

  if (!semesterAktif || !semesterAktif) {
    throw new Error(
      "Tahun Aktif dan Semester Aktif belum diatur di Ethol Config"
    );
  }

  const url = config.url.urlListSubject(tahunAktif, semesterAktif);
  const options = {
    url: url,
    method: "GET",
    headers,
    withCredentials: true,
  };

  // request with axios asynchronously
  try {
    const response = await clientRequest(options);
    return response.data;
  } catch (error) {
    errorHelper(error);
    return;
  }
};

export default grebSubjects;
