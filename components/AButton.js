import React from 'react';
import { Text, StyleSheet } from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';


export default function AButton(props) {

    return (        
            <TouchableOpacity onPressIn={() => props.press('a')} onPressOut={() => props.release('a')} style={styles.button}>
                <Text>A</Text>
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
        borderRadius: 50
    }
})