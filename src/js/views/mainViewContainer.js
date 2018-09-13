import {getTodoList} from "../queries";
import {graphql} from "react-apollo";
import React from "react";
import MainView from "./mainView";


class MainViewContainer extends React.Component{
    shouldComponentUpdate(newProps){
        if(newProps.data.error){
            newProps.history.push("/login");
            return false
        }
        return true;
    }
    render(){
        return(
            this.props.data.loading ?
                <div>Loading...</div> :
                < MainView props={this.props} />
        );
    }
}

export default graphql(getTodoList)(MainViewContainer);