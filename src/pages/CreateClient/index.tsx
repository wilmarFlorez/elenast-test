import React, { useContext } from 'react'
import { ClientForm } from '../../components/ClientForm'
import { ElenasContext } from '../../contexts/ElenasContext'

export const CreateClient = () => {
  const { createClient } = useContext(ElenasContext)
  return <ClientForm isCreateUser createClient={createClient} />
}
