const fs = require("fs");

let data = "";
reader_stream = fs.createReadStream("input.txt");
reader_stream.setEncoding("utf-8");

// read the file and concatenate with the variable
reader_stream.on("data", function(content) {
	data += content;
});

// after finalized, sending to out
reader_stream.on("end", function() {
	console.log(data);
});

// trying error
reader_stream.on("error", function(err) {
	console.log(err.stack);
});

let out = "i can be anything";
writer_stream = fs.createWriteStream("output.txt");
writer_stream.write(out, "ascii");
writer_stream.end();

writer_stream.on("finish", function() {
	console.log("complete");
});

writer_stream.on("error", function(err) {
	console.log(err.stack);
});

pipein = fs.createReadStream("streamin.txt");
pipeout = fs.createWriteStream("streamout.txt");
pipein.pipe(pipeout);

console.log("program ended");