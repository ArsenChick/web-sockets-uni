// server.js

const io = require('socket.io')(8080);

io.on('connection', (socket) => {
	//console.log("a user connected");
	socket.on('message', (message) => {
		console.log("received message");
		console.log(message);
	});
});

io.on('connection', (socket) => {
	setInterval( () => {
		socket.send("message to client");
	}, 2000);
});