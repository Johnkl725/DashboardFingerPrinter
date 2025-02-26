import React, { useState } from 'react';
import HechosTable from './components/HechosTable'; // Asumiendo que ya tienes estas tablas
import ImagenesTable from './components/ImageTable';
import UsuariosTable from './components/UsuarioTable';

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('hechos');  // Estado para manejar la tabla activa

  return (
    <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-semibold text-center text-blue-600 mb-8">Dashboard</h1>

      {/* Botones de navegación para cambiar de tabla */}
      <div className="flex flex-wrap justify-center mb-8 gap-4">
        <button
          onClick={() => setActiveTab('hechos')}
          className={`px-6 py-2 rounded-md font-semibold text-white ${
            activeTab === 'hechos' ? 'bg-blue-500' : 'bg-gray-400'
          } transition-colors duration-300`}
        >
          Hechos
        </button>
        <button
          onClick={() => setActiveTab('imagenes')}
          className={`px-6 py-2 rounded-md font-semibold text-white ${
            activeTab === 'imagenes' ? 'bg-blue-500' : 'bg-gray-400'
          } transition-colors duration-300`}
        >
          Imágenes
        </button>
        <button
          onClick={() => setActiveTab('usuarios')}
          className={`px-6 py-2 rounded-md font-semibold text-white ${
            activeTab === 'usuarios' ? 'bg-blue-500' : 'bg-gray-400'
          } transition-colors duration-300`}
        >
          Usuarios
        </button>
      </div>

      {/* Contenido dinámico según la pestaña activa */}
      <div>
        {activeTab === 'hechos' && <HechosTable />}
        {activeTab === 'imagenes' && <ImagenesTable />}
        {activeTab === 'usuarios' && <UsuariosTable />}
      </div>
    </div>
  );
};

export default Dashboard;
