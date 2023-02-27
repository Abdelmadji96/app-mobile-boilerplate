import { StyleSheet } from 'react-native';
import Colors from '../../../Utils/constants/Colors';
import { responsiveFontSize } from '../../../Utils/function';

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
  underForm: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 15,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  forgetPassText: {
    color: Colors.secondary,
  },
  btnContainer: {
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  registerBtn: {
    fontSize: responsiveFontSize(18),
    padding: 5,
  },
  serverErr: {
    color: 'red',
    textAlign: 'center',
    marginTop: -10,
    marginBottom: 15,
  },
});

export default styles;
