import { gql } from '@apollo/client'

export const GET_ALL_CLIENTS = gql`
  query searchClients {
    clientsSearch {
      results {
        id
        firstName
        lastName
        city
        cellphone
      }
    }
  }
`

export const CREATE_CLIENT_MUTATION = gql`
  mutation createClientMutation($input: ClientInput!) {
    createClient(input: $input) {
      ... on Client {
        id
        firstName
        lastName
        city
        cellphone
      }
      ... on ValidationErrors {
        message
      }
    }
  }
`

export const GET_CLIENT_BY_ID = gql`
  query searchClients($ids: [Int!]) {
    clientsSearch(ids: $ids) {
      results {
        id
        firstName
        lastName
        cellphone
        city
        address
      }
    }
  }
`

export const UPDATE_CLIENT_MUTATION = gql`
  mutation updateClientMutation($id: Int!, $input: ClientInput!) {
    updateClient(id: $id, input: $input) {
      ... on Client {
        id
        firstName
        lastName
        cellphone
      }
      ... on ValidationErrors {
        message
      }
    }
  }
`
