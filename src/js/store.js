import {applyMiddleware, createStore} from "redux";
// import reduxPromise  from "redux-promise-middleware";
import reducer from "./reducers/reducers.js";


// const middleware = applyMiddleware(reduxPromise());

export default createStore(reducer);