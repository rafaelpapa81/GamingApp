import React from 'react';

// navigators
// this one manages the play/price button
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// this one manages the bottom icons 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// this one will allow you to get options and routes within multiple navigators
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

// import screens
import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import GameDetailsScreen from '../screens/GameDetailsScreen';

// icons
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import FeatherIcon from 'react-native-vector-icons/Feather';

// create the play/price button navigation to game-details
const Stack = createNativeStackNavigator();

// create bottom tab navigator
const Tab = createBottomTabNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
            <Stack.Screen name="GameDetails" component={GameDetailsScreen} options={({route}) => ({
                title: route.params?.title,
            })}/>
        </Stack.Navigator>
    )
}

const TabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: {backgroundColor: '#AD40AF'},
            tabBarInactiveTintColor: '#fff',
            tabBarActiveTintColor: 'yellow'
        }}>
            <Tab.Screen 
                name='Home2'    
                component={HomeStack} 
                options={({route}) => ({
                    //tabBarStyle: {display: 'none'}, // it has to be dynamic, because it disappear from homescreen
                    tabBarStyle: {
                        display: getTabBarVisibility(route),
                        backgroundColor: '#AD40AF',
                    },
                    tabBarIcon: ({color, size}) => (
                        <IoniconsIcon name='home-outline' color={color} size={size} />
                    )
                })}
            />
            <Tab.Screen name='Cart' component={CartScreen} options={{
                tabBarBadge: 3,
                tabBarBadgeStyle: {backgroundColor: 'yellow'},
                tabBarIcon: ({color, size}) => (
                    <FeatherIcon name='shopping-bag' color={color} size={size} />
                )
            }}/>
            <Tab.Screen name='Favorite' component={FavoriteScreen} options={{
                tabBarIcon: ({color, size}) => (
                    <IoniconsIcon name='heart-outline' color={color} size={size} />
                )
            }}/>
        </Tab.Navigator>
    );
};

const getTabBarVisibility = (route) => {
    // console.log(route);
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';
    // console.log(routeName);

    // based on the route name
    //  whe want to display or not the bottom-tab navigator (dynamic behavior)
    if( routeName == 'GameDetails' ) {
        return 'none';
    }

    return 'flex';

};

export default TabNavigator;