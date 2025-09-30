import apiEndpoints from "./api.endpoints";
import axiosInstance from "./axios.instance";


export const SendOtp = async (data) => {
    return axiosInstance.post(apiEndpoints.sendOtp, data);
}

