import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './app/screens/HomeScreen';
import Main from './app/screens/MainScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Main'>
        <Stack.Screen name="Main" component={Main} options={{headerShown:false}} />
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// snippets

// imr > import React from 'react';
// slc > functional component
// https://marketplace.visualstudio.com/items?itemName=jundat95.react-native-snippet