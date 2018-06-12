import history from "./history";
import { getStorage, removeStorage, setStorage } from "./utility";
import { PATH_REDIRECT_NO_AUTH, TOKEN_EXPIRED_TIME } from "../constants";

export function getToken() {
  const token = getStorage("access_token");
  if (token) {
    return token;
  }
  history.push(PATH_REDIRECT_NO_AUTH);
}

export function isLoggedIn() {
  const token = getStorage("access_token");
  if (token) {
    return true;
  }
  return false;
}

export function saveToken(token, expires_in = TOKEN_EXPIRED_TIME) {
  return setStorage("access_token", token, expires_in);
}

export function clearToken() {
  return removeStorage("access_token");
}

export function getRefreshToken() {
  const token = getStorage("refresh_token");
  if (token) {
    return token;
  }
  return null;
}

export function saveRefreshToken(token, expires_in = TOKEN_EXPIRED_TIME) {
  return setStorage("refresh_token", token, expires_in);
}

export function clearRefreshToken() {
  return removeStorage("refresh_token");
}

export function signout() {
  clearToken();
  clearRefreshToken();
  history.push(PATH_REDIRECT_NO_AUTH);
}
