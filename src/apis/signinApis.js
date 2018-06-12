import axios from "axios";
import { BASE_API_URL } from "../constants/env";

export function signinApi(account) {
  let url = BASE_API_URL + `v1/auth/signin`;
  return axios.post(url, {
    email: account.username,
    password: account.password
  });
}
