import { StyleSheet } from 'react-native';

import Colors from '../../Utils/constants/Colors';
import { responsiveFontSize } from '../../Utils/function';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    marginHorizontal: 15,
  },
  customInputStyle: {
    backgroundColor: Colors.white,
  },
  outlineStyle: {
    borderColor: Colors.mediumGray,
  },
  cta: {
    marginTop: 10,
    alignSelf: 'center',
    paddingHorizontal: 20,
  },
  errorTxt: {
    fontSize: responsiveFontSize(11),
    color: 'red',
    marginLeft: 20,
  },
});

export default styles;
