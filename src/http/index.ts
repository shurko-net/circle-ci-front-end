import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

export const BASE_URL = 'https://localhost:44353/api';

const instance: AxiosInstance = axios.create({
  withCredentials: true,
  baseURL: BASE_URL,
});

instance.interceptors.request.use((config: AxiosRequestConfig) => {
  if (config.headers) {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  }
  return config;
});

export default instance;
