import { Apollo } from '../../../config/apollo'
import { LOGIN } from '../../../graphql/auth/Login.graphql'
import {
  IGraphQLResponseError,
  IGraphQLResponseSucces
} from '../../../interfaces/GraphqlResponse.interface'
import { IApiLoginInputs } from './types'

export const loginAPI = async ({
  cellphone,
  password
}: IApiLoginInputs): Promise<
  IGraphQLResponseSucces<'login'> | IGraphQLResponseError
> => {
  try {
    const response = await Apollo().mutate({
      mutation: LOGIN,
      variables: {
        cellphone,
        password
      }
    })

    if (response.data.login.errors) throw new Error('Incorrect fetch')

    return {
      error: false,
      data: {
        login: {
          token: response.data.login.token as string
        }
      }
    }

    console.log('RESPONSE auth', response)
  } catch (error) {
    if (error instanceof Error) return { error: true, message: error.message }

    return { error: true, message: 'Error fetching data' }
  }
}
