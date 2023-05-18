import Axios from "axios";
const BaseURL = Axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

const token = localStorage.getItem("token");
if (token) {
    BaseURL.defaults.headers.common["Authorization"] = `${token}`;
}
BaseURL.defaults.headers.post["Content-Type"] = "application/json";
BaseURL.defaults.headers.common["ngrok-skip-browser-warning"] = "true";

export const registration = async (data) => {
    return BaseURL.post(`api/v1/user/register`,  data);
}
export const verify = async (data) => {
    return BaseURL.post(`api/v1/user/verify`,  data);
}
export const login = async (data) => {
    return BaseURL.post(`api/v1/user/login`,  data);
}
export const resendOtp = async (data) => {
    return BaseURL.post(`api/v1/user/resend`,  data);
}