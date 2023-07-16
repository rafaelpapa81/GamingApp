import { View, Text, ImageBackground, Image, StyleSheet } from 'react-native'
import React from 'react'

// fonts
import { useFonts } from 'expo-font';

// icons
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

import {DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer'

const CustomDrawer = (props) => {
    
    //-----------------------
    // load font
    const [fontsLoaded] = useFonts({
        'Roboto-Medium': require('../assets/fonts/Roboto-Medium.ttf'),
        'Roboto-Regular': require('../assets/fonts/Roboto-Regular.ttf'),
    });

    if (!fontsLoaded) {
        return null;
    }
    //-----------------------

    return (
        <View style={styles.mainContainer}>
            <DrawerContentScrollView 
                {...props}
                contentContainerStyle={{backgroundColor: '#8200d6'}}
            >
                <ImageBackground source={require('../assets/images/menu-bg.jpeg')} style={styles.imageBackground}>
                    <Image source={require('../assets/images/user-profile.jpg')} style={styles.imageProfile}/>
                    <Text style={styles.userName}>John Doe</Text>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.userBalance}>280 coins</Text>
                        <FontAwesome5 name='coins' size={14} color={'#fff'}/>
                    </View>
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
        marginBottom: 5,
    },
    userBalance:{
        color: '#fff',
        fontFamily:'Roboto-Regular',
        marginRight: 5,
    },

})


export default CustomDrawer