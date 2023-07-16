import { View, Text } from 'react-native'
import React from 'react'

// create the navigation stack
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
//const Stack = createNativeStackNavigator();

// create the drawer navigatior
import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();

// import screens
import HomeScreen from '../screens/HomeScreen';

const AppStack = () => {
    return (
        <Drawer.Navigator initialRouteName='Onboarding' screenOptions={{headerShown: false}}>
            <Drawer.Screen 
                name="Home" 
                component={HomeScreen} 
            />
        </Drawer.Navigator>
    )
}

export default AppStack;