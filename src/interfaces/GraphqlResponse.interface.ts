import { type } from 'os'
import { IClient } from './Client.interface'
import { ILogin } from './Login.interface'

export type GraphqlResponseList = {
  client: IClient
  login: ILogin
}

export interface IGrapQLResponse<T extends keyof GraphqlResponseList> {
  login?: GraphqlResponseList[T]
  clients?: GraphqlResponseList[T][]
  client?: GraphqlResponseList[T]
}

export interface IGraphQLResponseSucces<T extends keyof GraphqlResponseList> {
  error: false
  data: IGrapQLResponse<T>
}

export interface IGraphQLResponseError {
  error: true
  message: string
}
