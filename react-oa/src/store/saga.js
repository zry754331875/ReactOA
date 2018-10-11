import {
    all,
    fork
} from "redux-saga/effects";
import Login from "@page/login/saga";
import Main from "@page/Main/saga";

export default function* rootSaga() {
    yield all([fork(Login), fork(Main)])
}