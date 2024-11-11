import React, { createContext, useReducer, useContext } from 'react';

const initialState = { activeRoute: '/' };

const routeReducer = (state, action) => {
  switch (action.type) {
    case 'SET_ACTIVE_ROUTE':
      return { ...state, activeRoute: action.payload };
    default:
      return state;
  }
};

const RouteContext = createContext();

export const useRoute = () => useContext(RouteContext);

export const RouteProvider = ({ children }) => {
  const [state, dispatch] = useReducer(routeReducer, initialState);

  return (
    <RouteContext.Provider value={{ state, dispatch }}>
      {children}
    </RouteContext.Provider>
  );
};
