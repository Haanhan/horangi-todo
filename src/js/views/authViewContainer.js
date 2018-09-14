import AuthView from "./authView";
import React from "react";
import { Mutation } from "react-apollo";
import {LOGIN } from "../queries";


const AuthViewContainer = (data) => {
    console.log(data);
    return (<AuthView />)


    // <Mutation mutation={LOGIN}>
    // {
    //     (login, { data }) => {
    //         return (<AuthView />)
    //     }
    // }
    // </Mutation>
}

// const TestContainer = (props) => (
//     <Query query={getTodoList}>
//         {
//             (data)=> {
//                 if(data.loading) 
//                     return(<div>loading...</div>);
//                 else if(data.error) {
//                     props.history.push("/login");
//                     return(<div></div>);
//                 }
//                 else
//                     return (<MainView/>);
//             }
//         }
//     </Query>
// );

export default AuthViewContainer;