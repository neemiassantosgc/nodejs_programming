let fs = require("fs");

/*
let data = fs.readFileSync("text.txt");
console.log(data.toString());
*/

fs.readFile("text.txt", function(err, out) {
	if(err) { return console.log(err); }
	console.log(out.toString());
});

console.log("program ended");