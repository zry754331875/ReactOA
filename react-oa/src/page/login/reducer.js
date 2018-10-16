import {
    handleActions
} from "redux-actions";
import * as LOGIN_TYPE from "./contants";

const defaultState = {
    isLoading: false,
    user: null,
    isAuth:false,
    error:null,
}

export default handleActions({
    [LOGIN_TYPE.LOGIN_START]: (state) => {
        return {
            ...state,
            isLoading: true,
            isAuth:false,
            error:null,
        }
    },
    [LOGIN_TYPE.LOGIN_SUCCESS]: (state, action) => {

        let json = action.payload

        delete json.success
        
        return {
            ...state,
            isLoading: false,
            user: json,
            isAuth:true,
        }
    },
    [LOGIN_TYPE.LOGIN_ERROR]: (state,action) => {

        let error = action.payload

        return {
            ...state,
            isLoading: false,
            isAuth:false,
            error:error,
        }
    },
}, defaultState)