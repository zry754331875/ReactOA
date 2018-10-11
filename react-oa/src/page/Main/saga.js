import {
    put,
    call,
    takeEvery,
    select
} from "redux-saga/effects";
import * as MAIN_TYPES from "./contants";
import {
    createAction
} from "redux-actions";

export default function *saga(){
    yield takeEvery('*',click)
}

function *click(action){

    const state = yield select()
    console.log(state)
    console.log(action)
}

