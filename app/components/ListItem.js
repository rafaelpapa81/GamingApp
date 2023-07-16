import React from 'react';
import { StyleSheet, Image, View, Text, TouchableOpacity } from 'react-native';

function ListItem({photo, title, subTitle, isFree, price}) {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.imgContainer}>
                <Image source={photo} style={styles.imgIcon} />
                <View>
                    <Text style={styles.imgText}>
                        {subTitle}
                    </Text>
                    <Text style={{...styles.imgText, textTransform: 'uppercase'}}>
                        {title}
                    </Text>
                </View>
            </View>

            <TouchableOpacity style={styles.playButtonContainer}>
                <Text style={styles.playButtonText}>
                    {isFree == 'Yes' && 'Play'}
                    {isFree == 'No' && price}
                </Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
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
    },
    imgText:{
        fontSize: 14,
        color: '#333',
        fontFamily: 'Roboto-Medium',
    },
    playButtonContainer:{
        padding: 10,
        width: 100,
        backgroundColor: '#0aada8', 
        borderRadius: 10,
    },
    playButtonText:{
        color: '#fff',
        fontFamily: 'Roboto-Medium',
        fontSize: 14,
        textAlign: 'center',
    },
    
});

export default ListItem;