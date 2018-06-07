import history from "./history";
import { getStorage, removeStorage, setStorage } from "./utility";
import { PATH_REDIRECT_NO_AUTH, TOKEN_EXPIRED_TIME } from "../constants";

export function getToken() {
  const token = getStorage("token");
  if (token) {
    return token;
  }
  history.push(PATH_REDIRECT_NO_AUTH);
}

export function isLoggedIn() {
  const token = getStorage("token");
  if (token) {
    return true;
  }
  return false;
}

export function saveToken(token) {
  return setStorage("token", token, TOKEN_EXPIRED_TIME);
}

export function clearToken() {
  return removeStorage("token");
}

export function signout() {
  clearToken();
  removeStorage("account");
  history.push(PATH_REDIRECT_NO_AUTH);
}

export function getAccount() {
  let account = getStorage("account");
  if (account == undefined || account === null) {
    signout();
  }

  try {
    return JSON.parse(getStorage("account"));
  } catch (e) {
    signout();
    JSON.stringify(e);
  }

  return null;
}
