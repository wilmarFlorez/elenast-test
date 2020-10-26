import React, { useContext, useEffect } from 'react'
import { ClientForm } from '../../components/ClientForm'
import { ElenasContext } from '../../contexts/ElenasContext'

export const UpdateClient = () => {
  const { clientsById, updateClient } = useContext(ElenasContext)
  console.log('updateClient', clientsById)
  return (
    <>
      <h1>Update Client</h1>
       <ClientForm
      isCreateUser={false}
      updateClient={updateClient}
      client={clientsById[0]}
    />
    </>
  )
}
