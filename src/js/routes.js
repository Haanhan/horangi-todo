import React from "react";
import { Route } from "react-router-dom";
import MainView from "./views/mainViewContainer";
import AuthView from "./views/authView";


export default class extends React.Component{
    render(){
        return(
            <div>
                <Route path="/" exact component={MainView} />
                <Route path="/login" exact component={AuthView} />
            </div>
        );
    }
}

