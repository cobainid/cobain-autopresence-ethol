declare global {
  interface ISubject {
    nomor: number;
    kuliah_asal: string;
    matakuliah: {
      nama: string;
    };
  }

  interface IEtholConfig {
    user: {
      nomor: number;
      nama: string;
    };
    config_aplikasi: {
      tahun_aktif: number;
      semester_aktif: number;
    };
  }

  interface IPresence {
    jenisSchema: number;
    key: string;
    tanggal_format: string;
  }
}

export {};
