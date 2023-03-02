import React, { useContext } from 'react';
import { TouchableOpacity, View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import auth from '@react-native-firebase/auth';
import PropTypes from 'prop-types';

import Typography from '../../Components/Common/Typography';
import styles from './styles';
import { AuthContext } from '../../Context/auth';
import { LOGOUT } from '../../Context/actions';
import { logError } from '../../Utils/function';

const HomeScreen = ({ navigation: { navigate } }: any) => {
  const { dispatch } = useContext(AuthContext);

  const logOut = async () => {
    try {
      await auth().signOut();
      dispatch({ type: LOGOUT });
    } catch (error) {
      logError(error);
    }
  };

  return (
    <View style={styles.container}>
      <Typography weight="Bold">Ola Spa Gym</Typography>
      <Feather
        name="search"
        size={18}
        onPress={logOut}
      />
      <TouchableOpacity onPress={() => navigate('ProgramScreen')} activeOpacity={0.8}>
        <Typography>GO TO ProgramScreen</Typography>
      </TouchableOpacity>
    </View>
  );
};

HomeScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default HomeScreen;
