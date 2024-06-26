/*
 * CameraButtons.js
 * These are the buttons that control the camera.
 * 
 * Author: Dax McPartland
 * Date: July 29, 2023
*/
import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Entypo } from '@expo/vector-icons'
export default function CameraButton({title, onPress, icon, color}){
    return(
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Entypo name={icon} size={28} color={color ? color: '#fff'} />
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#fff',
        marginLeft: 10
    }
})