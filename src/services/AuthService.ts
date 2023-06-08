import { AxiosResponse } from 'axios';
import instance from '../http';
import { AuthResponse } from '../models/responce/AuthResponse';

const AuthService = {

  login(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
    return instance.post<AuthResponse>('auth/login', { email, password });
  },

  registration(email: string, password: string, name: string, surname: string):
  Promise<AxiosResponse<AuthResponse>> {
    return instance.post<AuthResponse>('auth/register', {
      email, password, name, surname,
    });
  },

  logout(): Promise<void> {
    return instance.post('auth/logout');
  },
};

export default AuthService;
