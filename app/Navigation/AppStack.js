import { View, Text } from 'react-native'
import React from 'react'

// create the navigation stack
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
//const Stack = createNativeStackNavigator();

// create the drawer navigatior
import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();

// import components
import CustomDrawer from '../components/CustomDrawer';

// import screens
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import MessagesScreen from '../screens/MessagesScreen';
import MomentsScreen from '../screens/MomentsScreen';
import SettingsScreen from '../screens/SettingsScreen';



const AppStack = () => {
    return (
        <Drawer.Navigator 
            screenOptions={{headerShown: false}}
            drawerContent={props => <CustomDrawer {...props}/>}
        >
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Profile" component={ProfileScreen} />
            <Drawer.Screen name="Messages" component={MessagesScreen} />
            <Drawer.Screen name="Moments" component={MomentsScreen} />
            <Drawer.Screen name="Settings" component={SettingsScreen} />
        </Drawer.Navigator>
    )
}

export default AppStack;