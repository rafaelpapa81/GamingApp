import { View, Text } from 'react-native'
import React from 'react'

const SettingsScreen = () => {
    return (
        <View style={styles.mainContainer}>
            <Text>SettingsScreen</Text>
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

export default SettingsScreen;