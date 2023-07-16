import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const MessagesScreen = () => {
    return (
        <View style={styles.mainContainer}>
            <Text>MessagesScreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default MessagesScreen;