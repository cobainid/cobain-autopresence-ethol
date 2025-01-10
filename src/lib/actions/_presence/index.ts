import checkPresence from "./check-presence";
import historyPresence from "./history-presence";
import sendPresence from "./send-presence";

const HelperPresence = {
  sendPresence,
  historyPresence,
  checkPresence,
};
export { sendPresence, historyPresence, checkPresence };

export default HelperPresence;
