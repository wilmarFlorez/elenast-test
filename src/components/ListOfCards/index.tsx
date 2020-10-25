import React, { useContext, useEffect } from 'react'
import { Layout, Card, Button } from 'antd'
import { CardComponent } from '../Card'
import { ElenasContext } from '../../contexts/ElenasContext'
import { Link } from 'react-router-dom'

const { Content } = Layout

export const ListOfCards = () => {
  const { getClients, clients } = useContext(ElenasContext)
  console.log('CLIENTS LIST', clients)

  useEffect(() => {
    getClients()
  }, [])

  return (
    <Layout>
      <Content style={{ padding: '0 50px' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '2em'
          }}
        >
          <h1>Clients</h1>
          <Link to='/client/create/:id'>
            <Button type="primary" size="middle">
              Add Client
            </Button>
          </Link>
        </div>
        <Card>
          {clients.map((client) => (
            <CardComponent key={client.id} client={client} />
          ))}
        </Card>
      </Content>
    </Layout>
  )
}
