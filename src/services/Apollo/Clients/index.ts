import { Apollo } from '../../../config/apollo'
import {
  CREATE_CLIENT_MUTATION,
  GET_ALL_CLIENTS,
  GET_CLIENT_BY_ID,
  UPDATE_CLIENT_MUTATION
} from '../../../graphql/clients/index.graphql'
import {
  IGraphQLResponseError,
  IGraphQLResponseSucces
} from '../../../interfaces/GraphqlResponse.interface'
import { IClient } from '../../../interfaces/Client.interface'
import { IApiCreateClientInput, IApiUpdateClientInput } from './types'

export const getClientsAPI = async (): Promise<
  IGraphQLResponseSucces<'client'> | IGraphQLResponseError
> => {
  try {
    const response = await Apollo().query({
      query: GET_ALL_CLIENTS
    })

    if (response.error) throw new Error('Incorrect fetch')

    return {
      error: false,
      data: {
        clients: response.data.clientsSearch.results as IClient[]
      }
    }
  } catch (error) {
    if (error instanceof Error) return { error: true, message: error.message }

    return {
      error: true,
      message: 'Error fetching data'
    }
  }
}

export const createClientAPI = async (
  input: IApiCreateClientInput
): Promise<IGraphQLResponseSucces<'client'> | IGraphQLResponseError> => {
  try {
    const response = await Apollo().mutate({
      mutation: CREATE_CLIENT_MUTATION,
      variables: input
    })

    if (response.errors) throw new Error('Incorrect fetch')
    debugger
    return {
      error: false,
      data: {
        client: response.data.createClient as IClient
      }
    }
  } catch (error) {
    if (error instanceof Error) return { error: true, message: error.message }

    return {
      error: true,
      message: 'Error fetching data'
    }
  }
}

export const updateClientAPI = async (
  input: IApiUpdateClientInput,
  id: number
): Promise<IGraphQLResponseSucces<'client'> | IGraphQLResponseError> => {
  try {
    debugger
    const response = await Apollo().mutate({
      mutation: UPDATE_CLIENT_MUTATION,
      variables: {id, ...input}
    })

    if (response.errors) throw new Error('Incorrect fetch')
    debugger
    return {
      error: false,
      data: {
        client: response.data.createClient as IClient
      }
    }
  } catch (error) {
    if (error instanceof Error) return { error: true, message: error.message }

    return {
      error: true,
      message: 'Error fetching data'
    }
  }
}

export const getClientByIdAPI = async (
  ids: number[],
):Promise<IGraphQLResponseSucces<'client'> | IGraphQLResponseError> => {
  try {
    const response = await Apollo().query({
      query: GET_CLIENT_BY_ID,
      variables: {
        ids
      }
    })
    debugger
    if (response.errors) throw new Error('Incorrect fetch')

    return {
      error: false,
      data: {
        clients: response.data.clientsSearch.results as IClient[]
      }
    }
  } catch (error) {
    if (error instanceof Error) return { error: true, message: error.message }

    return {
      error: true,
      message: 'Error fetching data'
    }
  }
}
