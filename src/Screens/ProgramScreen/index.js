import React from 'react';
import { View } from 'react-native';

import Typography from '../../Components/Common/Typography';
import withAuth from '../../Hoc';
import styles from './styles';

const ProgramScreen = () => (
  <View style={styles.container}>
    <Typography weight="Bold">ProgramScreen</Typography>
  </View>
);

export default withAuth(ProgramScreen);
