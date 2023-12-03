import { getNewAccessToken, removeUserInfo } from "@/services/auth.service";
import { getFromLocalStorage } from "@/utils/local-storage";
import axios from "axios";

const instance = axios.create();
instance.defaults.headers.post["Content-Type"] = "application/json";
instance.defaults.headers["Accept"] = "application/json";
instance.defaults.timeout = 60000;

// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    // Do something before the request is sent
    const accessToken = getFromLocalStorage("accessToken");
    if (accessToken) {
      config.headers.Authorization = accessToken;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  async function (response) {
    const responseObject = {
      data: response?.data,
      meta: response?.data?.meta || null,
    };
    return responseObject;
  },
  async function (error) {
    console.log(error);
    if (error?.response?.data?.message === "jwt expired") {
      removeUserInfo("accessToken");
      try {
        // console.log("Access token expired. Getting a new token...");
        const accessToken = await getNewAccessToken();
        // console.log("New access token received:", response);
        const config = error.config;
        config.headers.Authorization = accessToken;
        return axios(config);
      } catch (refreshError) {
        // console.error("Error while refreshing access token:", refreshError);
        return Promise.reject(refreshError);
      }
    } else {
      const responseObject = {
        statusCode: error?.response?.data?.statusCode || 500,
        message: error?.response?.data?.message || "Something went wrong",
        errorMessages: error?.response?.data?.message,
      };
      return responseObject;
    }
    return responseObject;
  }
);

export { instance };
