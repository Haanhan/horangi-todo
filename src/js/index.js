import React from 'react';
import {render} from 'react-dom';
import Routes from "./routes";
// import {Provider} from "react-redux";
import { BrowserRouter } from "react-router-dom";
// import store from "./store.js";

import { ApolloClient, InMemoryCache, HttpLink, ApolloLink } from 'apollo-boost';
import { ApolloProvider } from "react-apollo";
import { withClientState } from "apollo-link-state";

import { gql } from "apollo-boost";

const initialState = {
    user: {
        email: null,
        id: null,
    },
    todoList: [],
    isLoading: false
}

const stateLink = new withClientState({
    cache: new InMemoryCache(),
    defaults: {},
    resolvers: {}
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

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: link,
})


render(
    // <Provider store={store}>
        <ApolloProvider client={client}>
            <BrowserRouter>
                <Routes/>
            </BrowserRouter>
        </ApolloProvider>
    // </Provider>
, document.getElementById("app"));

