import React, { useEffect, useContext } from 'react'
import { UserForm } from '../../components/UserForm'
import { ElenasContext } from '../../contexts/ElenasContext'
import { useHistory } from 'react-router-dom'

export const Login: React.FC = () => {
  const { isAuth } = useContext(ElenasContext)
  let history = useHistory()

  useEffect(() => {
    isAuth && history.replace('/')
  }, [isAuth])

  return <UserForm />
}
