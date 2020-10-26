import React from 'react'
import { Routes } from '../routes'
import { ElenasProvider } from './ElenasContext'
import { AppProvider } from './App'

export const Provider: React.FC = () => (
  <AppProvider>
    <ElenasProvider>
      <Routes />
    </ElenasProvider>
  </AppProvider>
)
