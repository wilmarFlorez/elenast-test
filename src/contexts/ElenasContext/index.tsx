import React, { createContext, useState, useContext } from 'react'
import { IClient } from '../../interfaces/Client.interface'
import { IElenasContext } from './types'
import { loginAPI } from '../../services/Apollo/auth/index'
import {
  getClientsAPI,
  createClientAPI,
  getClientByIdAPI,
  updateClientAPI
} from '../../services/Apollo/Clients'
import { ICreateClient } from '../../interfaces/CreateClient.interface'
import {AppContext} from '../App'

export const ElenasContext = createContext<IElenasContext>({
  clients: [],
  client: {
    id: 0,
    firstName: '',
    lastName: '',
    city: '',
    cellphone: '',
  }, 
  loginUser: () => null,
  removeAuth: () => null,
  isAuth: false,
  getClients: () => null,
  createClient: () => null,
  getClientById: () => null,
  clientsById: [],
  updateClient: () => null,
})

export const ElenasProvider: React.FC = ({ children }) => {
  const {appLoading, setAppLoading} = useContext(AppContext)
  const [clients, setClients] = useState<IClient[]>([])
  const [clientsById, setClientById] = useState<IClient[]>([])
  const [isAuth, setIsAuth] = useState<boolean>(() => {
    return localStorage.getItem('Token') ? true : false
  })
  const [client, setClient] = useState<IClient>({
    id: 0,
    firstName: '',
    lastName: '',
    city: '',
    cellphone: ''
  })

  const loginUser = async (cellphone: string, password: string) => {
    try {
      setAppLoading(true)
      const response = await loginAPI({
        cellphone,
        password
      })

      if (response.error === true)
        throw new Error(`Error message ${response.message}`)

      if (response.data.login) {
        const token = response.data.login.token || ''
        activateAuth(token)
      }
      setAppLoading(false)
    } catch (error) {
      console.log(error.message)
      setAppLoading(false)
    }
  }

  const getClients = async () => {
    try {
      setAppLoading(true)

      const response = await getClientsAPI()

      if (response.error === true) throw new Error(`Error fetching data`)

      if (response.data.clients) {
        setClients([...response.data.clients])
      }
      setAppLoading(false)

    } catch (error) {
      console.log('Ha ocurrido un error!')
      setAppLoading(false)

    }
  }

  const getClientById = async (ids: number[]) => {
    try {
      setAppLoading(true)
      const response = await getClientByIdAPI(ids)

      if (response.error === true) throw new Error(`Error fetching data`)
      debugger
      if (response.data?.clients) {
        setClientById([...response.data.clients])
      }
      setAppLoading(false)
    } catch (error) {
      console.log('Ha ocurrido un error!')
      setAppLoading(false)
    }
  }

  const createClient = async (client: ICreateClient) => {
    try {
      setAppLoading(true)
      const input = {
        input: {
          ...client
        }
      }

      const response = await createClientAPI(input)
      if (response.error === true) throw new Error(`Error fetching data`)

      console.log('Response create client', response)

      if (response.data.client) {
        setClient(response.data.client)
        console.log(`Created client ${response.data.client}`)
      }
      setAppLoading(false)
    } catch (error) {
      console.log('No se ha podido crear el usuario!')
      setAppLoading(false)
    }
  }

  const updateClient = async (id: number, client: ICreateClient) => {
    try {
      setAppLoading(true)
      const input = {
        input: {
          ...client
        }
      }
      debugger
      const response = await updateClientAPI(input, id)
      if (response.error === true) throw new Error(`Error fetching data ${response.message}`, )

      console.log('Response update client', response)

      if (response.data.client) {
        setClient(response.data.client)
        console.log(`Updated Client ${response.data.client}`)
      }
      setAppLoading(false)
    } catch (error) {
      console.log('No se ha podido crear el usuario!')
      setAppLoading(false)
    }
  }

  const activateAuth = (token: string) => {
    setIsAuth(true)
    localStorage.setItem('Token', token)
  }

  const removeAuth = () => {
    setIsAuth(false)
    localStorage.removeItem('Token')
  }

  return (
    <ElenasContext.Provider
      value={{
        loginUser,
        isAuth,
        getClients,
        clients,
        removeAuth,
        createClient,
        getClientById,
        client,
        clientsById,
        updateClient
      }}
    >
      {children}
    </ElenasContext.Provider>
  )
}
