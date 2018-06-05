import axios from "axios";
import { BASE_URL } from "../constants/env";

export function i18nApi(lang = "", version = "") {
  let url = BASE_URL + `api/v1/language`;
  url += `?encode=${lang}&version=${version ? version : ""}`;
  return axios.get(url);
}
