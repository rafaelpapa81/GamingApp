import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const MomentsScreen = () => {
    return (
        <View style={styles.mainContainer}>
            <Text>MomentsScreen</Text>
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

export default MomentsScreen;