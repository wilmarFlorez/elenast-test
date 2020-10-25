import React from 'react'
import { Routes } from '../routes'
import { ElenasProvider } from './ElenasContext'

export const Provider: React.FC = () => (
  <ElenasProvider>
    <Routes />
  </ElenasProvider>
)
