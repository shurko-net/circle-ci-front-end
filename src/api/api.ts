import axios, { AxiosInstance } from 'axios';

const instance: AxiosInstance = axios.create({
  baseURL: 'https://localhost:7297/',
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' },
});

interface PostCreate {
  idUser: number;
  idCategory: number;
  date: any;
  postContent: string;
  title: string;
  likes: number;
}

interface UpdateCategory {
  idCategory: number;
  name: string;
}

interface UserAuth {
  email: string,
  password: string,
}

interface CreateUser {
  name: string,
  surname: string,
  email: string,
  password: string,
}

export const getUserImage = (id:number): Promise<void> => instance.get<void>(`api/UserImage/${id}`)
  .then((response) => response.data)
  .catch((error) => console.error(error));

export const postImage = (formData:any): Promise<void> => instance.post<void>('api/PostImage', formData)
  .then((response) => response.data)
  .catch((error) => console.error(error));

export const createPost = ({
  idUser, idCategory, date, postContent, title, likes,
}:PostCreate): Promise<void> => instance.post<void>('api/Post', {
  idUser, idCategory, date, postContent, title, likes,
})
  .then((response) => response.data)
  .catch((error) => console.error(error));

export const updateCategory = ({
  idCategory, name,
}:UpdateCategory): Promise<void> => instance.post<void>('api/Category', {
  idCategory, name,
})
  .then((response) => response.data)
  .catch((error) => console.error(error));

export const userLogin = ({
  email, password,
}:UserAuth): Promise<void> => instance.post<void>('auth/Login', {
  email, password,
})
  .then((response) => response.data)
  .catch((error) => console.error(error));

export const createUser = ({
  name, surname, email, password,
}:CreateUser): Promise<void> => instance.post<void>('api/User', {
  name, surname, email, password,
})
  .then((response) => response.data)
  .catch((error) => console.error(error));

export const getPost = (): Promise<void> => instance.get<void>('api/Post')
  .then((response) => response.data)
  .catch((error) => console.error(error));

export const getUser = (id:number): Promise<any> => instance.get<any>(`api/User/${id}`)
  .then((response) => response.data)
  .catch((error) => console.error(error));

export const getPostImage = (id:any): Promise<void> => instance.get<void>(`api/PostImage/${id}`)
  .then((response) => response.data)
  .catch((error) => console.error(error));

export const getPostById = (id:any): Promise<void> => instance.get<void>(`api/Post/${id}`)
  .then((response) => response.data)
  .catch((error) => console.error(error));

export const getPostLike = (postId:any, id:number): Promise<void> => instance.get<void>(`api/Like/${postId}/${id}`)
  .then((response) => response.data)
  .catch((error) => console.error(error));

export const getUserFollow = (idUser:any, id:number): Promise<void> => instance.get<void>(`api/Follow/${idUser}/${id}`)
  .then((response) => response.data)
  .catch((error) => console.error(error));
