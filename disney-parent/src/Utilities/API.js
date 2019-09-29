import axios from "axios";

export default axios.create({
  baseURL: "https://18d1ad09.ngrok.io",
  headers: {
    token: `${localStorage.getItem("token")}`
  },
  responseType: "json"
});