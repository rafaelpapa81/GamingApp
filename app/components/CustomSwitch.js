import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

function CustomSwitch({selectionMode, option1, option2, onSelectSwitch}){
    //const state = useState(selectionMode)
    //const getSelectionMode = state[0];    //previous value
    //const setSelectionMode = state[1];    //current value

    //de-structure array representation
    const [getSelectionMode, setSelectionMode] = useState(selectionMode);

    const updateSwitchData = (value) => {
        setSelectionMode(value);
        onSelectSwitch(value);
    }

    return (
        <View style={styles.containerLeftButton}>
            <TouchableOpacity 
                activeOpacity={1}
                onPress={() => updateSwitchData(1)}
                style={{...styles.leftButton, backgroundColor: getSelectionMode == 1 ? '#AD40AF' : '#E4E4E4'}}
            >
                <Text style={{...styles.leftBtnText, color: getSelectionMode == 1 ? 'white' : '#AD40AF'}}>{option1}</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                activeOpacity={1}
                onPress={() => updateSwitchData(2)}
                style={{...styles.rightButton, backgroundColor: getSelectionMode == 2 ? '#AD40AF' : '#E4E4E4'}}
            >
                <Text style={{...styles.rightBtnText, color: getSelectionMode == 2 ? 'white' : '#AD40AF'}}>{option2}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    containerLeftButton: {
        height: 44,
        width: '100%',
        backgroundColor: '#E4E4E4', 
        borderRadius: 10,
        borderColor: '#AD40AF',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    leftButton: {
        flex: 1,
        
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    rightButton: {
        flex: 1,
        
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    leftBtnText: {
        
        fontSize: 14,
        fontFamily: 'Roboto-Medium',
    },
    rightBtnText: {
        
        fontSize: 14,
        fontFamily: 'Roboto-Medium',
    },
    
});

export default CustomSwitch;