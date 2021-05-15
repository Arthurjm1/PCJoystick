import React from 'react';
import { Icon } from 'react-native-elements'
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function UpButton(props) {
    return (
        <TouchableOpacity style={styles.button} onPressIn={() => props.press('up')} onPressOut={() => props.release('up')}>
            <Icon name='keyboard-arrow-up' />
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