import { handleActions } from "redux-actions";
import * as WORK_TYPE from "./contants";

const defaultState = [
    {title:'1',imageUrl:''},
    {title:'1',imageUrl:''},
    {title:'1',imageUrl:''},
]
    
export default handleActions({
    [WORK_TYPE.FETCH_HOME_LIST_START]:state=>{

    }
},defaultState)