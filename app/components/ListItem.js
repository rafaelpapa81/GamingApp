import React from 'react';
import { StyleSheet, Image, View } from 'react-native';

function ListItem() {
    return (
        <View>
            <View style={styles.imgContainer}>
                <Image source={require('../assets/images/spiderman.webp')} style={styles.imgIcon} />

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    imgContainer:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    imgIcon:{
        width: 55,
        height: 55,
        borderRadius: 10,
        marginRight: 8,
    }
    
});

export default ListItem;