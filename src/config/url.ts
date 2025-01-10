const baseUrl = "https://ethol.pens.ac.id";
const urlBaseLogin = "https://login.pens.ac.id";
const urlLogin = `${urlBaseLogin}/cas/login?service=http%3A%2F%2Fethol.pens.ac.id%2Fcas%2F`;
const urlDashboard = `${baseUrl}/mahasiswa/beranda`;
const urlCheckNotification = `${baseUrl}/api/notifikasi/mahasiswa-belum-baca`;
const urlPresence = `${baseUrl}/api/presensi/mahasiswa`;

const urlHistoryPresence = (subjectNumber: number, studentNumber: number) => {
  let url = `${baseUrl}/api/presensi/riwayat?kuliah={nomor_matkul}&jenis_schema=4&nomor={nomor_mahasiswa}`;
  return url
    .replace("{nomor_matkul}", String(subjectNumber))
    .replace("{nomor_mahasiswa}", String(studentNumber));
};

const urlListSubject = (year: number, semester: number) => {
  let url = `${baseUrl}/api/kuliah?tahun={tahun_aktif}&semester={semester_aktif}`;
  return url
    .replace("{tahun_aktif}", String(year))
    .replace("{semester_aktif}", String(semester)); // Default semester 1;
};

const urlLastPresence = (subjectNumber: number) => {
  let url = `${baseUrl}/api/presensi/terakhir-kuliah?kuliah={matkul}&jenis_schema=4`;
  return url.replace("{matkul}", String(subjectNumber));
};

interface IUrl {
  baseUrl: string;
  urlDashboard: string;
  urlBaseLogin: string;
  urlLogin: string;
  urlCheckNotification: string;
  urlPresence: string;
  urlHistoryPresence: (subjectNumber: number, studentNumber: number) => string;
  urlListSubject: (year: number, semester: number) => string;
  urlLastPresence: (subjectNumber: number) => string;
}

const url: IUrl = {
  baseUrl,
  urlDashboard,
  urlBaseLogin,
  urlLogin,
  urlCheckNotification,
  urlPresence,
  urlHistoryPresence,
  urlListSubject,
  urlLastPresence,
};

export default url;
