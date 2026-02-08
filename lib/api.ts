// lib/api.ts
import axios from 'axios';

const API_BASE_URL = `${process.env.NEXT_PUBLIC_API_URL}/api` || 'http://localhost:5000/api';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('adminToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Handle errors
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('adminToken');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export const adminAPI = {
  // Auth


  // Dashboard
  getDashboardStats: () => apiClient.get('/admin/dashboard/stats'),
  getActivityLogs: (params?: any) => apiClient.get('/admin/activity-logs', { params }),

  // Users
  getUsers: (params?: any) => apiClient.get('/admin/users', { params }),

  // Providers
  getProviders: (params?: any) => apiClient.get('/admin/providers', { params }),
  getPendingProviders: (params?: any) => apiClient.get('/admin/providers/pending', { params }),
  verifyProvider: (providerId: string, data: { approved: boolean; rejection_reason?: string }) =>
    apiClient.post(`/admin/providers/${providerId}/verify`, data),
};

export default apiClient;