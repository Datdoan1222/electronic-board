import AxiosClient from "./axiosClient";

const API_ENDPOINT = "auth/";

export const login = (data) => {
  return AxiosClient.post(API_ENDPOINT + "signin", data);
};

export const getAdmin = () => {
  return AxiosClient.get(API_ENDPOINT + "profile");
};
