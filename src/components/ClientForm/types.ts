import { IClient } from '../../interfaces/Client.interface'
import { ICreateClient } from '../../interfaces/CreateClient.interface'

export interface IClientFormInputs {
  isCreateUser: boolean
  createClient?: (client: ICreateClient) => void
  updateClient?: (id: number, client: ICreateClient) => void
  client?: IClient
}
