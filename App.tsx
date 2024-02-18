/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import ManageNavigation from './src/component/navigation/ManageNavigation';
import Onboarding1 from './src/component/events/Tucomponent/Onboarding1';
import Onboarding2 from './src/component/events/Tucomponent/Onboarding2';
import Onboarding3 from './src/component/events/Tucomponent/Onboarding3';
import SplashScreen from './src/component/events/Tucomponent/SplashScreen';

function App(): React.JSX.Element {
  return (
    <>
      {/* <Onboarding1></Onboarding1> */}
      {/* <Onboarding2></Onboarding2> */}
      {/* <Onboarding3></Onboarding3> */}
      <SplashScreen></SplashScreen>
    </>
  );
}

export default App;
