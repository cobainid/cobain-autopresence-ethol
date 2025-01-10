import Act from "./act";
import checkToken from "./check-token";
import prepareFormData from "./prepare-form-data";
import scrape from "./scrape";
import validateToken from "./validate-token";

export {
  prepareFormData,
  scrape,
  validateToken,
  Act,
  checkToken
}

const Auth = {
  prepareFormData,
  scrape,
  validateToken,
  Act,
  checkToken
};

export default Auth;