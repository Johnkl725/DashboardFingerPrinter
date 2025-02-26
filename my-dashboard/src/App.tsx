import React, { useState } from 'react'
import HechosTable from './components/HechosTable'
import ImagenesTable from './components/ImageTable'
import UsuariosTable from './components/UsuarioTable'

const App: React.FC = () => {
  // Estado para manejar la tabla activa
  const [activeTab, setActiveTab] = useState<string>('hechos')

  return (
    <div className="container mx-auto p-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-semibold text-center text-blue-600 mb-8">Dashboard</h1>

      {/* Botones de navegación para cambiar de tabla */}
      <div className="flex justify-center mb-8">
        <button
          onClick={() => setActiveTab('hechos')}
          className={`px-6 py-2 rounded-md font-semibold text-white mr-4 ${
            activeTab === 'hechos' ? 'bg-blue-500' : 'bg-gray-400'
          }`}
        >
          Hechos
        </button>
        <button
          onClick={() => setActiveTab('imagenes')}
          className={`px-6 py-2 rounded-md font-semibold text-white mr-4 ${
            activeTab === 'imagenes' ? 'bg-blue-500' : 'bg-gray-400'
          }`}
        >
          Imágenes
        </button>
        <button
          onClick={() => setActiveTab('usuarios')}
          className={`px-6 py-2 rounded-md font-semibold text-white ${
            activeTab === 'usuarios' ? 'bg-blue-500' : 'bg-gray-400'
          }`}
        >
          Usuarios
        </button>
      </div>

      {/* Sección dinámica que cambia según el estado */}
      <div>
        {activeTab === 'hechos' && <HechosTable />}
        {activeTab === 'imagenes' && <ImagenesTable />}
        {activeTab === 'usuarios' && <UsuariosTable />}
      </div>
    </div>
  )
}

export default App
