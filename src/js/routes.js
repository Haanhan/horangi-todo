import React from "react";
import { Route } from "react-router-dom";
import MainView from "./views/mainView";
import LoginView from "./views/loginView";
import LoadingView from "./views/loadingView";


const auth = false;

export default class extends React.Component{
    render(){
        return(
            <div>
                <Route path="/" exact component={auth ? MainView : LoadingView} />
                <Route path="/login" exact component={LoginView} />
            </div>
        );
    }
}

