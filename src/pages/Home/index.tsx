import React, { useContext } from 'react'
import { ListOfCards } from '../../components/ListOfCards'
import { Layout, Button, Menu } from 'antd'
import { ElenasContext } from '../../contexts/ElenasContext'
const { Header } = Layout

export const Home: React.FC = () => {
  const { removeAuth } = useContext(ElenasContext)

  const handleLogout = () => removeAuth()

  return (
    <Layout>
      <Header>
        <div style={{ float: 'left', color: '#ffffff', fontWeight: 600}}>Elenas app</div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1" onClick={handleLogout}>Logout</Menu.Item>
        </Menu>
      </Header>
      <ListOfCards />
    </Layout>
  )
}
