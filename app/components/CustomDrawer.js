import { View, Text, ImageBackground, Image, StyleSheet, TouchableOpacity } from 'react-native'
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
                {/* header */}
                <ImageBackground source={require('../assets/images/menu-bg.jpeg')} style={styles.imageBackground}>
                    <Image source={require('../assets/images/user-profile.jpg')} style={styles.imageProfile}/>
                    <Text style={styles.userName}>John Doe</Text>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.userBalance}>280 coins</Text>
                        <FontAwesome5 name='coins' size={14} color={'#fff'}/>
                    </View>
                </ImageBackground>

                {/*  list item */}
                <View style={styles.drawerListItems}>
                    <DrawerItemList {...props} />
                </View>
            </DrawerContentScrollView>
            <View style={styles.footerContainer}>
                <TouchableOpacity onPress={()=>{}} style={{paddingVertical:15}}>
                    <View style={styles.footerListItemContainer}>
                        <IoniconsIcon name='share-social-outline' size={22}/>
                        <Text style={styles.footerTextItem}>Tell a Friend</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{}} style={{paddingVertical:15}}>
                    <View style={styles.footerListItemContainer}>
                        <IoniconsIcon name='exit-outline' size={22}/>
                        <Text style={styles.footerTextItem}>Sign Out</Text>
                    </View>
                </TouchableOpacity>
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
    drawerListItems:{
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 10,
    },
    footerContainer:{
        padding: 20,
        borderTopWidth: 1,
        borderTopColor: '#ccc',
    },
    footerTextItem:{
        fontSize: 15,
        fontFamily:'Roboto-Medium',
        marginLeft: 5,
    },
    footerListItemContainer:{
        flexDirection: 'row', 
        alignItems: 'center',
    },

})


export default CustomDrawer