const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
//const multer = require("multer");

const app = express();

// Create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(express.static("public"));
app.use(urlencodedParser);
//app.use(multer({ dest: "/tmp/" }));
app.use(cookieParser());

// This responds with "Hello World" on the homepage
app.get('/', function (request, response) {
   	console.log("Got a GET request for the homepage");
   	
   	fs.readFile("index.html", function(err, data) {
   		if(err) {
   			response.send("error 404 not found");
   		}
   		else {
   			response.send(data.toString());
   		}
   	});
})

// process_get response
app.get("/process_get", function(request, response) {
	hash = {
		first_name: request.query.first_name,
		second_name: request.query.second_name
	};
	console.log(request);
	response.send(JSON.stringify(hash));
});

// process_post response
app.post("/process_post", urlencodedParser, function(request, response) {
	hash = {
		first_name: request.body.first_name,
		second_name: request.body.second_name
	};
	console.log(request);
	response.send(JSON.stringify(hash));
});

// process file
app.post("/process_file", function(request, response) {
	console.log(request);

	console.log(request.files.file.path);

	fs.readFile(request.query.file, function(err, data) {
		if(err) {
			console.log(err);
		}
		else {
			let text = data.toString();
			console.log(text);
			response.send(text);
			response.send(request);
		}
	});
});

// process cookies
app.get("/process_cookie", function(request, response) {
	let cookie = {
		cookies: request.cookies
	};
	response.send(JSON.stringify(cookie));
	console.log("today is: "+request.cookies.hoje);
	console.log("tomorrow is: "+request.cookies.amanha);
});

// This responds a POST request for the homepage
app.post('/', function (request, response) {
   	console.log("Got a POST request for the homepage");
  	response.send('Hello POST');
})

// This responds a DELETE request for the /del_user page.
app.delete('/del_user', function (request, response) {
   	console.log("Got a DELETE request for /del_user");
   	response.send('Hello DELETE');
})

// This responds a GET request for the /list_user page.
app.get('/list_user', function (request, response) {
   	console.log("Got a GET request for /list_user");
   	response.send('Page Listing');
})

// This responds a GET request for abcd, abxcd, ab123cd, and so on
app.get('/ab*cd', function(request, response) { 
   	console.log("Got a GET request for /ab*cd");
   	response.send('Page Pattern Match');
})


const server = app.listen(8080, function() {
	let host = server.address().address;
	let port = server.address().port;

	console.log("connection on http://%s:%s", host, port);
});