import { AxiosResponse } from 'axios';
import instance from '../http';
import { AuthResponse } from '../models/responce/AuthResponse';

const AuthService = {

  login(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
    return instance.post<AuthResponse>('auth/login', { email, password });
  },

  registration(email: string, password: string, name: string, surname: string):
  Promise<AxiosResponse<AuthResponse>> {
    return instance.post<AuthResponse>('auth/registration', {
      email, password, name, surname,
    });
  },

  logout(): Promise<any> {
    return instance.post('auth/logout');
  },
  checkAuth(): Promise<void> {
    return instance.get('auth/refresh');
  },
};

export default AuthService;
