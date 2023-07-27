import React, {useContext} from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// import navigation
//   the stack will be chosen accordinly after authentication
import AuthStack from './AuthStack'
import AppStack from './AppStack';
import { AuthContext } from '../context/AuthContext';


const AppNav = () => {

    const {isLoading, userToken} = useContext(AuthContext);

    if (isLoading){
        <View style={styles.acIndicator}>
            <ActivityIndicator size={'large'}/>
        </View>
    }

    return (
        <NavigationContainer>
            {userToken !== null ? <AppStack /> : <AuthStack />}
        </NavigationContainer>
    )
}

export default AppNav;

const styles = StyleSheet.create({
    acIndicator:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});