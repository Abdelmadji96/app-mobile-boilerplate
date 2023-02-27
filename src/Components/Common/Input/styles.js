import { StyleSheet } from 'react-native';
import { responsiveFontSize } from '../../../Utils/function';

const styles = StyleSheet.create({
  input: {
    fontSize: responsiveFontSize(15),
  },
  errorTxt: {
    fontSize: responsiveFontSize(11),
    color: 'red',
  },
});

export default styles;
