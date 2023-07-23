import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

export default function InputField({label, icon, inputType, keyboardType, fieldButtonLabel, fieldButtonFunction}) {
    return (
        <View style={styles.loginInput}>
            <IoniconsIcon name='ios-lock-closed-outline' size={20} color={'#666'} style={styles.loginInputIcon} />
            <TextInput placeholder='Password'style={styles.loginInputText} secureTextEntry={true}/>
            <TouchableOpacity onPress={()=>{}}>
                <Text style={styles.passwdInputForgotText}>Forgot?</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
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
    passwdInputForgotText:{
        color: '#AD40AF',
        fontWeight: '700',
    },
});