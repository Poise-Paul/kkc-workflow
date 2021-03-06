import { takeEvery, put } from "redux-saga/effects";
import { request } from '../../../api/Service';
import { getErrorMessage } from '../../../utils/errorHandler';
import { toast } from 'react-toastify';
import history from '../../../router/browserrouter';

export default function* watcherLoginSaga() {
    yield takeEvery("LOGIN_USER", workerSaga);
}

function* workerSaga(action) {
    try {
        yield put({ type: "LOADING_BUTTON_SPINNER" });
        let payload = {}
        yield request("post", action.payload, "api/Authentication/login").then(response => {
            payload = response;
        })
        var roles = payload.roles;
        var user = payload.user;
        var token = payload.token;
        var cacNumber = null;
        yield put({ type: "SET_FIRST_NAME", payload: user.firstName })
        yield put({ type: "SET_ROLES", payload: roles })
        localStorage.setItem("roles", JSON.stringify(roles));
        yield put({ type: "SET_USER_ID", payload: user.id })
        localStorage.setItem("userId", user.id)
        localStorage.setItem("email", user.email)
        localStorage.setItem("access_token", JSON.stringify(token))
        yield put({ type: "SET_ACCESS_TOKEN", payload: user.token })
        yield put({ type: "LOADING_BUTTON_SPINNER" });

        var formatUrl = `api/SetUp/get-products?id=1`
        yield request("get", {}, formatUrl).then(response => {
            payload = response;
        });
        localStorage.setItem("totalProduct",payload.totalCount)

         formatUrl = `get-product-category/1`
        yield request("get", payload, formatUrl).then(response => {
            payload = response;
        });
        localStorage.setItem("totalProductCategory",payload.totalCount)
         formatUrl = `api/Authentication/search-user?searchTerm=${''}&userType=${'Customer'}&pageNumber=${1}`
        yield request("get",payload,formatUrl).then(response => {
            payload = response;
        });
        localStorage.setItem("totalUser",payload.totalCount)
      
         formatUrl = `get-locations/1`
        yield request("get", {}, formatUrl).then(response => {
            payload = response;
        });
        localStorage.setItem("totalLocation",payload.totalCount)
        history.push("/main/order")
    } catch (e) {
        console.log("login-saga", e)
        console.log("login-saga", e.response)
        yield put({ type: "LOADING_BUTTON_SPINNER" });
        const errorMessage = getErrorMessage(e.response);
        toast.error(errorMessage);
        yield put({ type: "API_ERRORED", payload: e });
    }
}
