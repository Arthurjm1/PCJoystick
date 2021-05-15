import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function StartButton(props) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPressIn = {() => props.press('select')} onPressOut = {() => props.release('select')}>        
            </TouchableOpacity>
            <Text>Select</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        textAlign: 'center'
     },
    button: {
        height: 30,
        width: 70,        
        backgroundColor: '#ccc',        
    }
})