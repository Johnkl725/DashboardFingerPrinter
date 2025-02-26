// src/components/UsuariosTable.tsx
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
        const data = await getData('/usuarios')  // Usamos la función getData del apiClient
        setUsuarios(data)
      } catch (error) {
        console.error('Error al obtener los usuarios:', error)
      }
    }
    fetchUsuarios()
  }, [])

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Usuarios</h2>
      <table className="min-w-full table-auto border-collapse border border-gray-300">
        <thead>
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
