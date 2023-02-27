import { StyleSheet } from 'react-native';
import Colors from '../../Utils/constants/Colors';
import { responsiveFontSize } from '../../Utils/function';

const styles = StyleSheet.create({
  loginForm: {
    paddingHorizontal: 20,
  },
  formInput: {
    marginBottom: 20,
  },
  customInputStyle: {
    backgroundColor: Colors.white,
  },
  outlineStyle: {
    borderColor: Colors.mediumGray,
  },
  btnContainer: {
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  registerBtn: {
    fontSize: responsiveFontSize(18),
    padding: 5,
  },
});

export default styles;
