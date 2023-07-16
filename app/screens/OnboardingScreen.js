import React from 'react';
//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
//import Svg, { Path } from "react-native-svg"

// icons
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// fonts
import { useFonts } from 'expo-font';

// colors
import colors from '../config/colors';

// svg
import GamingImg from '../assets/gaming.svg';
//import ButterflyImg from './app/assets/floral-butterfly.svg';

function OnboardingScreen({navigation}) {

    //-----------------------
    // load font
    const [fontsLoaded] = useFonts({
        'Roboto-MediumItalic': require('../assets/fonts/Roboto-MediumItalic.ttf'),
    });

    if (!fontsLoaded) {
        return null;
    }
    //-----------------------

    return (
    <SafeAreaView style={styles.container}>
        <View style={styles.containerText}>
            <Text style={styles.mainTitleText}>GAMEON</Text>
            {/*<StatusBar style="auto" />*/}
        </View>
        <View style={styles.containerImg}>
            <GamingImg width={300} height={300} style={styles.mainImg}/>
        </View>
        {/*<ButterflyImg width={300} height={300} fill={'red'}/>*/}
        <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.letsGoButton}>
            <Text style={styles.arrowFwButton}>Let's Begin</Text>
            <MaterialIcons name="arrow-forward-ios" size={22} color='#fff' />
        </TouchableOpacity>
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    arrowFwButton: {
        fontFamily:'Roboto-MediumItalic',
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.white,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerImg: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerText: {
        marginTop: 20,
    },
    letsGoButton: {
        backgroundColor: colors.secondary,
        padding: 20,
        width:'90%',
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 50,
    },
    mainImg: {
        transform: [{rotate: '-15deg'}],
    },
    mainTitleText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: colors.primary,
    },
});

export default OnboardingScreen;