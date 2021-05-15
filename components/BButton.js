import React from 'react';
import { StyleSheet, Text } from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function BButton(props) {
    return (
        <TouchableOpacity onPressIn={() => props.press('b')} onPressOut={() => props.release('b')} style={styles.button}>
            <Text>B</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        width: 80,
        height: 80,
        backgroundColor: '#ccc',
        alignItems: 'center',
        justifyContent: 'center',        
        borderRadius: 50,
    }
})