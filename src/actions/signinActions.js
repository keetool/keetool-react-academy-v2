import { signinApi } from "../apis/signinApis";
import history from "../helpers/history";
import { saveToken } from "../helpers/auth";
import { setStorage } from "../helpers/utility";

export function signin(account, setState) {
  setState({ isLoading: true, error: false });
  signinApi(account)
    .then(res => {
      setState({ isLoading: false });
      if (res.data.token) {
        saveToken(res.data.token);
        setStorage("account", JSON.stringify(res.data.user));
        history.push("/");
      }
    })
    .catch(() => {
      setState({ isLoading: false, error: true });
    });
}
