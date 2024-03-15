import {createContext, useContext} from 'react';
import {UserContext} from './UserContext';

export const AppContext = createContext();

const useAppState = () => ({
  App: useContext(AppContext),
  User: useContext(UserContext),
});
export default useAppState;
