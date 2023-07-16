import { View, Text, ImageBackground, Image, StyleSheet } from 'react-native'
import React from 'react'

import {DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer'

const CustomDrawer = (props) => {
    return (
        <View style={styles.mainContainer}>
            <DrawerContentScrollView 
                {...props}
                contentContainerStyle={{backgroundColor: '#8200d6'}}
            >
                <ImageBackground source={require('../assets/images/menu-bg.jpeg')} style={styles.imageBackground}>
                    <Image source={require('../assets/images/user-profile.jpg')} style={styles.imageProfile}/>
                    <Text style={styles.userName}>John Doe</Text>
                </ImageBackground>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
            <View>
                <Text>Our Custom Text</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer:{
        flex: 1,
    },
    imageBackground:{
        padding: 20,
    },
    imageProfile:{
        height: 80,
        width: 80,
        borderRadius: 40,
        marginBottom:10,
    },
    userName:{
        color: '#fff',
        fontSize: 18,
        fontFamily:'Roboto-Medium',
    },

})


export default CustomDrawer