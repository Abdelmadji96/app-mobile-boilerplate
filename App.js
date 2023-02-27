import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SafeAreaView, StyleSheet } from 'react-native';
import { configureFonts, MD2LightTheme, Provider as PaperProvider } from 'react-native-paper';
import 'react-native-gesture-handler';

import RootNavigator from './src/Navigation/RootNavigator';

const styles = StyleSheet.create({
  safeAreaViewContainer: {
    flex: 1,
  },
});

const fontConfig = {
  ios: {
    regular: {
      fontFamily: 'Montserrat-Regular',
    },
    medium: {
      fontFamily: 'Montserrat-Medium',
    },
  },
  android: {
    regular: {
      fontFamily: 'Montserrat-Regular',
    },
    medium: {
      fontFamily: 'Montserrat-Medium',
    },
  },
};

const theme = {
  ...MD2LightTheme,
  fonts: configureFonts({ config: fontConfig, isV3: false }),
};

const App = () => (
  <PaperProvider theme={theme}>
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeAreaViewContainer}>
        <RootNavigator />
      </SafeAreaView>
    </SafeAreaProvider>
  </PaperProvider>
);

export default App;
