import axios from "axios";
import { BASE_API_URL } from "../constants/env";

export function getLogsApi(params = {}) {
  let url = BASE_API_URL + `v1/log`;
  return axios.get(url, {
    params: {
      page: params.page ? params.page : 1,
      limit: 10,
      order: params.sortCreatedAt ? params.sortCreatedAt : ""
    }
  });
}
