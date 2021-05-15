# PC Joystick

An React Native app that allows you to use your smartphone as an controller. It uses python Websocket to communicate with Windows OS.

The controller design is based on NES contorller.



## Installation

### Requirements

```
Node.js
Expo
Python
pywin32 extension for Python
```

Set up the socket address on ```Socket.py```, then inform the same on ```App.js```. Be sure to also inform the sockets port.

On the app folder run:

```
python Socket.py
npm install
npm start
```

Now, you should have it running.