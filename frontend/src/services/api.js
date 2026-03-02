import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const taxAPI = {
  // NTA 2025 CORRECTED PIT Calculator
  calculatePIT: async (data) => {
    const response = await api.post('/api/v1/calculate/pit', data);
    return response.data;
  },
  
  calculateVAT: async (data) => {
    const response = await api.post('/api/v1/calculate/vat', data);
    return response.data;
  },
  
  calculateRentRelief: async (data) => {
    const response = await api.post('/api/v1/calculate/rent-relief', data);
    return response.data;
  },
  
  getTaxBands: async () => {
    const response = await api.get('/api/v1/tax-bands');
    return response.data;
  },
};