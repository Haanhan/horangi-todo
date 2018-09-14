import {GET_TODOS} from "../queries";
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

    logout = () =>{
        localStorage.removeItem("x-auth");
        this.props.history.push("/login");
    }

    render(){
        console.log(this.props);
        return(
            this.props.data.loading ?
                <div>Loading...</div> :
                < MainView logout={this.logout} />
        );
    }
}

export default graphql(GET_TODOS)(MainViewContainer);
