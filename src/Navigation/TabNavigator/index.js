import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './styles';
import HomeScreen from '../../Screens/HomeScreen';
import LoginScreen from '../../Screens/LoginScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    initialRouteName="Home"
    screenOptions={({ route }) => ({
      headerShown: false,
      title: route.name,
      tabBarActiveTintColor: '#2b2b3d',
      tabBarShowLabel: true,
      tabBarStyle: styles.tabBarStyle,
      tabBarLabelStyle: styles.headerTitleStyle,
      tabBarIcon: ({ focused }) => {
        let iconName;
        const focusedIcon = {
          styles: focused ? styles.mainIcon : styles.othersIcon,
          size: focused ? 30 : 20,
        };
        switch (route.name) {
          case 'Home':
            iconName = (
              <View style={focusedIcon.styles}>
                <Ionicons name={focused ? 'home' : 'home-outline'} size={focusedIcon.size} color="#fff" />
              </View>
            );
            break;
          case 'Login': case 'Profile':
            iconName = (
              <View style={focusedIcon.styles}>
                <Ionicons name={focused ? 'person' : 'person-outline'} size={focusedIcon.size} color="#fff" />
              </View>
            );
            break;
          case 'Gym':
            iconName = (
              <View style={focusedIcon.styles}>
                <Ionicons name={focused ? 'bed' : 'bed-outline'} size={focusedIcon.size} color="#fff" />
              </View>
            );
            break;
          default:
            iconName = null;
        }
        return iconName;
      },
    })}
  >
    <Tab.Screen name="Gym" component={HomeScreen} />
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Login" component={LoginScreen} />
  </Tab.Navigator>
);

export default TabNavigator;
