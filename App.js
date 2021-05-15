import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { StyleSheet, View } from 'react-native';
import AButton from './components/AButton';
import BButton from './components/BButton';
import DPad from './components/DPad';
import SelectButton from './components/SelectButton';
import StartButton from './components/StartButton';


export default function App() {


  const host = 'SOCKET_HOST'
  const port = 'SOCKET_PORT'
  const socket = new WebSocket(`ws://${host}:${port}`)
  var connected = false


  useEffect(() => {
    StatusBar.setHidden(true)
  })

  socket.onopen = () => {
    connected = true
  }

  const sendInput = (key) => {
    if (connected) {
      socket.send(key + ' down')
    }
  }

  const releaseKey = (key) => {
    if (connected) {
      socket.send(key + ' up')
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.dpad}>
        <DPad press={sendInput} release={releaseKey}></DPad>
      </View>
      <View style={styles.centerButtons}>
        <SelectButton press={sendInput} release={releaseKey}></SelectButton>
        <StartButton press={sendInput} release={releaseKey}></StartButton>
      </View>
      <View style={styles.buttons}>
        <BButton press={sendInput} release={releaseKey}></BButton>
        <AButton press={sendInput} release={releaseKey}></AButton>
      </View>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#222',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dpad: {
    flex: 1,
  },
  centerButtons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: '#777',
    padding: 10
  },
  buttons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  }
});
