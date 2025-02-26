// src/App.tsx
import React from 'react'
import HechosTable from './components/HechosTable'
import ImagenesTable from './components/ImageTable'
import UsuariosTable from './components/UsuarioTable'

const App: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Dashboard</h1>
      <HechosTable />
      <ImagenesTable />
      <UsuariosTable />
    </div>
  )
}

export default App
