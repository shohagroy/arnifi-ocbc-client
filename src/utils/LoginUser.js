import { decodedToken } from "./jwt";
import { getFromLocalStorage } from "./local-storage";

export const loginUser = () => {
  const token = getFromLocalStorage("accessToken");
  const tokenInfo = token ? decodedToken(token) : {};

  return tokenInfo;
};
