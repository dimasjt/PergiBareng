import { gql } from "react-apollo"

export const register = gql`
  mutation register($email: String!, $password: String!) {
    register(user: { email: $email, password: $password }) {
      auth_token
    }
  }
`
export const login = gql`
  mutation login($email: String!, $password: String!) {
    login(user: { email: $email, password: $password }) {
      auth_token
    }
  }
`
