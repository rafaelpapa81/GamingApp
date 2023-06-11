import React from 'react';
import { ImageBackground, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

// fonts
import { useFonts } from 'expo-font';

function Home() {

    //-----------------------
    // load font
    const [fontsLoaded] = useFonts({
        'Roboto-Medium': require('../assets/fonts/Roboto-Medium.ttf'),
    });

    if (!fontsLoaded) {
        return null;
    }
    //-----------------------

    return (
        <SafeAreaView style={styles.containerMain}>
            <ScrollView style={{padding:20}}>
                <View style={styles.containerUserProfileSection}>
                    <Text style={styles.userProfileText}>Hello Rafael Papa</Text>
                    <ImageBackground 
                        source={require('../assets/images/user-profile.jpg')}
                        style={styles.userProfilePic}
                        imageStyle={{borderRadius:25}}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    containerMain: {
        flex: 1,
        backgroundColor: '#fff',
    },
    containerUserProfileSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    userProfilePic:{
        width: 35,
        height: 35,
    },
    userProfileText:{
        fontSize: 16,
        fontFamily:'Roboto-Medium',
    },
});

export default Home;