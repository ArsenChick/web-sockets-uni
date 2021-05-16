// server.js

const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
    ws.on('message', (message) => {
        console.log("received a message");
        //console.log(message);
    })
});

wss.on('connection', (ws) => {
    setInterval( () => {
        ws.send("message to client");
    }, 2000);
});