import { gql } from '@apollo/client'

export const LOGIN = gql`
mutation loginUser($cellphone: String!, $password: String!) {
  login(cellphone: $cellphone, password: $password) {
  	... on AuthInfo {
      token
    }
    ...on ValidationErrors {
      message
      errors {
        message
      }
    }
  }
}
`
