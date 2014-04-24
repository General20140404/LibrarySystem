var Collection = require("./mongodb/collection").Collection;

var test = new Collection("test");

test.execute("insert", {test:1}, {w : 1}, function(message){

	console.log(message);
	test.closeMongo();

});