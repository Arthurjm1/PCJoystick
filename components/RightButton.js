import React from 'react';
import { Icon } from 'react-native-elements';
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function RightButton(props) {
    return (
        <TouchableOpacity style={styles.button} onPressIn={() => props.press('right')} onPressOut={() => props.release('right')}>
            <Icon name='keyboard-arrow-right' />
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