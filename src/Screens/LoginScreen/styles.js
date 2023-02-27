import { StyleSheet } from 'react-native';
import Colors from '../../Utils/constants/Colors';

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    backgroundColor: Colors.background,
    flex: 1,
  },
  headerTitle: {
    color: Colors.white,
  },
  deviderContainer: {
    paddingHorizontal: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  devider: {
    backgroundColor: Colors.secondary,
    height: 0.6,
    flex: 1,
  },
  orText: {
    color: '#bcbbbe',
    fontWeight: 500,
    paddingHorizontal: 15,
  },
});

export default styles;
