import {
    all,
    fork
} from "redux-saga/effects";
import Login from "../page/login/saga";

export default function* rootSaga() {
    yield all([fork(Login)])
}