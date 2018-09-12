export default (state = false, action) => {
    switch(action.type){
        case "SEARCH_USERS_FULFILLED":
        // case "GET_REPOS_FULFILLED":
        state = false;
            break;
        case "SEARCH_USERS_REQ_PENDING":
        // case "GET_REPOS_PENDING":
        state = true;
            break;

    }
    return state;
}