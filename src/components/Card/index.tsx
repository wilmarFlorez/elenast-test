import React, { useContext } from 'react'
import { Button, Card } from 'antd'
import { ICardProps } from './types'
import { ElenasContext } from '../../contexts/ElenasContext'
import {useHistory} from 'react-router-dom'

export const CardComponent: React.FC<ICardProps> = ({ client }: ICardProps) => {
  const { getClientById } = useContext(ElenasContext)
  const history = useHistory()

  const handleGetClientById = async (clientId: number) => {
    await getClientById([clientId])
    history.push(`/client/update/${clientId}`)
  }

  return (
    <Card.Grid
      style={{
        width: '24%',
        margin: '10px .5%',
        border: '.5px solid lightgray',
        cursor: 'pointer'
      }}
    >
      <p>
        <strong>Name: </strong> {client.firstName}
      </p>
      <p>
        <strong>Last name: </strong>
        {client.lastName}
      </p>
      <p>
        <strong>Cellphone: </strong> {client.cellphone}
      </p>
      <p>
        <strong>City: </strong> {client.city}
      </p>

      <Button type="primary" onClick={() => handleGetClientById(client.id)}>
        Edit
      </Button>
    </Card.Grid>
  )
}
