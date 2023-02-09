import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';

export const useAppDispatch: () => AppDispatch = useDispatch; // hook useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector; // hook useSelector

export const useAuth = () => {
  const { isLogged } = useAppSelector((state) => state.auth);
  return isLogged;
}; // hook useAuth
