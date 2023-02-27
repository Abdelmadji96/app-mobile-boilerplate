import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: '#f9f9f9',
  },
  headerTitleStyle: {
    color: '#2b2b3d',
    fontWeight: 600,
  },
  shadow: {
    shadowColor: '#dd2a4917',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 5,
    shadowRadius: 3.5,
    elevation: 5,
  },
  mainIcon: {
    backgroundColor: '#dd2a49',
    borderRadius: 50,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -20,
    shadowColor: '#dd2a49',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  othersIcon: {
    backgroundColor: '#2b2b3d',
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
});

export default styles;
