import {combineReducers} from "redux";

import todoReducer from "./todoReducer";
import loadingReducer from "./loadingReducer";
import userReducer from "./userReducer";

export default combineReducers({
    isLoading: loadingReducer,
    todoList: todoReducer,
    user: userReducer,
});