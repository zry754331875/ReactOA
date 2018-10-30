import {
    put,
    call,
    takeEvery,
    select
} from "redux-saga/effects";
import * as WORK_TYPES from "./contants";
import {
    postFetch
} from "@utils/fetch";
import {
    createAction
} from "redux-actions";

export default function* rootSaga() {
    yield takeEvery(WORK_TYPES.FETCH_HOME_LIST_START, getHomeList)
}

function* getHomeList(action) {
    
}