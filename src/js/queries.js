import {gql} from "apollo-boost";

export const GET_TODOS = gql`
query {
    todos{
      id
      text
      completed
      completedAt
    }
}
`

export const GET_TODOS_LOCAL = gql`
query{
    todos @client{
      id
      text
      completed
      completedAt
    }
}
`
export const LOGIN = gql`
mutation($email: String!, $password: String!){
	login(email: $email, password: $password){
        email
    }
}
`

export const SIGNUP = gql`
mutation($email: String!, $password: String!){
	signup(email: $email, password: $password){
        email 
    }
}
`
export const SET_TODOS = gql`
mutation($todos: Array!){
    setTodos(todos: $todos) @client 
}
`
export const SET_EMAIL = gql`
mutation($email: String!){
    setEmail(email: $email) @client 
}
`

export const GET_EMAIL = gql`
query getEmail{
    email @client
}
`

