// src/apiClient.ts
import axios from 'axios';

// Configuración base para Axios
const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // Usamos la variable de entorno definida en .env
  headers: {
    'Content-Type': 'application/json',
  },
});

// Función para hacer peticiones GET
export const getData = async (endpoint: string) => {
  try {
    const response = await apiClient.get(endpoint);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

// Función para hacer peticiones POST
export const postData = async (endpoint: string, data: any) => {
  try {
    const response = await apiClient.post(endpoint, data);
    return response.data;
  } catch (error) {
    console.error('Error posting data:', error);
    throw error;
  }
};

// Función para hacer peticiones DELETE
export const deleteData = async (endpoint: string) => {
  try {
    const response = await apiClient.delete(endpoint);
    return response.data;
  } catch (error) {
    console.error('Error deleting data:', error);
    throw error;
  }
};

export default apiClient;
