import {gql} from "apollo-boost";

export const GET_TODOS = gql`
query {
    todos{
      id
      text
      completed
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

export const ADD_TODO = gql`
mutation($text: String!){
	addTodo(text: $text){
        id
        text
        completed
    }
}
`

export const DELETE_TODO = gql`
mutation($id: String!){
	deleteTodo(id: $id){
        id
        text
        completed
    }
}
`

export const UPDATE_TODO = gql`
mutation($id: String!, $text: String, $completed: Boolean){
	updateTodo(id: $id, text:$text, completed:$completed){
        id
        text
        completed
    }
}
`

// export const SET_TODOS = gql`
// mutation($todos: Array!){
//     setTodos(todos: $todos) @client 
// }
// `
// export const SET_EMAIL = gql`
// mutation($email: String!){
//     setEmail(email: $email) @client 
// }
// `

// export const GET_EMAIL = gql`
// query getEmail{
//     email @client
// }
// `

