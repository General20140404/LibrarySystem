var Mongo = require("../mongodb/connect").Mongo;

var test = new Mongo("test");

test.execute("insert", {test:1}, {w : 1}, function(message){

	console.log(message);
	test.closeMongo();

});