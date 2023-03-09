import React from 'react';
import { ScrollView } from 'react-native';
import SignUpForm from '../../Components/SignUp';

import styles from './styles';

const SignUpScreen = () => (
  <ScrollView contentContainerStyle={styles.container}>
    <SignUpForm />
  </ScrollView>
);

export default SignUpScreen;
