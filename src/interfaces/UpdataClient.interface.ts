import {ICreateClient} from './CreateClient.interface'

export interface IUpdateClient extends ICreateClient {
  ids: number[], 
}
