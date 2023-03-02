import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback, useContext, useState } from 'react';
import { View, ScrollView } from 'react-native';
import { Text } from 'react-native-paper';
import PropTypes from 'prop-types';

import Typography from '../../Components/Common/Typography';
import LoginForm from '../../Components/Login/LoginForm';
import LoginProviders from '../../Components/Login/LoginProviders';
import { CLEAR_REQUEST_ROUTE } from '../../Context/actions';
import { AuthContext } from '../../Context/auth';
import styles from './styles';

const LoginScreen = ({ navigation: { navigate } }) => {
  const [loading, setLoading] = useState(true);
  const { state: { isAuthenticated, requestedRoute }, dispatch } = useContext(AuthContext);

  useFocusEffect(useCallback(() => {
    setLoading(true);
    if (isAuthenticated) {
      dispatch({ type: CLEAR_REQUEST_ROUTE });
      navigate(requestedRoute || 'Home');
    } else { setLoading(false); }
  }, [isAuthenticated, requestedRoute, navigate, dispatch]));

  return loading ? <Typography>Chargement...</Typography> : (
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
};

LoginScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default LoginScreen;
