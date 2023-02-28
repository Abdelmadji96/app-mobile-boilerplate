/* eslint-disable default-case-last */
import React, { useState } from 'react';
import { ScrollView, ToastAndroid } from 'react-native';
import { Button, Caption, TextInput } from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import { useFormik } from 'formik';

import styles from './styles';
import { logError } from '../../Utils/function';
import Colors from '../../Utils/constants/Colors';
import phoneSchema from './phoneSchema';

const LoginWithPhoneScreen = () => {
  const [code, setCode] = useState('');
  const [codeSent, setCodeSent] = useState(false);
  const [verificationId, setVerificationId] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleCodeSentCallBack = (verificationIdP) => {
    setCodeSent(true);
    setVerificationId(verificationIdP);
  };

  const signWithCredentials = async () => {
    try {
      const credential = auth.PhoneAuthProvider.credential(verificationId, code);
      await auth().signInWithCredential(credential);
      console.log('CONFIRMED');
    } catch (error) {
      logError('Error with phone credentials', error);
      // ToastAndroid.show("Une erreure c'est produite, veuillez réessayer!", ToastAndroid.SHORT);
    }
  };

  const handleSignInWithPhone = async (values) => {
    setLoading(true);
    try {
      auth().verifyPhoneNumber(values.phone, true)
        .on('state_changed', async (phoneAuthSnapshot) => {
          switch (phoneAuthSnapshot.state) {
            case auth.PhoneAuthState.AUTO_VERIFIED:
              signWithCredentials(phoneAuthSnapshot.verificationId, phoneAuthSnapshot.code);
              break;
            case auth.PhoneAuthState.AUTO_VERIFY_TIMEOUT:
            case auth.PhoneAuthState.CODE_SENT:
              handleCodeSentCallBack(phoneAuthSnapshot.verificationId);
              break;
            default:
            case auth.PhoneAuthState.ERROR:
              ToastAndroid.show("Une erreure c'est produite, veuillez réessayer!", ToastAndroid.SHORT);
              break;
          }
        }, (error) => {
          ToastAndroid.show("Une erreure c'est produite, veuillez réessayer!", ToastAndroid.SHORT);
          logError(error);
        });
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
      phone: '',
    },
    onSubmit: handleSignInWithPhone,
    validationSchema: phoneSchema,
    validateOnChange: false,
  });

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {!codeSent ? (
        <>
          <TextInput
            value={values.phone}
            onChangeText={handleChange('phone')}
            keyboardType="phone-pad"
            placeholder="+213XXXXXXXXX"
            style={[styles.input, styles.customInputStyle]}
            placeholderTextColor={Colors.mediumGray}
            outlineStyle={styles.outlineStyle}
            label="Phone number"
            mode="outlined"
            error={errors.phone}
          />
          {errors.phone && <Caption style={styles.errorTxt}>{errors.phone}</Caption>}

          <Button
            mode="contained"
            onPress={handleSubmit}
            loading={loading}
            style={styles.cta}
          >
            Next
          </Button>
        </>
      ) : (
        <>
          <TextInput
            keyboardType="numeric"
            placeholder="Code from SMS"
            value={code}
            onChangeText={setCode}
            style={styles.input}
            inputStyles={styles.customInputStyle}
            outlineStyle={styles.outlineStyle}
            label="Code from SMS"
            mode="outlined"
          />
          <Button
            mode="contained"
            style={styles.cta}
            onPress={() => signWithCredentials(code)}
          >
            Confirm SMS code
          </Button>
        </>
      )}
    </ScrollView>
  );
};

export default LoginWithPhoneScreen;
