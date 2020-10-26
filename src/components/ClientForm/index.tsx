import React, { useState } from 'react'
import { Form, Input, Button } from 'antd'
import { IClientFormInputs } from './types'

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 8 }
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
  const [successMessage, setSuccessMessage] = useState('')

  const onFinish = async (values: any) => {
    const clientInput = {
      firstName: String(values.client.firstName),
      lastName: String(values.client.lastName),
      cellphone: String(values.client.cellphone),
      address: {
        streetAddress: String(values.client.address)
      }
    }
    if (createClient && isCreateUser) {
      await createClient(clientInput)
      setSuccessMessage('User successfully created')
    }

    if (updateClient && !isCreateUser && client?.id) {
      await updateClient(client.id, clientInput)
      setSuccessMessage('User updated successfully')
    }
  }

  return (
    <Form
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      validateMessages={validateMessages}
    >
      {successMessage && (
        <p style={{ color: 'green', fontSize: '1.2em', textAlign: 'center' }}>
          {successMessage}
        </p>
      )}
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
