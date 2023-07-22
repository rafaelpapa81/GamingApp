import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const GameDetailsScreen = ({navigation, route}) => {
    return (
        <View style={styles.mainContainer}>
            <Text>GameDetailsScreen</Text>
            {/* pass params if that param is present */}
            <Text>{route.params?.title}</Text>
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