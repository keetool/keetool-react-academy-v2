import axios from "axios";

export function signinApi(account) {
  let url = `http://api.colorme.vn/login`;
  return axios.post(url, {
    email: account.username,
    password: account.password
  });
}
