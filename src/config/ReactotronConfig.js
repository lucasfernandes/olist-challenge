import Reactotron from 'reactotron-react-native';
import { reactotronRedux as reduxPlugin } from 'reactotron-redux';

if (__DEV__) {
  const tron = Reactotron
    .configure()
    .use(reduxPlugin())
    .useReactNative()
    .connect();

  tron.clear();
  console.tron = tron;
}
