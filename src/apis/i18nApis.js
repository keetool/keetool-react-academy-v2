import axios from "axios";
import { DOMAIN_API_URL } from "../constants/env";

export function i18nApi(lang = "", version = "") {
  let url = DOMAIN_API_URL + `v1/language`;
  return axios.get(url, {
    params: {
      encode: lang,
      version: version ? version : ""
    }
  });
}
