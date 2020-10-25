import React, { useContext } from 'react'
import { ElenasContext } from '../../contexts/ElenasContext'
import { Form, Input, Button, Layout } from 'antd'

const { Content } = Layout

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 8 }
}
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 }
}

export const UserForm: React.FC = () => {
  const { loginUser } = useContext(ElenasContext)

  const onFinish = (values: any) => {
    console.log('Success:', values)
    loginUser(values.username, values.password)
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <Layout>
      <Content style={{ padding: '50px 50px' }}>
        <h1 style={{ textAlign: 'center' }}>Login Form</h1>
        <Form
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input defaultValue="+573057199995" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Content>
    </Layout>
  )
}
