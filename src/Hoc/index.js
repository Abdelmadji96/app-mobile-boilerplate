/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { AuthContext } from '../Context/auth';
import { REQUEST_ROUTE } from '../Context/actions';

const withAuth = (WrappedComponent) => {
  const WithAuth = (props) => {
    const { navigate } = useNavigation();
    const { state: { isAuthenticated }, dispatch } = useContext(AuthContext);
    const { name: requestedRoute } = useRoute();

    if (!isAuthenticated) {
      dispatch({ type: REQUEST_ROUTE, payload: requestedRoute });
      navigate('Login');
    }
    return (
      <WrappedComponent {...props} />
    );
  };
  return WithAuth;
};

export default withAuth;
