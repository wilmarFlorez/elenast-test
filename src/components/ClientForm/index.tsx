import React from 'react'
import { Form, Input, Button } from 'antd'
import { IClientFormInputs } from './types'

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 }
}

const validateMessages = {
  required: '${label} is required!'
}

export const ClientForm: React.FC<IClientFormInputs> = ({
  isCreateUser,
  createClient,
  updateClient,
  client
}: IClientFormInputs) => {
  console.log('Client form', client)

  const onFinish = (values: any) => {
    const client = {
      firstName: values.client.firstName,
      lastName: values.client.lastName,
      cellphone: values.client.cellphone,
      address: {
        streetAddress: values.client.address
      }
    }
    if (createClient && isCreateUser) {
      createClient(client)
    }

    if (updateClient && !isCreateUser) {
      updateClient([3333], client)
    }
  }

  return (
    <Form
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      validateMessages={validateMessages}
    >
      <Form.Item
        name={['client', 'firstName']}
        label="First Name"
        rules={[{ required: true }]}
      >
        <Input defaultValue={client?.firstName} />
      </Form.Item>

      <Form.Item
        name={['client', 'lastName']}
        label="Last Name"
        rules={[{ required: true }]}
      >
        <Input defaultValue={client?.lastName} />
      </Form.Item>

      <Form.Item
        name={['client', 'cellphone']}
        label="Cellphone"
        rules={[{ required: true }]}
      >
        <Input defaultValue={client?.cellphone} />
      </Form.Item>

      <Form.Item
        name={['client', 'address']}
        label="Address"
        rules={[{ required: true }]}
      >
        <Input defaultValue={client?.address} />
      </Form.Item>

      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}
