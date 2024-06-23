import axios from "axios";
import { stringify, parse } from "qs";
import { getToken } from "../utils/localStorage";

// const API_ENDPOINT = "http://192.168.100.119:3030/";
const API_ENDPOINT = "http://localhost:3030/";

const AxiosClient = axios.create({
  baseURL: API_ENDPOINT,
  responseType: "json",
  timeout: 50000,
  paramsSerializer: {
    encode: parse,
    serialize: stringify,
  },
});

AxiosClient.interceptors.request.use(
  async (config) => {
    const newConfig = config;
    const token = getToken();
    if (token) {
      newConfig.headers.Authorization = `Bearer ${token}`;
    }

    return newConfig;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default AxiosClient;
