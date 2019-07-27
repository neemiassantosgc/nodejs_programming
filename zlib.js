const fs = require("fs");
const zlib = require("zlib");

//compacting file
const compact = function() {
	fs.createReadStream("input.txt")
		.pipe(zlib.createGzip())
		.pipe(fs.createWriteStream("input.txt.gz"));
	console.log("file compacted");
}

// descompacting file
const descompact = function() {
	fs.createReadStream("input.txt.gz")
		.pipe(zlib.createGunzip())
		.pipe(fs.createWriteStream("output.txt"));
	console.log("file descompacted");
}

// verify if file exist
let compress = fs.createReadStream("input.txt")

compress.on("finish", function() {
	compact();
	descompact();
});

compress.on("error", function(err) {
	writer = fs.createWriteStream("input.txt");
	writer.write("i can be anything", "utf-8");
	writer.end();
	console.log("file created");

	compact();
	descompact();
});