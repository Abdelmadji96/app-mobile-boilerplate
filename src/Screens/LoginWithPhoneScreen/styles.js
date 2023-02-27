import { StyleSheet } from 'react-native';
import Colors from '../../Utils/constants/Colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    margin: 15,
  },
  customInputStyle: {
    backgroundColor: Colors.white,
  },
  outlineStyle: {
    borderColor: Colors.mediumGray,
  },
});

export default styles;
