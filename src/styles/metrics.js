import { Platform } from 'react-native';

export default {
  baseMargin: 24,
  basePadding: 20,
  smallPadding: 60,
  tinyPadding: 48,
  statusBarHeight: (Platform.OS === 'ios') ? 20 : 0,
  baseRadius: 3,
};
