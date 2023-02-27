import React from 'react';
import { View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

import Typography from '../../Components/Common/Typography';
import styles from './styles';

const HomeScreen = () => {
  console.log('Home-Screen');
  return (
    <View style={styles.container}>
      <Typography weight="Bold">Ola Spa Gym</Typography>
      <Feather
        name="search"
        size={18}
      />
    </View>
  );
};

export default HomeScreen;
