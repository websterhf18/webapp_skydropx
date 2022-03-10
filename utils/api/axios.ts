import axios from "axios";
import { BASE_URL, API_KEY } from "../constants";

const defaultSkyDropxAPIConn = axios.create({
  baseURL: BASE_URL,
  withCredentials: false,
  timeout: 3 * 60 * 1000, // 3 mins
  headers: {
    "Content-Type": "application/json",
    Authorization: "Token token=" + API_KEY,
    Accept: "application/json",
  },
});

export default defaultSkyDropxAPIConn;
