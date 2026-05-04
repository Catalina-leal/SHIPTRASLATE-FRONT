import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:4001/api',
});

export async function fetchShipments() {
  const response = await api.get('/shipments');
  return response.data;
}

export async function fetchShipmentById(id) {
  const response = await api.get(`/shipments/${id}`);
  return response.data;
}

export async function saveShipment(shipment) {
  const response = await api.post('/shipments', shipment);
  return response.data;
}

export async function uploadEdiFile(file) {
  const formData = new FormData();
  formData.append('ediFile', file);
  const response = await api.post('/shipments/upload', formData);
  return response.data;
}
