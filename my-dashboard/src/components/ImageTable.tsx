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
        const data = await getData('/userimg')
        setImagenes(data)
      } catch (error) {
        console.error('Error al obtener las imágenes:', error)
      }
    }
    fetchImagenes()
  }, [])

  return (
    <div className="overflow-x-auto bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Imágenes</h2>
      <table className="min-w-full table-auto border-collapse border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-2 border">ID Imagen</th>
            <th className="px-4 py-2 border">ID Usuario</th>
            <th className="px-4 py-2 border">Nombre</th>
            <th className="px-4 py-2 border">ID Huella</th>
            <th className="px-4 py-2 border">Link Imagen</th>
          </tr>
        </thead>
        <tbody>
          {imagenes.map((imagen) => (
            <tr key={imagen.id_imagen}>
              <td className="px-4 py-2 border">{imagen.id_imagen}</td>
              <td className="px-4 py-2 border">{imagen.id_usuario}</td>
              <td className="px-4 py-2 border">{imagen.nombre}</td>
              <td className="px-4 py-2 border">{imagen.id_huella}</td>
              <td className="px-4 py-2 border">{imagen.link_imagen}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ImagenesTable
