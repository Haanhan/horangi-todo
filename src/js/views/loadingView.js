import React from "react";
import {graphql} from "react-apollo";
import {getTodoList, login} from "../queries";

class LoadingView extends React.Component{


    render( ){
        console.log(this.props);

        this.props.mutate({variables: {password: "123", email: "a@a.a"}})
        .then(res =>{
            console.log(res);
        })
        .catch(e => {
            console.log(e);
        })

        return(
            <div>Loading...</div>
        );
    }
}

let options = {

}

export default graphql(login)(LoadingView);