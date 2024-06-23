import AxiosClient from "./axiosClient";

const API_ENDPOINT = "/departments/layout";

export const getInfor = (data) => {
  console.log(data);
  return AxiosClient.get(API_ENDPOINT, { params: data });
};
