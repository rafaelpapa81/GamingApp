import { View, Text } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// import navigation
//   the stack will be chosen accordinly after authentication
import AuthStack from './AuthStack'
import AppStack from './AppStack';

const AppNav = () => {
    return (
        <NavigationContainer>
            
            <AuthStack />
            {/* <AppStack /> */}
        </NavigationContainer>
    )
}

export default AppNav