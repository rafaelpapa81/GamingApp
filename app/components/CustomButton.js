import { Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function CustomButton() {
    return (
        <TouchableOpacity onPress={()=>{}} style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Register</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
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
});