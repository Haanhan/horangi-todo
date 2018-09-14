import React from 'react';
import {render} from 'react-dom';
import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";

import { ApolloClient, InMemoryCache, HttpLink, ApolloLink } from 'apollo-boost';
import { ApolloProvider } from "react-apollo";
import { withClientState } from "apollo-link-state";


const initialState = {
    email: "",
    authFailAlertMsg: "",
    todos: [],
}

const resolvers = {
    Mutation: {
        setTodos:  (_, params, {cache}) => {
            const data = {
                todos: params.todos
            }
            cache.writeData({data});
            return null;
        },
        setEmail:  (_, params, {cache}) => {
            console.log(_,params, cache);
            const data = {
                todos: params.email
            }
            cache.writeData({data});
            return null;
        }
    }
}

const stateLink = new withClientState({
    cache: new InMemoryCache(),
    defaults: initialState,
    resolvers: resolvers
})


const httpLink = new HttpLink({
    uri: "https://intense-sierra-67303.herokuapp.com/gql"
});

const authLink = new ApolloLink((operation, forward) =>{
    operation.setContext({
        headers:{
            "x-auth": localStorage.getItem("x-auth"),
        }
    })

    return forward(operation);
});

const afterwareLink =  new ApolloLink((operation, forward)=>{
    return forward(operation)
        .map(response => {
            const headers = operation.getContext().response.headers;
            if(headers){
                const token = headers.get("x-auth");
                if(token)
                    localStorage.setItem("x-auth", token);
            }
        return response;
        });
})

const link = ApolloLink.from([stateLink, authLink, afterwareLink, httpLink]);

export const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: link,
    defaultOptions: {
        watchQuery: {
            errorPolicy: "all"
        }
    }
})

render(
    <ApolloProvider client={client}>
        <BrowserRouter>
            <Routes/>
        </BrowserRouter>
    </ApolloProvider>
, document.getElementById("app"));

