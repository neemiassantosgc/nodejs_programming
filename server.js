http_server = require("http");

http_server.createServer(function(request, response) {
	// Send HTTP reader
	// HTTP Status: 200: Ok
	// Content Type: text/plain
	response.writeHead(200, {"Content-Type": "text/plain"});

	// Send the response body as "Hello Web!"
	response.end("Hello Web!");
}).listen(8080);

console.log("server is running: http://127.0.0.1:8080");