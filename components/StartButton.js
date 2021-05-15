import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function StartButton(props) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPressIn = {() => props.press('start')} onPressOut = {() => props.release('start')}>        
            </TouchableOpacity>
            <Text>Start</Text>
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