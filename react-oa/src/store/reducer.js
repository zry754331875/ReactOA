import {combineReducers} from 'redux';
import Login from "@page/login/reducer";
import Work from "@page/Work/reducer";
export default combineReducers({
    login:Login,
    work:Work,
})