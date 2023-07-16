import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './app/screens/HomeScreen';
import Onboarding from './app/screens/OnboardingScreen';
import AuthStack from './app/Navigation/AuthStack';
import AppStack from './app/Navigation/AppStack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator initialRouteName='Main'>
        <Stack.Screen name="Onboarding" component={Onboarding} options={{headerShown:false}} />
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
      </Stack.Navigator> */}

      {/* <AuthStack /> */}

      <AppStack />
    </NavigationContainer>
  );
}

// snippets
//  -install extension: React Native Tools
//  -install extension: ES7+ React/Redux/React-Native snippets

// rnfe > reactNativeFunctionalExportComponent
// rnss > reactNativeStylesheetStyle
// imr > import React from 'react';
// slc > functional component
// https://marketplace.visualstudio.com/items?itemName=jundat95.react-native-snippet

