import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FavoriteScreen = () => {
    return (
        <View style={styles.mainContainer}>
            <Text>FavoriteScreen</Text>
        </View>
    )
}

export default FavoriteScreen;

const styles = StyleSheet.create({
    mainContainer:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})