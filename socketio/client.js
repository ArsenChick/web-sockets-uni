// client.js
 
const io = require('socket.io-client');
const socket = io('ws://localhost:8080');

let buffer = new ArrayBuffer(10 * 1024);
let view = new Uint32Array(buffer);

for (i = 0; i < view.length; i++) {
    view[i] = Math.random() * 10 + 1;
}

//console.log(view);

socket.on("connect", () => {
	setInterval( () => {
		socket.send('message from client');
	}, 2000);
	//socket.send(view);
});

socket.on("connect_error", (error) => {
	console.log(`Socket.IO error: ${error.message}`);
});

socket.on("disconnect", (error) => {
	console.log("disconnected from the server");
});

socket.on("message", (message) => {
	console.log(message);
});