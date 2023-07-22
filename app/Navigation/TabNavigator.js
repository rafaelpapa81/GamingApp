import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


// import screens
import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import FavoriteScreen from '../screens/FavoriteScreen';


// create bottom tab navigator
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name='Home' component={HomeScreen} />
            <Tab.Screen name='Cart' component={CartScreen} />
            <Tab.Screen name='Favorite' component={FavoriteScreen} />
        </Tab.Navigator>
    );

}

export default TabNavigator;