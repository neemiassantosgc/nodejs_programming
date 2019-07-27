const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");

const app = express();

let urlEncodedParser = bodyParser.urlencoded({ extended: false });

app.use(urlEncodedParser);

// Home Page
app.get("/", function(request, response) {
	fs.readFile(__dirname+"\\index.html", function(err, data) {
		if(err) { return console.error(err); }
		console.log("Home Page request");
		response.send(data.toString());
	});
});

// List Users
app.get("/listUsers", function(request, response) {
	fs.readFile(__dirname+"\\users.json",  "utf8", function(err, data) {
		if(err) { return console.error(err); }
		response.send(JSON.parse(data));
		console.log("list_users request");
	});
});

// Add User
app.post("/addUser", urlEncodedParser, function(request, response) {
	fs.readFile(__dirname+"\\users.json", function(err, data) {
		if(err) { return console.error(err); }
		let object = JSON.parse(data);
		let newUser = {
			"name": request.body.name,
			"password": request.body.pass,
			"profession": request.body.profession
		};
		object.length += 1;
		object["user"+object.length] = newUser;
		let out = fs.createWriteStream(__dirname+"\\users.json");
		out.write(JSON.stringify(object), "utf8");
		out.end();
		out.on("error", function(err) {
			console.log(err.stack);
		})
		response.send(JSON.stringify(newUser));
	});
});

// Show Detail
app.get("/:id", function(request, response) {
	fs.readFile(__dirname+"\\users.json", function(err, data) {
		if(err) { return console.error(err); }
		let object = JSON.parse(data);
		let user = object["user"+request.query.user];
		response.send(JSON.stringify(user));
		console.log("user "+request.query.user+" request");
	});
});

// Delete User
app.post("/deleteUser", urlEncodedParser, function(request, response) {
	fs.readFile(__dirname+"\\users.json", function(err, data) {
		if(err) { return console.error(err); }
		let object = JSON.parse(data);
		object.length -= 1;
		delete object["user"+request.body.del];
		let out = fs.createWriteStream(__dirname+"\\users.json");
		out.write(JSON.stringify(object), "utf8");
		out.end();
		out.on("error", function(err) {
			console.log(err.stack);
		})
		response.send("OK!");
		console.log("user "+request.body.del+" was deleted");
	});
});

const server = app.listen(2222, function() {
	let host = server.address().address;
	let port = server.address().port;

	console.log("server on http://%s:%s", host, port);
});