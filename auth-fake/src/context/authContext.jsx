import { createContext, useReducer, useContext } from 'react';

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const initialState = {
  isAuthenticated: false,
  username: '',
  lastVisitedPage: '/',
};

const authReducer = (state, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, isAuthenticated: true, username: action.payload.username, lastVisitedPage: action.payload.lastVisitedPage };
    case LOGOUT:
      return { ...state, isAuthenticated: false, username: '', lastVisitedPage: '/' };
    default:
      return state;
  }
};

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export const login = (username, lastVisitedPage) => {
  return { type: LOGIN, payload: { username, lastVisitedPage } };
};

export const logout = () => {
  return { type: LOGOUT };
};
