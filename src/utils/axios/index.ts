import axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://localhost:7297/api',
//   headers: { 'X-Custom-Header': 'foobar' },
});

export default instance;
