import { View, Text } from 'react-native'
import React from 'react'

// create the navigation stack
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

// import screens
import HomeScreen from '../screens/HomeScreen';

const AppStack = () => {
    return (
        <Stack.Navigator initialRouteName='Onboarding' screenOptions={{headerShown: false}}>
            <Stack.Screen 
                name="Home" 
                component={HomeScreen} 
            />
        </Stack.Navigator>
    )
}

export default AppStack;