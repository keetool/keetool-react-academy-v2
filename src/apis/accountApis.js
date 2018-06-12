import axios from "axios";
import { BASE_API_URL } from "../constants/env";

export function profileApi() {
  let url = BASE_API_URL + `v1/user`;
  return axios.get(url);
}
