import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const GameDetailsScreen = () => {
    return (
        <View style={styles.mainContainer}>
            <Text>GameDetailsScreen</Text>
        </View>
    )
}

export default GameDetailsScreen;

const styles = StyleSheet.create({
    mainContainer:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})