const fs = require("fs");
const express = require("express");

const app = express();

app.get("/", function(req, res) {
	fs.readFile(__dirname+"/index.html", function(err, data) {
		if(err) {
			console.log(err);
			res.send("error");
		} else {
			console.log(req.connection.remoteAddress+" =>  get /");
			res.send(data.toString());
		}
	})
})

app.get("/change", function(req, res) {
	console.log(req.connection.remoteAddress+" =>  Ajax Request");
	res.send("Assynchronus Javascript And Xml");
})

const server = app.listen(8080, function() {
	let host = server.address().address;
	let port = server.address().port;
	console.log("connected on http://%s:%s", host, port);
});