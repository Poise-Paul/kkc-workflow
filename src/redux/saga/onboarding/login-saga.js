import { takeEvery, put } from "redux-saga/effects";
import { request } from "../../../api/Service";
import { getErrorMessage } from "../../../utils/errorHandler";
import { toast } from "react-toastify";
import history from "../../../router/browserrouter";

export default function* watcherLoginSaga() {
  yield takeEvery("LOGIN_USER", workerSaga);
}

function* workerSaga(action) {
  try {
    yield put({ type: "LOADING_BUTTON_SPINNER" });
    let payload = {};

    yield request("post", action.payload, "api/user/login").then((response) => {
      payload = response;
    });
  
    localStorage.setItem("firstName", payload.firstName);
    localStorage.setItem("lastName", payload.lastName);
    localStorage.setItem("id", payload.id);
    localStorage.setItem("email", payload.email);
    localStorage.setItem("userType", payload.userType);
    localStorage.setItem("token", JSON.stringify(payload.token));
    yield put({ type: "LOADING_BUTTON_SPINNER" });
    toast.success("Welcome");
    history.push("/dashboard");
  } catch (e) {
    if (e?.response?.status == "403") {
      toast.error("Invalid Credentials");
      yield put({ type: "LOADING_BUTTON_SPINNER" });
    } else {
      console.log(e.response);
      console.log("login-saga", e);
      console.log("login-saga", e.response);
      yield put({ type: "LOADING_BUTTON_SPINNER" });
      const errorMessage = getErrorMessage(e.response);
      toast.error(errorMessage);
      yield put({ type: "API_ERRORED", payload: e });
    }
  }
}
