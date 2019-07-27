// create an uninitiated Buffer of 10 octets
// let buffer = new Buffer.alloc(10);

// create a Buffer from a given array
// let buffer = new Buffer.from([19, 23, 45, 6, 89]);

buffer_stream = {
	task1: function() {
		let buffer = new Buffer.alloc(20);
		// create a Buffer from a given string
		length = buffer.write("i can be anything", "utf-8");
		console.log("octets written: "+length);
		console.log("data: "+buffer.toString()+"\n");
	},
	task2: function() {
		let buffer = new Buffer.alloc(26);
		for(let i = 0; i < buffer.length; i++) {
			buffer[i] = i + 97;
		}
		console.log(buffer.toString("ascii"));
		console.log(buffer.toString("base64"));
		console.log(buffer.toString("utf-8"));
		console.log(buffer.toString("hex"));
	},
	json: function() {
		const LENGHT = 52;
		let buffer = new Buffer.alloc(LENGHT);
		for(let i = 0; i < LENGHT; i++) {
			buffer[i] = i+97;
		}
		console.log(buffer.toString("ascii"));
		//let json = buffer.toJSON(buffer);
		//console.log(json);
	},
	start: function() {
		this.task1();
		this.task2();
		this.json();
	}
}

buffer_stream.start();

/*
	buffer_list = [
		new Buffer.alloc("hello"),
		new Buffer.alloc("world!")
	];

	console.log(Buffer.concat(buffer_list).toString("utf-8"));
*/
/*
	let buffer1 = new Buffer.alloc("hello ");
	let buffer2 = new Buffer.alloc("world!");
	let buffer3 = Buffer.concat([buffer1, buffer2]);
	console.log(buffer3.toString("utf-8"));
*/	
