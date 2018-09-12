// import {getTotalPages} from "./api";

export default (state = [], action) => {
    switch(action.type){
        case "SEARCH_USERS_FULFILLED":
            state = {...state, json: action.payload};
            break;
        case "SEARCH_USERS_REQ_FULFILLED":
            state = {
                ...state,
                 res: action.payload, 
                //  totalPages: getTotalPages(action.payload)
            };
            break;
    }
    return state;
}