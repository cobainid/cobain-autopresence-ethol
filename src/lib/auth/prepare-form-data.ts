import config from "@/config";

const prepareFormData = async (data: string) => {
  if (!data) {
    throw new Error("Invalid to parse Form Login");
  }

  const credentials = config.ethol;
  const username = credentials.email;
  const password = credentials.password;

  const form = data.split("<form")[1].split("</form>")[0];
  const formData = form
    .split("<input")
    .map((item) => {
      // validate if item not contain attribute name
      if (item.split('name="').length > 1 && item.split('value="').length > 1) {
        const name = item.split('name="')[1].split('"')[0];
        const value = item.split('value="')[1].split('"')[0];
        return { name, value };
      }
    })
    .reduce((acc: any, curr: any) => {
      if (curr !== undefined && acc !== undefined) {
        acc[curr.name] = curr.value;
      }
      return acc;
    }, {});
  formData.username = username;
  formData.password = password;
  return formData;
};

export default prepareFormData;
