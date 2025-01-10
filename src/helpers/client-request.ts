import axios from "axios";
import { CookieJar } from "tough-cookie";
import { wrapper } from "axios-cookiejar-support";

const jar = new CookieJar();
const clientRequest = wrapper(axios.create({ jar }));

export default clientRequest;
