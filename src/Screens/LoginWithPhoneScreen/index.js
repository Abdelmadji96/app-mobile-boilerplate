/* eslint-disable default-case-last */
import React, { useState } from 'react';
import { ScrollView, ToastAndroid } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import auth from '@react-native-firebase/auth';

import styles from './styles';
import { logError } from '../../Utils/function';
import Colors from '../../Utils/constants/Colors';

const LoginWithPhoneScreen = () => {
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState('');
  const [codeSent, setCodeSent] = useState(false);
  const [verificationId, setVerificationId] = useState(null);

  const handleCodeSentCallBack = (verificationIdP) => {
    setCodeSent(true);
    setVerificationId(verificationIdP);
  };

  const signWithCredentials = async () => {
    try {
      const credential = auth.PhoneAuthProvider.credential(verificationId, code);
      await auth().signInWithCredential(credential);
    } catch (error) {
      logError('Error with phone credentials', error);
      ToastAndroid.show("Une erreure c'est produite, veuillez réessayer!", ToastAndroid.SHORT);
    }
  };

  const handleSignInWithPhone = async (phoneNumber) => {
    try {
      auth().verifyPhoneNumber(phoneNumber, true)
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
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {!codeSent ? (
        <>
          <TextInput
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
            placeholder="Phone number"
            style={[styles.input, styles.customInputStyle]}
            placeholderTextColor={Colors.mediumGray}
            outlineStyle={styles.outlineStyle}
            label="Phone number"
            mode="outlined"
          />
          <Button onPress={() => handleSignInWithPhone(phone)}>Next</Button>
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
          <Button onPress={() => signWithCredentials(code)}>Confirm SMS code</Button>
        </>
      )}
    </ScrollView>
  );
};

export default LoginWithPhoneScreen;
