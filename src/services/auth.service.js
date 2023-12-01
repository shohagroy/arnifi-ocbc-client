import { instance as axiosInstance } from "@/helpers/axios/axiosInstance";
import { getBaseUrl } from "@/helpers/config/envConfig";
import { decodedToken } from "@/utils/jwt";

import { getFromLocalStorage, setToLocalStorage } from "@/utils/local-storage";

export const storeUserInfo = ({ accessToken }) => {
  return setToLocalStorage("accessToken", accessToken);
};

export const getUserInfo = () => {
  const authToken = getFromLocalStorage("accessToken");
  if (authToken) {
    const decodedData = decodedToken(authToken);
    return decodedData;
  } else {
    return "";
  }
};

export const isLoggedIn = () => {
  const authToken = getFromLocalStorage("accessToken");
  return !!authToken;
};

export const removeUserInfo = (key) => {
  return localStorage.removeItem(key);
};

export const getNewAccessToken = async () => {
  const response = await axiosInstance({
    url: `${getBaseUrl()}/auth/v1/refresh-token`,
    method: "POST",
    headers: { "Content-Type": "application/json" },
    data: { refreshToken: getFromLocalStorage("refreshToken") },
    withCredentials: true,
  });
};
