import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import { Text } from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import { logError } from '../../../Utils/function';
import Colors from '../../../Utils/constants/Colors';

GoogleSignin.configure({
  webClientId: '1080823891565-gjd6sqrqikr5tbdftoc3lcai1no4cmat.apps.googleusercontent.com',
});

const LoginProviders = () => {
  const { navigate } = useNavigation();

  const googleSignIn = async () => {
    try {
      const { idToken } = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      await auth().signInWithCredential(googleCredential);
    } catch (error) {
      logError(error);
    }
  };

  return (
    <View style={styles.providerContainer}>
      <TouchableOpacity style={styles.googleButton} onPress={() => navigate('SignUpScreen')}>
        <Text style={styles.googleButtonText}>SignUp with email</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.googleButton} onPress={googleSignIn}>
        <Image
          style={styles.googleIcon}
          source={{
            uri: 'https://i.ibb.co/j82DCcR/search.png',
          }}
        />
        <Text style={styles.googleButtonText}>SignIn with Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.googleButton} onPress={() => navigate('LoginWithPhoneScreen')}>
        <Feather name="phone" size={26} color={Colors.black} />
        <Text style={styles.googleButtonText}>with Phone number</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginProviders;
