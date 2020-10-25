import React, { useContext, useEffect } from 'react'
import { ClientForm } from '../../components/ClientForm'
import { ElenasContext } from '../../contexts/ElenasContext'

export const UpdateClient = () => {
  const { clientsById, createClient } = useContext(ElenasContext)
  return (
    <ClientForm
      isCreateUser={false}
      createClient={createClient}
      client={clientsById[0]}
    />
  )
}
