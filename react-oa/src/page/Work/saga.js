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

    try {
        const {
            pageIndex
        } = action.payload

        let json = yield call(postFetch, '/zhyl/Home/Index/clist', {
            page: pageIndex,
            ctype: 0,
            cid: 0,
            user_id: 0
        })

        console.log(json)

        if (json.success == 0) {
            yield put(createAction(WORK_TYPES.FETCH_HOME_LIST_SUCCESS)(json))
        } else {

            yield put(createAction(WORK_TYPES.FETCH_HOME_LIST_ERROR)({status:json.success,msg:json.msg}))
        }
    } catch (error) {
        yield put(createAction(WORK_TYPES.FETCH_HOME_LIST_ERROR)({status:error.response.status,msg:'出现失败'}))
    }
}