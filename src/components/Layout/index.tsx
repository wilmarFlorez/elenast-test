import React, { useContext } from 'react'
import { Layout, Menu } from 'antd'
import { ElenasContext } from '../../contexts/ElenasContext'

export const LayoutComponent: React.FC = ({ children }) => {
  const { Header } = Layout
  const { removeAuth } = useContext(ElenasContext)
  const handleLogout = () => removeAuth()

  return (
    <Layout>
      <Header>
        <div style={{ float: 'left', color: '#ffffff', fontWeight: 600 }}>
          Elenas app
        </div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1" onClick={handleLogout}>
            Logout
          </Menu.Item>
        </Menu>
      </Header>
      {children}
    </Layout>
  )
}
