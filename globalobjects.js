// file name
console.log(__filename);

// dir name
console.log(__dirname);

// sleep
const timeout = setTimeout(function() {
	console.log("running...");
}, 1000);

clearTimeout(timeout);

const interval = setInterval(function() {
	console.log("interval");
}, 1000)

clearTimeout(interval);
