import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AppStack from './AppStack';

const RootNavigator = () => (
  <NavigationContainer>
    <AppStack />
  </NavigationContainer>
);

export default RootNavigator;
