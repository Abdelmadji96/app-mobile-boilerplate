import { StyleSheet } from 'react-native';
import Colors from '../../../Utils/constants/Colors';
import { responsiveFontSize } from '../../../Utils/function';

const styles = StyleSheet.create({
  providerContainer: {
    paddingHorizontal: 20,
  },
  googleButton: {
    backgroundColor: Colors.white,
    borderColor: Colors.primaryDark,
    borderWidth: 0.5,
    borderRadius: 10,
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  googleButtonText: {
    marginLeft: 15,
    fontSize: responsiveFontSize(18),
    fontWeight: '600',
  },
  googleIcon: {
    height: 25,
    width: 25,
  },
});

export default styles;
