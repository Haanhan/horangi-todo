import {gql} from "apollo-boost";

export const getTodoList = gql`
query{
    todos{
      id
      text
      completed
      completedAt
    }
}
`
export const login = gql`
mutation($email: String!, $password: String!){
	login(email: $email, password: $password){
        id,
        email,
        password,
    }
}
`