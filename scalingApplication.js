const childProcess = require("child_process");
const fs = require("fs");

// exec method
let execWorker = childProcess.exec("dir", function(err, stdout, stderr) {
	if(err) { return console.error(err); }

	console.log("stdout: "+stdout);
	console.log("stderr: "+stderr);
});

execWorker.on("exit", function(code) {
	console.log("process complete: %s", code);
});

// spawn method
let spawnWorker = childProcess.spawn("javac", ["-version"]);

spawnWorker.stdout.on("data", function(data) {
	console.log("stdout: %s", data);
});

spawnWorker.stderr.on("data", function(data) {
	console.log("stderr: %s", data);
});

spawnWorker.on("close", function(code) {
	console.log("child process exited with code %s", code);
});

spawnWorker.on("error", function(err) {
	console.log(err.stack);
});

console.log("program ended");