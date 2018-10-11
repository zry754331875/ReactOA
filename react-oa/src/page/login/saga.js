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

function* login(action) {

    try {
        let {
            username,
            password
        } = action.payload
        
        let response = yield call(fetch, `/ygoa/ydpt/loginYdpt.action?userName=${username}&password=${md5(password)}`, {
            method: 'GET',
            headers: {
                'X-Innovate-Application': 'OA',
            },
            credentials: 'include',
        })

        let json = yield call([response, response.json])

        if (json.success == 0) {
            yield put(createAction(LOGIN_TYPES.LOGIN_SUCCESS)(json))
            yield put(push("/Main"))
        }
        else{
            yield put(createAction(LOGIN_TYPES.LOGIN_ERROR)())
        }
    } catch (error) {
        yield put(createAction(LOGIN_TYPES.LOGIN_ERROR)(error))
    }
}

export default function* rootSaga() {
    yield takeEvery(LOGIN_TYPES.LOGIN_START, login)
}