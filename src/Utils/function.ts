/* eslint-disable no-console */
import { Dimensions, Platform, StatusBar } from 'react-native';

const isIphoneX = () => {
  const dimen = Dimensions.get('screen');
  const iphoneDimentions = [780, 812, 844, 896, 926];
  return (Platform.OS === 'ios' && !Platform.isTV && (iphoneDimentions.indexOf(dimen.height) > -1 || iphoneDimentions.indexOf(dimen.width) > -1));
};

export const responsiveFontSize = (fontSize: number, standardScreenHeight = 740) => {
  const { height, width } = Dimensions.get('screen');
  const isLanscape = width > height;
  const maxDimention = (isLanscape) ? width : height;
  const statusBarHeight = Platform.OS === 'ios' ? 78 : StatusBar.currentHeight || 0;
  const offset = (isLanscape) ? 0 : statusBarHeight;

  const deviceHeight = (isIphoneX() || Platform.OS === 'android') ? maxDimention - offset : maxDimention;
  const heightPercent = (fontSize * deviceHeight) / standardScreenHeight;
  return Math.round(heightPercent);
};

export const logError = (err: unknown | unknown[]) => console.log('Something was wrong whene ', err);
