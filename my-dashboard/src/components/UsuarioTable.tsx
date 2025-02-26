import React, { useEffect, useState } from 'react'
import { getData } from '../apiClient'

interface Usuario {
  id_usuario: string
  nombre: string
  id_huella: string
}

const UsuariosTable: React.FC = () => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([])

  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const data = await getData('/usuarios')
        setUsuarios(data)
      } catch (error) {
        console.error('Error al obtener los usuarios:', error)
      }
    }
    fetchUsuarios()
  }, [])

  return (
    <div className="overflow-x-auto bg-white p-6 rounded-lg shadow-lg mb-8">
      <h2 className="text-2xl font-semibold text-blue-600 mb-6">Usuarios</h2>
      <table className="min-w-full table-auto border-collapse border border-gray-300">
        <thead className="bg-blue-100">
          <tr>
            <th className="px-6 py-3 border text-left">ID Usuario</th>
            <th className="px-6 py-3 border text-left">Nombre</th>
            <th className="px-6 py-3 border text-left">ID Huella</th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {usuarios.map((usuario) => (
            <tr key={usuario.id_usuario} className="hover:bg-gray-50">
              <td className="px-6 py-3 border">{usuario.id_usuario}</td>
              <td className="px-6 py-3 border">{usuario.nombre}</td>
              <td className="px-6 py-3 border">{usuario.id_huella}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default UsuariosTable
