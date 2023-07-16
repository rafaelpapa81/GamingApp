import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './app/screens/HomeScreen';
import Onboarding from './app/screens/OnboardingScreen';
import AuthStack from './app/Navigation/AuthStack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator initialRouteName='Main'>
        <Stack.Screen name="Onboarding" component={Onboarding} options={{headerShown:false}} />
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
      </Stack.Navigator> */}
      <AuthStack />
    </NavigationContainer>
  );
}

// snippets
//  -install extension: React Native Tools
//  -install extension: ES7+ React/Redux/React-Native snippets

// rnfe > reactNativeFunctionalExportComponent
// imr > import React from 'react';
// slc > functional component
// https://marketplace.visualstudio.com/items?itemName=jundat95.react-native-snippet

