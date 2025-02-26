// src/components/HechosTable.tsx
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

  useEffect(() => {
    const fetchHechos = async () => {
      try {
        const data = await getData('/hechos')  // Usamos la función getData del apiClient
        setHechos(data)
      } catch (error) {
        console.error('Error al obtener los hechos:', error)
      }
    }
    fetchHechos()
  }, [])

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Hechos</h2>
      <table className="min-w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="px-4 py-2 border">ID Hecho</th>
            <th className="px-4 py-2 border">ID Usuario</th>
            <th className="px-4 py-2 border">Fecha</th>
            <th className="px-4 py-2 border">Estado</th>
          </tr>
        </thead>
        <tbody>
          {hechos.map((hecho) => (
            <tr key={hecho.id_hecho}>
              <td className="px-4 py-2 border">{hecho.id_hecho}</td>
              <td className="px-4 py-2 border">{hecho.id_usuario}</td>
              <td className="px-4 py-2 border">{hecho.fecha}</td>
              <td className="px-4 py-2 border">{hecho.estado}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default HechosTable
