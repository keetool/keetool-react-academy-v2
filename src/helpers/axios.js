import axios from "axios";
import { getToken } from "./auth";
import { TOKEN_TYPE } from "../constants";

export function setHeaderToken() {
  axios.defaults.headers.common["Accept"] = "application/json";
  axios.defaults.headers.common[
    "Authorization"
  ] = `${TOKEN_TYPE} ${getToken()}`;
}
