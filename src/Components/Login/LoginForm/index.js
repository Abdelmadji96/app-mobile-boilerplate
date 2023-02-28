/* eslint-disable react/no-unstable-nested-components */
import React, { useState } from 'react';
import { View } from 'react-native';
import { Button, Switch, Text } from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';
import { useFormik } from 'formik';
import auth from '@react-native-firebase/auth';

import styles from './styles';
import loginFormValidationSchema from './formSchema';
import { logError } from '../../../Utils/function';
import Input from '../../Common/Input';
import Colors from '../../../Utils/constants/Colors';

const LoginForm = () => {
  const [serverErr, setServerErr] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (values) => {
    try {
      setLoading(true);
      const { email, password } = values;
      await auth().signInWithEmailAndPassword(email, password);
      console.log('LOGGED');
    } catch (error) {
      logError(error);
      if (error.code === 'auth/user-not-found') {
        setServerErr('Ce compte n’existe pas, veuillez vous inscrire');
      } else if (error?.code === 'auth/wrong-password') {
        setServerErr('Mot de passe incorrecte');
      } else {
        setServerErr(error?.code);
      }
    } finally {
      setLoading(false);
    }
  };

  const {
    handleSubmit, values, handleChange, errors,
  } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: handleLogin,
    validationSchema: loginFormValidationSchema,
    validateOnChange: false,
  });

  return (
    <View>
      <View style={styles.loginForm}>
        <Input
          value={values.email}
          placeholder="Email Address"
          onChangeText={handleChange('email')}
          wrapperStyles={styles.formInput}
          inputStyles={styles.customInputStyle}
          outlineStyle={styles.outlineStyle}
          errors={errors.email}
          errorMessage={errors.email}
        />
        <Input
          value={values.password}
          placeholder="Password"
          onChangeText={handleChange('password')}
          wrapperStyles={styles.formInput}
          inputStyles={styles.customInputStyle}
          outlineStyle={styles.outlineStyle}
          errors={errors.password}
          errorMessage={errors.password}
        />
      </View>
      {serverErr && (<Text style={styles.serverErr}>{serverErr}</Text>)}

      <View style={styles.underForm}>
        <View style={styles.row}>
          <Switch color={Colors.secondary} />
          <Text>Keep me signed in</Text>
        </View>
        <View>
          <Text style={styles.forgetPassText}>Forgot password?</Text>
        </View>
      </View>
      <View style={styles.btnContainer}>
        <Button
          mode="contained"
          labelStyle={styles.registerBtn}
          icon={() => <Feather name="lock" size={20} color={Colors.white} />}
          onPress={handleSubmit}
          loading={loading}
        >
          LOGIN
        </Button>
      </View>
    </View>
  );
};

export default LoginForm;
