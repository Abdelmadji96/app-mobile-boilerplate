import React, { createContext, useReducer, useMemo } from 'react';
import PropTypes from 'prop-types';

import {
  AUTHORIZE_SIGNUP, CLEAR_REQUEST_ROUTE, LOGIN_SUCCESS, LOGOUT, REQUEST_ROUTE,
} from './actions';

export const AuthContext = createContext();

const initialState = {
  user: null,
  isAuthenticated: false,
  isAuthorizedSignUp: false,
  requestedRoute: undefined,
};

const authReducer = (state, action) => {
  switch (action.type) {
    case AUTHORIZE_SIGNUP:
      return {
        ...state,
        isAuthenticated: false,
        isAuthorizedSignUp: true,
        user: null,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        isAuthorizedSignUp: false,
        user: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        isAuthorizedSignUp: false,
        user: null,
      };

    case REQUEST_ROUTE:
      return {
        ...state,
        requestedRoute: action.payload,
      };
    case CLEAR_REQUEST_ROUTE:
      return {
        ...state,
        requestedRoute: undefined,
      };
    default:
      return state;
  }
};

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  const contextValues = useMemo(() => ({ state, dispatch }), [state]);

  return (
    <AuthContext.Provider value={contextValues}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default AuthProvider;
