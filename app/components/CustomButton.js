import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

export default function CustomButton({label, onPress}) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.loginButton}>
            <Text style={styles.loginButtonText}>{label}</Text>
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