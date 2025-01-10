import config from "@/config";
import { validateToken } from "../auth";
import { checkPresence, historyPresence, sendPresence } from "./_presence";
import grebSubjects from "./grab-semua-mata-kuliah";

const actionPresence = async () => {
  const token = await validateToken();

  // get ethol config
  const etholConfig: IEtholConfig = require(
    config.path.etholConfPath(config.ethol.email)
  );
  if (!etholConfig) {
    throw new Error(`Config Ethol for ${config.ethol.email} not found`);
  }

  // set headers
  const headers = { token };
  const listMatkul = await grebSubjects(etholConfig, headers);
  const successfulPresences = [];

  for (let i = 0; i < listMatkul.length; i++) {
    const matkul = listMatkul[i];
    const presensi = await checkPresence(matkul, headers);

    if (presensi.open) {
      const presenceHistories = await historyPresence(
        matkul,
        etholConfig,
        headers
      );

      if (presenceHistories.length > 0) {
        const lastPresence = presenceHistories[0];
        if (lastPresence.key !== presensi.key) {
          const data = await sendPresence(
            presensi,
            matkul,
            etholConfig,
            headers
          );
          successfulPresences.push(data);
        }
      }
    }
  }
  return successfulPresences;
};

export default actionPresence;
