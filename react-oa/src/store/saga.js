import {
    all,
    fork
} from "redux-saga/effects";
import Login from "@page/login/saga";
import Main from "@page/Main/saga";
import Work from "@page/Work/saga";

export default function* rootSaga() {
    yield all([fork(Login), fork(Main),fork(Work)])
}