import React from "react";
import { SIGNUP,  SET_EMAIL } from "../queries";
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

    doSignUp = (email, password) => {
        this.setState({...this.state, isLoading: true});
        this.props.mutate({variables: {'email': email, 'password': password}})
        .then(res => {
            client.mutate({mutation: SET_EMAIL, variables: { email: res.data.signup.email }})
            this.props.history.push("/");
        })
        .catch(e => {
            this.setState({ 
                ...this.state,
                alertMsg: "Please try again."
             })
            this.setState({...this.state, isLoading: false});
        })

    }

    goToLogin = () => {
        this.props.history.push("/login");
    }

    render(){
        return(
            <AuthView primaryFn={this.doSignUp}
                 primaryBtnText="Sign up" 
                 secondaryFn={this.goToLogin}
                 secondaryBtnText="Have an account? Log in here"
                 isLoading={this.state.isLoading}
                 failAlert={this.state.alertMsg} />
        );
    }
}

export default graphql(SIGNUP)(LoginViewContainer);