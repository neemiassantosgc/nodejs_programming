// import fs module
const fs = require("fs");

// bind async function with the anonymous function(callback)
fs.readFile("input.txt", function(err, data) {
	if(err) {
		console.log(err.stack);
		return;
	}
	console.log(data.toString());
});
console.log("program ended.\n");

///////////////////////////////////////////////
object = {
	msg: "hello world!",
	asyncFunction: async function() {
		console.log(this.msg);
	}
}

object.asyncFunction(object.msg, function(err) {
	if(err) {
		console.log(err.stack);
		return;
	}
	console.log("success!");
});
console.log("program ended");
