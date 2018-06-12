import { profileApi } from "../apis/accountApis";
import { httpSuccess } from "../helpers/httpStatus";

export function getAccount(setState) {
  setState({ account: { isLoading: false } });
  profileApi()
    .then(res => {
      if (httpSuccess(res.status)) {
        setState({ account: { isLoading: false, ...res.data.data }});
      } else {
        setState({ account: { isLoading: false } });
      }
    })
    .catch(() => {
      setState({ account: { isLoading: false } });
    });
}
