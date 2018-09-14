import React from "react";
import { LOGIN, SET_EMAIL } from "../queries";
import AuthView from "./authView";
import { graphql } from "react-apollo";
import {client} from "../index";

class LoginViewContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            alertMsg: "",
            isLoading: false
        }
    }

    doLogin = (email, password) => {
        this.setState({...this.state, isLoading: true});
        this.props.mutate({variables: {'email': email, 'password': password}})
        .then(res => {
            client.mutate({mutation: SET_EMAIL, variables: { email: res.data.login.email }})
            this.props.history.push("/");
        })
        .catch(e => {
            this.setState({ 
                ...this.state,
                alertMsg: "You have entered a wrong email or password. Please try again."
             })
            this.setState({...this.state, isLoading: false});
        })

    }

    goToSignUp = () => {
        this.props.history.push("/signup");
    }

    render(){
        return(
            <AuthView primaryFn={this.doLogin}
                 primaryBtnText="Log in" 
                 secondaryFn={this.goToSignUp}
                 secondaryBtnText="Create new account"
                 isLoading={this.state.isLoading}
                 failAlert={this.state.alertMsg} />
        );
    }
}

export default graphql(LOGIN)(LoginViewContainer);