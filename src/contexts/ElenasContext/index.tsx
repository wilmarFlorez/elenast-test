import React, { createContext, useState, useEffect } from 'react'
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
    } catch (error) {
      console.log(error.message)
    }
  }

  const getClients = async () => {
    try {
      const response = await getClientsAPI()

      if (response.error === true) throw new Error(`Error fetching data`)

      if (response.data.clients) {
        setClients([...response.data.clients])
      }
    } catch (error) {
      console.log('Ha ocurrido un error!')
    }
  }

  const getClientById = async (ids: number[]) => {
    try {
      const response = await getClientByIdAPI(ids)

      if (response.error === true) throw new Error(`Error fetching data`)
      debugger
      if (response.data?.clients) {
        setClientById([...response.data.clients])
      }
    } catch (error) {
      console.log('Ha ocurrido un error!')
    }
  }

  const createClient = async (client: ICreateClient) => {
    try {
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
    } catch (error) {
      console.log('No se ha podido crear el usuario!')
    }
  }

  const updateClient = async (id: number, client: ICreateClient) => {
    try {
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
    } catch (error) {
      console.log('No se ha podido crear el usuario!')
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
