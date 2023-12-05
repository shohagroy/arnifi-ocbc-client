import axios from "axios";
import { getNewAccessToken, removeUserInfo } from "@/services/auth.service";
import { getFromLocalStorage } from "@/utils/local-storage";

const instance = axios.create({
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  timeout: 60000,
});

// Add a request interceptor
instance.interceptors.request.use(
  (config) => {
    // Do something before the request is sent
    const accessToken = getFromLocalStorage("accessToken");
    if (accessToken) {
      config.headers.Authorization = accessToken;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Add a response interceptor
instance.interceptors.response.use(
  async (response) => {
    const responseObject = {
      data: response?.data,
      meta: response?.data?.meta || null,
    };
    return responseObject;
  },
  async (error) => {
    // console.log(error);
    if (error?.response?.data?.message === "jwt expired") {
      removeUserInfo("accessToken");
      try {
        // Access token expired. Getting a new token...
        const accessToken = await getNewAccessToken();

        // Store the new token
        // Update Authorization header with the new token
        error.config.headers.Authorization = accessToken;
        // Retry the original request with the new token
        return axios(error.config);
      } catch (refreshError) {
        // Error while refreshing access token
        return Promise.reject(refreshError);
      }
    } else {
      // Handle other types of errors
      const responseObject = {
        statusCode: error?.response?.data?.statusCode || 500,
        message: error?.response?.data?.message || "Something went wrong",
        errorMessages: error?.response?.data?.message,
      };
      return Promise.reject(responseObject);
    }
  }
);

export { instance };
