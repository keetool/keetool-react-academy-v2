import { getLogsApi } from "../apis/logApis";
import { httpSuccess, messageHttpRequest } from "../helpers/httpRequest";
import { formatPagination } from "../helpers/utility";

export function getLogs(setState, params = {}) {
  setState({ isLoading: true });
  getLogsApi(params)
    .then(res => {
      if (httpSuccess(res.status)) {
        setState({
          isLoading: false,
          data: res.data.data,
          pagination: formatPagination(res.data.meta)
        });
      } else {
        setState({ isLoading: false });
      }
    })
    .catch(error => {
      messageHttpRequest(error);
      setState({ isLoading: false });
    });
}
