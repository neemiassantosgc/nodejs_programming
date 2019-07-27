// import Events module
let events = require("events");

// create Event Emitter object
let event_emitter = new events.EventEmitter();

/*
  	Bind event and event  handler as follows
	eventEmitter.on('eventName', eventHandler);
	
	Fire an event 
	eventEmitter.emit('eventName');
*/

// create a event handler
const connect_handler = function() {
	console.log("connection succesful");

	// fire the 'data received' event
	event_emitter.emit("data received");
};

// bind the connection event with handler
event_emitter.on("connection", connect_handler);

// bind the 'data received' event with the anonymous function
event_emitter.on("data received", function() {
	console.log("data received succesfully");
});

// Fire the connection event 
event_emitter.emit('connection');

console.log("Program Ended.\n");

//////////////////////////////////////////////
const hello_function = function() {
	console.log("hello world!");
}
event_emitter.on("hello", hello_function);
event_emitter.emit("hello");