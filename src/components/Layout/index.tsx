import React, { useContext } from 'react'
import { Layout, Menu } from 'antd'
import { ElenasContext } from '../../contexts/ElenasContext'
import { Link } from 'react-router-dom'

export const LayoutComponent: React.FC = ({ children }) => {
  const { Header } = Layout
  const { removeAuth } = useContext(ElenasContext)
  const handleLogout = () => removeAuth()

  return (
    <Layout>
      <Header>
        <div style={{ float: 'left', fontWeight: 500, marginRight: '1em' }}>
          <Link to='/'>ELENAS APP</Link>
        </div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1" onClick={handleLogout}>
            LOGOUT
          </Menu.Item>
        </Menu>
      </Header>
      {children}
    </Layout>
  )
}
