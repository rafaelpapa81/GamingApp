import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


// import screens
import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import FavoriteScreen from '../screens/FavoriteScreen';

// icons
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import FeatherIcon from 'react-native-vector-icons/Feather';


// create bottom tab navigator
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
        }}>
            <Tab.Screen name='Home2' component={HomeScreen} options={{
                tabBarIcon: ({color, size}) => (
                    <IoniconsIcon name='home-outline' color={color} size={size} />
                )
            }}/>
            <Tab.Screen name='Cart' component={CartScreen} />
            <Tab.Screen name='Favorite' component={FavoriteScreen} />
        </Tab.Navigator>
    );

}

export default TabNavigator;