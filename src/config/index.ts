import file from "./file";
import url from "./url";
import header from "./header";

interface IConfig {
  ethol: Record<string, any>;
  whatsapp: Record<string, any> & {
    enable: boolean;
  };
  path: typeof file;
  url: typeof url;
  header: typeof header;
}

const config: IConfig = {
  ethol: {},
  whatsapp: {
    enable: false,
  },
  path: file,
  url,
  header,
};

export const setConfig = (ethol: IEtholConfig, whatapp: any) => {
  config.ethol = ethol;
  config.whatsapp = whatapp;
};

export default config;
