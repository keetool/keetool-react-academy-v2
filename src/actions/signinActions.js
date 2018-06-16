import { signinApi } from "../apis/signinApis";
import history from "../helpers/history";
import { saveToken, saveRefreshToken } from "../helpers/auth";
import { httpSuccess, messageHttpRequestSignIn } from "../helpers/httpRequest";

export function signin(account, setState) {
  setState({ isLoading: true, messageError: null });
  signinApi(account)
    .then(res => {
      setState({ isLoading: false });
      if (httpSuccess(res.status)) {
        saveToken(res.data.access_token, res.data.expires_in);
        saveRefreshToken(res.data.refresh_token, res.data.expires_in);
        history.push("/");
      }
    })
    .catch(error => {
      const messageError = messageHttpRequestSignIn(error);
      setState({ isLoading: false, messageError });
    });
}
