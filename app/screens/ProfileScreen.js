import { View, Text } from 'react-native'
import React from 'react'

const ProfileScreen = () => {
    return (
        <View style={styles.mainContainer}>
            <Text>ProfileScreen</Text>
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

export default ProfileScreen;