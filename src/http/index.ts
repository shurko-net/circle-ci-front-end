import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { AuthResponse } from '../models/responce/AuthResponse';

export const BASE_URL = 'https://localhost:44353/api';

const instance: AxiosInstance = axios.create({
  withCredentials: true,
  baseURL: BASE_URL,
});

instance.interceptors.request.use((config: AxiosRequestConfig) => {
  console.log(Boolean(config.headers));
  if (config.headers) {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    console.log(config);
  }

  return config;
});

instance.interceptors.response.use((config) => config, async (err) => {
  const originRequest = err.config;
  if (err.response.status === 401 && err.config && !err.config._isRetry) {
    originRequest._isRetry = true;
    try {
      const response = await axios.get<AuthResponse>(`${BASE_URL}/auth/refresh`, { withCredentials: true });
      localStorage.setItem('token', response.data.accessToken);
      return await instance.request(originRequest);
    } catch (e) {
      console.log('Not auth');
    }
  }
  throw err;
});

export default instance;
