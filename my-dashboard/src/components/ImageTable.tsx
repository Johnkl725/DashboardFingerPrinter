import React, { useEffect, useState } from 'react'
import { getData } from '../apiClient'

interface Imagen {
  id_imagen: string
  id_usuario: string
  nombre: string
  id_huella: string
  link_imagen: string
}

const ImagenesTable: React.FC = () => {
  const [imagenes, setImagenes] = useState<Imagen[]>([])

  useEffect(() => {
    const fetchImagenes = async () => {
      try {
        const data = await getData('/userimg')  // Usamos la función getData del apiClient
        setImagenes(data)
      } catch (error) {
        console.error('Error al obtener las imágenes:', error)
      }
    }
    fetchImagenes()
  }, [])

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-blue-600 mb-4">Imágenes</h2>
      <table className="min-w-full table-auto border-collapse border border-gray-300">
        <thead className="bg-blue-100">
          <tr>
            <th className="px-6 py-3 border">ID Imagen</th>
            <th className="px-6 py-3 border">ID Usuario</th>
            <th className="px-6 py-3 border">Nombre</th>
            <th className="px-6 py-3 border">ID Huella</th>
            <th className="px-6 py-3 border">Link Imagen</th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {imagenes.map((imagen) => (
            <tr key={imagen.id_imagen} className="hover:bg-gray-50">
              <td className="px-6 py-3 border">{imagen.id_imagen}</td>
              <td className="px-6 py-3 border">{imagen.id_usuario}</td>
              <td className="px-6 py-3 border">{imagen.nombre}</td>
              <td className="px-6 py-3 border">{imagen.id_huella}</td>
              <td className="px-6 py-3 border">{imagen.link_imagen}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ImagenesTable
