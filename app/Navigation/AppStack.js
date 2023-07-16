import { View, Text } from 'react-native'
import React from 'react'

// create the navigation stack
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
//const Stack = createNativeStackNavigator();

// create the drawer navigatior
import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();

// icons
import IoniconsIcon from 'react-native-vector-icons/Ionicons';

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
            drawerContent={props => <CustomDrawer {...props}/>}
            screenOptions={{
                headerShown: false,
                drawerActiveBackgroundColor: '#aa18ea',
                drawerActiveTintColor: '#fff', 
                drawerInactiveTintColor: '#333',
                drawerLabelStyle: {
                    marginLeft: -25,
                    fontFamily: 'Roboto-Medium',
                    fontSize: 15
                }
            }}
        >
            <Drawer.Screen name="Home" component={HomeScreen} options={{
                drawerIcon: ({color}) => (
                    <IoniconsIcon name='home-outline' size={22} color={color}/>
                )
            }}/>
            <Drawer.Screen name="Profile" component={ProfileScreen} options={{
                drawerIcon: ({color}) => (
                    <IoniconsIcon name='person-outline' size={22} color={color}/>
                )
            }}/>
            <Drawer.Screen name="Messages" component={MessagesScreen} options={{
                drawerIcon: ({color}) => (
                    <IoniconsIcon name='chatbox-ellipses-outline' size={22} color={color}/>
                )
            }}/>
            <Drawer.Screen name="Moments" component={MomentsScreen} options={{
                drawerIcon: ({color}) => (
                    <IoniconsIcon name='timer-outline' size={22} color={color}/>
                )
            }}/>
            <Drawer.Screen name="Settings" component={SettingsScreen} options={{
                drawerIcon: ({color}) => (
                    <IoniconsIcon name='settings-outline' size={22} color={color}/>
                )
            }}/>
        </Drawer.Navigator>
    )
}

export default AppStack;