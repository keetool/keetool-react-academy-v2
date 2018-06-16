import { profileApi } from "../apis/accountApis";
import { httpSuccess, messageHttpRequest } from "../helpers/httpRequest";

export function getAccount(setState) {
  setState({ account: { isLoading: false } });
  profileApi()
    .then(res => {
      if (httpSuccess(res.status)) {
        setState({ account: { isLoading: false, ...res.data.data } });
      } else {
        setState({ account: { isLoading: false } });
      }
    })
    .catch((error) => {
      messageHttpRequest(error);
      setState({ account: { isLoading: false } });
    });
}
