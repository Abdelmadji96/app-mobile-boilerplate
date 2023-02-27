import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator';
import SignUpScreen from '../Screens/SignUpScreen';
import LoginWithPhoneScreen from '../Screens/LoginWithPhoneScreen';

const Stack = createNativeStackNavigator();
const AppStack = () => (
  <Stack.Navigator initialRouteName="HomeScreen">
    <Stack.Screen name="HomeScreen" component={TabNavigator} options={{ title: undefined, headerShown: false }} />
    <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{ title: null, headerShown: false }} />
    <Stack.Screen name="LoginWithPhoneScreen" component={LoginWithPhoneScreen} options={{ title: null, headerShown: false }} />
  </Stack.Navigator>
);

export default AppStack;
