import {
    handleActions
} from "redux-actions";
import * as LOGIN_TYPE from "./contants";

const defaultState = {
    isLoading: false,
    user: null
}

export default handleActions({
    [LOGIN_TYPE.LOGIN_START]: (state) => {
        return {
            ...state,
            isLoading: true,
        }
    },
    [LOGIN_TYPE.LOGIN_SUCCESS]: (state, action) => {

        let json = action.payload

        delete json.success
        
        return {
            ...state,
            isLoading: false,
            user: json
        }
    },
    [LOGIN_TYPE.LOGIN_ERROR]: (state) => {
        return {
            ...state,
            isLoading: false,
        }
    },
}, defaultState)