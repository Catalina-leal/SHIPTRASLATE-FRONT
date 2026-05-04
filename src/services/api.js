import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:4000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export async function fetchShipments() {
  const response = await api.get('/shipments');
  return response.data;
}

export async function saveShipment(shipment) {
  const response = await api.post('/shipments', shipment);
  return response.data;
}
