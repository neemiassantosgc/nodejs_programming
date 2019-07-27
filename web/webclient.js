const http = require("http");

const config = {
	host: "localhost",
	port: 666,
	path: "/index.html"
};

let callback = function(err, response) {
	if(err) { return console.error(err); }

	let body = "";
	response.on("data", function(content) {
		body += content;
	});

	response.on("end", function() {
		console.log(body);
	});
};

http.request(config, callback).end();