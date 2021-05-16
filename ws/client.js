// client.js

const WebSocket = require('ws');
const url = 'ws://localhost:8080';
const connection = new WebSocket(url);

let buffer = new ArrayBuffer(100 * 1024);
let view = new Uint32Array(buffer);

for (i = 0; i < view.length; i++) {
    view[i] = Math.random() * 10 + 1;
}

//console.log(view);

connection.onopen = () => {
	setInterval( () => {
		connection.send("message from client")
	}, 2000);
	//connection.send(view);
}

connection.onerror = (error) => {
	console.log(`ws error: ${error.message}`);
}

connection.onmessage = (message) => {
	console.log(message.data);
}