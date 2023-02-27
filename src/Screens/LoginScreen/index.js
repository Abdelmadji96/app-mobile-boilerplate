import React from 'react';
import { View, ScrollView } from 'react-native';
import { Text } from 'react-native-paper';

import LoginForm from '../../Components/Login/LoginForm';
import LoginProviders from '../../Components/Login/LoginProviders';
import styles from './styles';

const LoginScreen = () => (
  <ScrollView contentContainerStyle={styles.container}>
    <LoginForm />
    <View style={styles.deviderContainer}>
      <View style={styles.devider} />
      <Text style={styles.orText}>Or singn in with</Text>
      <View style={styles.devider} />
    </View>
    <View>
      <LoginProviders />
    </View>
  </ScrollView>
);

export default LoginScreen;
