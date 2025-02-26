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
    <div className="overflow-x-auto bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Usuarios</h2>
      <table className="min-w-full table-auto border-collapse border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-2 border">ID Usuario</th>
            <th className="px-4 py-2 border">Nombre</th>
            <th className="px-4 py-2 border">ID Huella</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario) => (
            <tr key={usuario.id_usuario}>
              <td className="px-4 py-2 border">{usuario.id_usuario}</td>
              <td className="px-4 py-2 border">{usuario.nombre}</td>
              <td className="px-4 py-2 border">{usuario.id_huella}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default UsuariosTable
