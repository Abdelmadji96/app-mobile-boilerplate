/* eslint-disable react/no-unstable-nested-components */
import React, { useState } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';
import { useFormik } from 'formik';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import loginFormValidationSchema from './formSchema';
import { logError } from '../../Utils/function';
import Input from '../Common/Input';
import Colors from '../../Utils/constants/Colors';

const SignUpForm = () => {
  const [loading, setLoading] = useState(false);
  const { navigate } = useNavigation();

  const createUser = async (values) => {
    setLoading(true);
    try {
      const { email, password } = values;
      await auth().createUserWithEmailAndPassword(email, password);
      navigate('HomeScreen');
    } catch (error) {
      logError(error);
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
    onSubmit: createUser,
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
      <View style={styles.btnContainer}>
        <Button
          mode="contained"
          labelStyle={styles.registerBtn}
          icon={() => <Feather name="lock" size={20} color={Colors.white} />}
          onPress={handleSubmit}
          loading={loading}
        >
          Register
        </Button>
      </View>
    </View>
  );
};

export default SignUpForm;
