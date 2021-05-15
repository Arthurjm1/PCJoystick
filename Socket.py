import asyncio
import websockets
import win32api
import win32con

ADDRESS = 'IP_ADDRESS'

commands = {
    'left': 37,
    'right': 39,
    'up': 38,
    'down': 40,
    'a' : 65,
    'b' : 66,
    'start': 13,
    'select': 32
}

def inputKey(key):
    win32api.keybd_event(key,0)    

def releaseKey(key):
    win32api.keybd_event(key, 0, win32con.KEYEVENTF_KEYUP, 0)

async def hello(websocket, path):
    while True:
        key = await websocket.recv()  

        if key == 'left down':
            inputKey(commands['left'])    
                    
        if key == 'right down':
            inputKey(commands['right'])          
                    
        if key == 'up down':
            inputKey(commands['up'])  
                    
        if key == 'down down':
            inputKey(commands['down'])  
                    
        if key == 'a down':
            inputKey(commands['a'])                      
                    
        if key == 'b down':
            inputKey(commands['b'])                
                    
        if key == 'start down':
            inputKey(commands['start'])  

        if key == 'select down':
            inputKey(commands['select'])  

        if key == 'left up':
            releaseKey(commands['left'])             
                    
        if key == 'right up':
            releaseKey(commands['right'])      
                    
        if key == 'up up':
            releaseKey(commands['up'])      
                    
        if key == 'down up':
            releaseKey(commands['down'])  
                                
        if key == 'a up':
            releaseKey(commands['a'])                       
                    
        if key == 'b up':
            releaseKey(commands['b'])  
                    
        if key == 'start up':
            releaseKey(commands['start'])  

        if key == 'select up':
            releaseKey(commands['select'])  
    

start_server = websockets.serve(hello, ADDRESS, 8765)

asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()