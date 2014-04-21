var Collection = require("./mongodb/collection").Collection;
var Book = require("./douban/book");

function login(response, postData) {
	postData = JSON.parse(postData);
	console.log('login event fired!');

	var returnData = {
        success : true,
        data : "Data from server"
    }

    response.writeHead(200, {"Content-Type": "application/json"});
    response.write(JSON.stringify(returnData)); 
	response.end();
};

function test(response, postData) {
	console.log('home event fired!');
	response.end();
};

function addNewBook(response, postData){
	var collection = new Collection("book");
	postData = JSON.parse(postData);
	var bookID = postData.id;
	Book.getBook(bookID, function(json) {
		collection.execute("insert", json, {w:1}, function(result){
			response.writeHead(200, {"Content-Type": "application/json"});
    		response.write(JSON.stringify(result)); 
			response.end();
			collection.close();
		});

	});
}

exports.login = login;
exports.test = test;
exports.addNewBook = addNewBook;