const url = require("url");
const http = require("http");
const fs = require("fs");

const callback = function(request, response) {
	/*
		let pathname = url.parse(request.url).pathname;

		console.log("request for "+pathname+" received");
	*/	

	fs.readFile("index.html", function(err, data) {
		let head = {
        	"content-type": "text/html"
        }

		if(err) {
			console.log(err);

			// HTTP Status: 404 : NOT FOUND
        	// Content Type: text/plain
        	response.writeHead(404, head);
		}
		else {
			//Page found	  
	        // HTTP Status: 200 : OK
	        // Content Type: text/plain
	        response.writeHead(200, head);
	        response.write(data.toString());
		}

		// send the response body
		response.end();
	});
};

http.createServer(callback).listen(666);
