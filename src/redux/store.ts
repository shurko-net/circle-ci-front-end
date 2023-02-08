import { combineReducers, legacy_createStore as createStore } from 'redux';
import authReducer from './auth-reducer';

const redusers = combineReducers({
  auth: authReducer,
});

const store = createStore(redusers);

export default store;
