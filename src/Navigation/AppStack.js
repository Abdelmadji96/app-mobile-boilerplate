import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TabNavigator from './TabNavigator';
import SignUpScreen from '../Screens/SignUpScreen';
import LoginWithPhoneScreen from '../Screens/LoginWithPhoneScreen';
import ProgramScreen from '../Screens/ProgramScreen';

const Stack = createNativeStackNavigator();

const AppStack = () => (
  <Stack.Navigator initialRouteName="HomeScreen">
    <Stack.Group>
      <Stack.Screen name="Tab" component={TabNavigator} options={{ title: undefined, headerShown: false }} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{ title: null, headerShown: false }} />
      <Stack.Screen name="LoginWithPhoneScreen" component={LoginWithPhoneScreen} options={{ title: null, headerShown: false }} />
    </Stack.Group>
    <Stack.Group>
      <Stack.Screen name="ProgramScreen" component={ProgramScreen} options={{ title: null }} />
    </Stack.Group>
  </Stack.Navigator>
);

export default AppStack;
