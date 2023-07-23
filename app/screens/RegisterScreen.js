import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// fonts
import { useFonts } from 'expo-font';

// icons
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';

// components
import InputField from '../components/InputField';
import CustomButton from '../components/CustomButton';

// svg images
import RegistrationSVG from '../assets/images/misc/registration.svg';
import GoogleSVG from '../assets/images/misc/google.svg';
import FacebookSVG from '../assets/images/misc/facebook.svg';
import TwitterSVG from '../assets/images/misc/twitter.svg';



const RegisterScreen = ({navigation}) => {

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
            <ScrollView showsVerticalScrollIndicator={false} style={styles.loginImgTextContainer}>
                <View style={styles.loginSVGImgContainer}>
                    <RegistrationSVG height={300} width={300} style={styles.loginSVGImg}/>
                </View>
                <Text style={styles.loginText}>Register</Text>

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

                {/* alternative login msg */}
                <Text style={styles.alterLoginText}>Or, register with email ...</Text>
                
                {/* username input */}
                {/* <View style={styles.loginInput}>
                    <MaterialIcons name='alternate-email' size={20} color={'#666'} style={styles.loginInputIcon} />
                    <TextInput placeholder='Email ID'style={styles.loginInputText} keyboardType='email-address'/>
                </View> */}

                {/* person full name */}
                <InputField 
                    label={'Full Name'} 
                    icon={
                        <IoniconsIcon name='person-outline' size={20} color={'#666'} style={styles.loginInputIcon} />
                    }
                />

                {/* email id */}
                <InputField 
                    label={'Email ID'} 
                    icon={
                        <MaterialIcons name='alternate-email' size={20} color={'#666'} style={styles.loginInputIcon} />
                    }
                    keyboardType={'email-address'}
                />

                {/* password input */}
                {/* <View style={styles.loginInput}>
                    <IoniconsIcon name='ios-lock-closed-outline' size={20} color={'#666'} style={styles.loginInputIcon} />
                    <TextInput placeholder='Password'style={styles.loginInputText} secureTextEntry={true}/>
                    <TouchableOpacity onPress={()=>{}}>
                        <Text style={styles.passwdInputForgotText}>Forgot?</Text>
                    </TouchableOpacity>
                </View> */}

                {/* password input */}
                <InputField 
                    label={'Password'} 
                    icon={
                        <IoniconsIcon name='ios-lock-closed-outline' size={20} color={'#666'} style={styles.loginInputIcon} />
                    }
                    inputType={'password'}
                />

                {/* confirm password input */}
                <InputField 
                    label={'Confirm Password'} 
                    icon={
                        <IoniconsIcon name='ios-lock-closed-outline' size={20} color={'#666'} style={styles.loginInputIcon} />
                    }
                    inputType={'password'}
                />
                
                {/* register button */}
                {/* <TouchableOpacity onPress={()=>{}} style={styles.loginButton}>
                    <Text style={styles.loginButtonText}>Register</Text>
                </TouchableOpacity> */}

                {/* date of birth */}
                <View style={styles.dateInput}>
                    <IoniconsIcon name='calendar-outline' size={20} color={'#666'} style={styles.loginInputIcon} />
                    <TouchableOpacity onPress={()=>{}}>
                        <Text style={styles.dateInputText}>Date of Birth</Text>
                    </TouchableOpacity>
                </View>

                {/* register button */}
                <CustomButton label={'Register'} onPress={() => {}}/>
                
                {/* new to app section */}
                <View style={styles.newToAppContainer}>
                    <Text>Already registered?</Text>
                    <TouchableOpacity onPress={()=>navigation.goBack()} >
                        <Text style={styles.registerText}>Login</Text>
                    </TouchableOpacity>
                </View>
                
                
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    alterLoginText:{
        textAlign: 'center',
        color: '#666',
        marginBottom: 30,
    },
    dateInput:{
        flexDirection: 'row',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        paddingBottom: 8,
        marginBottom: 30,
    },
    dateInputText:{
        color: '#666',
        marginLeft: 5,
        // marginTop: 5,
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

export default RegisterScreen;