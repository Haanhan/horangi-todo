import React from "react";
import { Route } from "react-router-dom";
import MainViewContainer from "./views/mainViewContainer";
import AuthView from "./views/authView";
import LoginViewContainer from "./views/loginViewContainer";
import SignupViewController from "./views/signUpViewContainer";


export default class extends React.Component{
    render(){
        return(
            <div>
                <Route path="/" exact component={MainViewContainer} />
                <Route path="/login" exact component={LoginViewContainer} />
                <Route path="/signup" exact component={SignupViewController} />
            </div>
        );
    }
}

