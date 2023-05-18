import React from 'react';
import { StyleSheet, Text, View } from "react-native";

function Home() {
    return (
        <View style={styles.containerMain}>
            <Text>Home Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    containerMain: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Home;