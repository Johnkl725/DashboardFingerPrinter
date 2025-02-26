import React, { useEffect, useState } from 'react'
import { getData } from '../apiClient'

interface Hecho {
  id_hecho: string
  id_usuario: string
  fecha: string
  estado: string
}

const HechosTable: React.FC = () => {
  const [hechos, setHechos] = useState<Hecho[]>([])

  // Función para obtener los datos
  const fetchHechos = async () => {
    try {
      const data = await getData('/hechos')  // Usamos la función getData del apiClient
      setHechos(data)
    } catch (error) {
      console.error('Error al obtener los hechos:', error)
    }
  }

  // Llamar a la función fetchHechos cuando se monta el componente
  useEffect(() => {
    fetchHechos()
  }, [])

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-blue-600 mb-4">Hechos</h2>
      <table className="min-w-full table-auto border-collapse border border-gray-300">
        <thead className="bg-blue-100">
          <tr>
            <th className="px-6 py-3 border">ID Hecho</th>
            <th className="px-6 py-3 border">ID Usuario</th>
            <th className="px-6 py-3 border">Fecha</th>
            <th className="px-6 py-3 border">Estado</th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {hechos.map((hecho) => (
            <tr key={hecho.id_hecho} className="hover:bg-gray-50">
              <td className="px-6 py-3 border">{hecho.id_hecho}</td>
              <td className="px-6 py-3 border">{hecho.id_usuario}</td>
              <td className="px-6 py-3 border">{hecho.fecha}</td>
              <td className="px-6 py-3 border">{hecho.estado}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default HechosTable
