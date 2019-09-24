import axios from "axios";

export default axios.create({
  baseURL: "https://95d42108.ngrok.io/",
  headers: {
    token: `${localStorage.getItem("token")}`
  },
  responseType: "json"
});