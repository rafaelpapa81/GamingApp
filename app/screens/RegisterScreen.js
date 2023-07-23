import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// fonts
import { useFonts } from 'expo-font';

// icons
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';

// svg images
import RegistrationSVG from '../assets/images/misc/registration.svg';
import GoogleSVG from '../assets/images/misc/google.svg';
import FacebookSVG from '../assets/images/misc/facebook.svg';
import TwitterSVG from '../assets/images/misc/twitter.svg';

const LoginScreen = () => {

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
        <SafeAreaView style={styles.mainContainer}>
            <View style={styles.loginImgTextContainer}>
                <View style={styles.loginSVGImgContainer}>
                    <RegistrationSVG height={300} width={300} style={styles.loginSVGImg}/>
                </View>
                <Text style={styles.loginText}>Login</Text>
                
                {/* username input */}
                <View style={styles.loginInput}>
                    <MaterialIcons name='alternate-email' size={20} color={'#666'} style={styles.loginInputIcon} />
                    <TextInput placeholder='Email ID'style={styles.loginInputText} keyboardType='email-address'/>
                </View>
                
                {/* password input */}
                <View style={styles.loginInput}>
                    <IoniconsIcon name='ios-lock-closed-outline' size={20} color={'#666'} style={styles.loginInputIcon} />
                    <TextInput placeholder='Password'style={styles.loginInputText} secureTextEntry={true}/>
                    <TouchableOpacity onPress={()=>{}}>
                        <Text style={styles.passwdInputForgotText}>Forgot?</Text>
                    </TouchableOpacity>
                </View>
                
                {/* login button */}
                <TouchableOpacity onPress={()=>{}} style={styles.loginButton}>
                    <Text style={styles.loginButtonText}>Login</Text>
                </TouchableOpacity>
                
                {/* alternative login msg */}
                <Text style={styles.alterLoginText}>Or, login with ...</Text>

                {/* social media icons */}
                <View style={styles.socialMediaContainer}>
                    <TouchableOpacity onPress={()=>{}} style={styles.socialMediaIcon}>
                        <GoogleSVG height={24} width={24} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{}} style={styles.socialMediaIcon}>
                        <FacebookSVG height={24} width={24} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{}} style={styles.socialMediaIcon}>
                        <TwitterSVG height={24} width={24} />
                    </TouchableOpacity>
                </View>

                {/* new to app section */}
                <View style={styles.newToAppContainer}>
                    <Text>New to the app?</Text>
                    <TouchableOpacity onPress={()=>{}} >
                        <Text style={styles.registerText}>Register</Text>
                    </TouchableOpacity>
                </View>
                
                
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    alterLoginText:{
        textAlign: 'center',
        color: '#666',
        marginBottom: 30,
    },
    loginButton:{
        backgroundColor: '#AD40AF',
        padding: 20,
        borderRadius: 10,
        marginBottom: 30,
    },
    loginButtonText:{
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '700',
        color: '#fff',
    },
    loginText:{
        fontSize: 28,
        fontFamily:'Roboto-Medium',
        fontWeight: '500',
        color: '#333',
        marginBottom: 30,
    },
    loginImgTextContainer:{
        paddingHorizontal: 25,
    },
    loginInput:{
        flexDirection: 'row',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        paddingBottom: 8,
        marginBottom: 25,
    },
    loginInputIcon:{
        marginRight: 5,
    },
    loginInputText:{
        flex: 1,
        paddingVertical: 0,
    },
    loginSVGImgContainer:{
        alignItems: 'center',
    },
    loginSVGImg:{
        transform: [{rotate: '-5deg'}],
    },
    mainContainer:{
        flex: 1,
        justifyContent: 'center',
    },
    newToAppContainer:{
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 30,
    },
    passwdInputForgotText:{
        color: '#AD40AF',
        fontWeight: '700',
    },
    socialMediaIcon:{
        borderColor: '#ddd',
        borderWidth: 2,
        borderRadius: 10,
        paddingHorizontal: 30,
        paddingVertical: 10,
    }, 
    socialMediaContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 30,
    },
    registerText:{
        color: '#AD40AF',
        fontWeight: '700',
        marginLeft: 5,
    },
    
})

export default LoginScreen;