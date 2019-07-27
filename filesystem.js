const fs = require("fs");

// asynchronous function (this is better way)
fs.readFile("input.txt", function(err, data) {
	if(err) {
		return console.error(err);
	}
	console.log("from asynchronous function: "+data.toString());
})

// synchronous function
let data = fs.readFileSync("input.txt");
console.log("from synchronous function: "+data.toString());

// opening file
fs.open("input.txt", "r", function(err, fd) {
	if(err) { return console.error(err); }
	console.log("file opened: "+fd.toString());

	// closing file
	fs.close(fd, function(err) {
		if(err) { return console.error(err); }
	})
})

// get file's informations
fs.stat("input.txt", function(err, stats) {
	if(err) { return console.error(err); }
	console.log(stats);
})

console.log("program ended");