import React, { useContext } from 'react'
import { ClientForm } from '../../components/ClientForm'
import { ElenasContext } from '../../contexts/ElenasContext'

export const CreateClient = () => {
  const { createClient } = useContext(ElenasContext)
  return (
    <>
      <h1>Create Client</h1>
      <ClientForm isCreateUser createClient={createClient} />
    </>
  )
}
