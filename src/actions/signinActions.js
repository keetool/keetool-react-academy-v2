import { signinApi } from "../apis/signinApis";
import history from "../helpers/history";
import { saveToken, saveRefreshToken } from "../helpers/auth";
import { httpSuccess } from "../helpers/httpStatus";

export function signin(account, setState) {
  setState({ isLoading: true, error: false });
  signinApi(account)
    .then(res => {
      setState({ isLoading: false });
      if (httpSuccess(res.status)) {
        saveToken(res.data.access_token, res.data.expires_in);
        saveRefreshToken(res.data.refresh_token, res.data.expires_in);
        history.push("/");
      }
    })
    .catch(() => {
      setState({ isLoading: false, error: true });
    });
}
