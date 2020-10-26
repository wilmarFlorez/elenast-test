import { IClient } from '../../interfaces/Client.interface'
import { ICreateClient } from '../../interfaces/CreateClient.interface'

export interface IElenasContext {
  clients: IClient[]
  client: IClient
  loginUser: (cellphone: string, password: string) => void
  removeAuth: () => void
  getClients: () => void
  createClient: (input: ICreateClient) => void
  getClientById: (ids: number[]) => void
  updateClient: (id: number, input: ICreateClient) => void
  isAuth: boolean
  clientsById: IClient[]
}
