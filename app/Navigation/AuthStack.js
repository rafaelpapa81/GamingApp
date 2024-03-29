import { View, Text } from 'react-native'
import React from 'react'

// create the navigation stack
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

// import screens
import OnboardingScreen from '../screens/OnboardingScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';

const AuthStack = () => {
    return (
        <Stack.Navigator initialRouteName='Onboarding' screenOptions={{headerShown: false}}>
            <Stack.Screen 
                name="Onboarding" 
                component={OnboardingScreen} 
            />
            <Stack.Screen 
                name="Login" 
                component={LoginScreen} 
            />
            <Stack.Screen 
                name="Register" 
                component={RegisterScreen} 
            />
        </Stack.Navigator>
    )
}

export default AuthStack;