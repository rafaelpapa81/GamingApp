import React from "react";
import { StyleSheet, Image, View } from 'react-native'

function BannerSlider({data}){
    return (
        <View>
            <Image source={data.image}  style={styles.imageItem}/>
        </View>
    )
}

const styles = StyleSheet.create({
    imageItem: {
        height:150,
        width:300,
        borderRadius:10,
    },
    
});

export default BannerSlider;