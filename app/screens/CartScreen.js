import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CartScreen = () => {
    return (
        <View style={styles.mainContainer}>
            <Text>CartScreen</Text>
        </View>
    )
}

export default CartScreen;

const styles = StyleSheet.create({
    mainContainer:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})