import AxiosClient from "./axiosClient";

const API_ENDPOINT = "image/";

export const getImageCons = (data) => {
    return AxiosClient.get(API_ENDPOINT + `constructions/${data.imageName}`)
}

export const getLogo = (data) => {
    return AxiosClient.get(API_ENDPOINT + `logos/${data.imageName}`)
}