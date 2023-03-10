import React, { useCallback, useContext, useEffect } from 'react';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

import AppStack from './AppStack';
import { AuthContext } from '../Context/auth';
import { AUTHORIZE_SIGNUP, LOGIN_SUCCESS } from '../Context/actions';
import RemotePushController from '../Services/RemotePushController';
import ForegroundHandler from '../Services/ForegroundHandler';

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

  useEffect(() => {
    // firebasePushSetup();
    // notificationListener();
  }, []);

  return (
    <NavigationContainer ref={navigationRef}>
      <ForegroundHandler />
      <AppStack />
      <RemotePushController />
    </NavigationContainer>
  );
};

export default RootNavigator;
