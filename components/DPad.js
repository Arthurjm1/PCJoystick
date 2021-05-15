import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import DownButton from './DownButton'
import LeftButton from './LeftButton'
import RightButton from './RightButton'
import UpButton from './UpButton'

export default function DPad(props) {

    return (
        <View style={styles.buttonGroup}>
            <View>
                <UpButton press={props.press} release={props.release}></UpButton>
            </View>
            <View style={styles.hotizontalButtons}>
                <LeftButton press={props.press} release={props.release}></LeftButton>
                <RightButton press={props.press} release={props.release}></RightButton>
            </View>
            <View>
                <DownButton press={props.press} release={props.release}></DownButton>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonGroup: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    hotizontalButtons: {
        alignSelf: 'stretch',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    }
})