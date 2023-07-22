import React, { useState } from 'react';
import { ImageBackground, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

// fonts
import { useFonts } from 'expo-font';

// icons
import FeatherIcon from 'react-native-vector-icons/Feather';

// carousel
import Carousel from 'react-native-snap-carousel';

// components
import BannerSlider from '../components/BannerSlider';
import {freeGames, paidGames, sliderData} from '../model/data';

import CustomSwitch from '../components/CustomSwitch';

// utils
import {windowWidth} from '../utils/Dimensions';
import ListItem from '../components/ListItem';

function HomeScreen({navigation}) {

    const [gamesTab, setGamesTab] = useState(1);

    const renderBanner = ({item, index}) => {
        return <BannerSlider data={item} />
    }

    const onSelectSwitch = (value) => {
        setGamesTab(value);
    }

    //-----------------------
    // load font
    const [fontsLoaded] = useFonts({
        'Roboto-Medium': require('../assets/fonts/Roboto-Medium.ttf'),
    });

    if (!fontsLoaded) {
        return null;
    }
    //-----------------------
    const gameListMap = {
        1:freeGames,
        2:paidGames
    }
    return (
        <SafeAreaView style={styles.containerMain}>
            <ScrollView style={{padding:20}}>
                {/* user profile icon */}
                <View style={styles.containerUserProfile}>
                    <Text style={styles.userProfileText}>Hello Rafael Papa</Text>
                    <TouchableOpacity onPress={()=>navigation.openDrawer()}>
                        <ImageBackground 
                            source={require('../assets/images/user-profile.jpg')}
                            style={styles.userProfilePic}
                            imageStyle={{borderRadius:25}}
                        />
                    </TouchableOpacity>
                </View>
                
                {/* search */}
                <View style={styles.containerSearch}>
                    <FeatherIcon 
                        name='search' 
                        size={20}
                        color="#C6C6C6"
                        style={styles.featherIcon} />
                    <TextInput placeholder='Search' />
                </View>
                
                {/* carousel */}
                <View style={styles.containerUpcomingGames}>
                    <Text style={styles.upcomingGamesText}>Upcoming Games</Text>
                    <TouchableOpacity onPress={()=> {}}>
                        <Text>See All</Text>
                    </TouchableOpacity>
                </View>
                <Carousel
                    ref={(c) => { this._carousel = c; }}
                    data={sliderData}
                    renderItem={renderBanner}
                    sliderWidth={windowWidth - 40} // subtract the padding 20 each side
                    itemWidth={300}
                    loop={true}
                />
                
                {/* switch selector */}
                <View style={{marginVertical:20}}>
                    <CustomSwitch 
                        selectionMode={1} 
                        option1={"Free to play"} 
                        option2={"Paid games"}
                        onSelectSwitch={onSelectSwitch}
                    />
                </View>

                {/* dynamic part */}
                { 
                    gameListMap[gamesTab].map(item => (
                        <ListItem 
                            key={item.id} 
                            photo={item.poster} 
                            title={item.title} 
                            subTitle={item.subtitle}
                            isFree={item.isFree}
                            price={item.price}
                        />
                    ))
                }
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    containerMain: {
        flex: 1,
        backgroundColor: '#fff',
    },
    containerSearch: {
        flexDirection: 'row',
        borderColor: '#C6C6C6',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 8,
    },
    containerUpcomingGames: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 15,
    },
    containerUserProfile: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    featherIcon: {
        marginRight:5,
    },
    userProfilePic:{
        width: 35,
        height: 35,
    },
    upcomingGamesText:{
        fontSize: 18,
        fontFamily:'Roboto-Medium',
    },
    userProfileText:{
        fontSize: 18,
        fontFamily:'Roboto-Medium',
    },
});

export default HomeScreen;