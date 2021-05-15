import React from 'react';
import { Icon } from 'react-native-elements';
import {StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function LeftButton(props) {
    return (
        <TouchableOpacity style={styles.button} onPressIn={() => props.press('left')} onPressOut={() => props.release('left')}>

            <Icon name='keyboard-arrow-left' />

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        height: 65,
        width: 65,
        backgroundColor: '#ccc',
        alignItems: 'center',
        justifyContent: 'center',        
    }
})