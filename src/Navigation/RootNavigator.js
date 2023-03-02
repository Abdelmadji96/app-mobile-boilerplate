import React, { useCallback, useContext, useEffect } from 'react';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';

import auth from '@react-native-firebase/auth';

import AppStack from './AppStack';
import { AuthContext } from '../Context/auth';
import { AUTHORIZE_SIGNUP, LOGIN_SUCCESS } from '../Context/actions';

const RootNavigator = () => {
  const { dispatch } = useContext(AuthContext);
  const navigationRef = useNavigationContainerRef();

  const onAuthChanged = useCallback(async () => {
    const unsubscribe = auth().onAuthStateChanged(async (user) => {
      if (user) {
        dispatch({ type: AUTHORIZE_SIGNUP });
        dispatch({ type: LOGIN_SUCCESS, payload: user });
      }
    });
    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  useEffect(() => {
    onAuthChanged();
  }, [onAuthChanged]);

  return (
    <NavigationContainer ref={navigationRef}>
      <AppStack />
    </NavigationContainer>
  );
};

export default RootNavigator;
