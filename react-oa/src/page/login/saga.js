import {
    put,
    call,
    takeEvery,
} from "redux-saga/effects";
import * as LOGIN_TYPES from "./contants";
import {
    createAction
} from "redux-actions";
import md5 from "md5";
import {
    push
} from 'connected-react-router'
import {
    getFetch
} from "@utils/fetch";

function* login(action) {

    try {
        let {
            username,
            password
        } = action.payload

        let json = yield call(getFetch, '/ygoa/ydpt/loginYdpt.action', {
            userName: username,
            password: md5(password)
        })

        console.log(json)

        if (json.success == 0) {
            yield put(createAction(LOGIN_TYPES.LOGIN_SUCCESS)(json))
            yield put(push("/Main"))
        } else {

            yield put(createAction(LOGIN_TYPES.LOGIN_ERROR)({status:json.success,msg:json.msg}))
        }
    } catch (error) {
        yield put(createAction(LOGIN_TYPES.LOGIN_ERROR)({status:error.response.status,msg:'出现失败'}))
    }
}

export default function* rootSaga() {
    yield takeEvery(LOGIN_TYPES.LOGIN_START, login)
    yield takeEvery('*',(action)=>console.log(action))
}