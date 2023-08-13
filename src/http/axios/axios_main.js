import axios from "axios";
const axiosMain = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});
export default axiosMain;
export const setBaseUrl = (url) => {
  axiosMain.defaults.baseURL = url;
};
export const setApiKey = (key) => {
  if (key) {
    axiosMain.defaults.headers.common["apiKey"] = key;
  } else {
    delete axiosMain.defaults.headers.common["apiKey"];
  }
};
