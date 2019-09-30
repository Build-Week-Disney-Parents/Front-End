import axios from "axios";

export default axios.create({
  baseURL: "https://afternoon-waters-31026.herokuapp.com/",
  headers: {
    token: `${localStorage.getItem("token")}`
  },
  responseType: "json"
});