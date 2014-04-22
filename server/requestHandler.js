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
	var collection = new Collection("BookInfo");
	postData = JSON.parse(postData);
	var bookID = postData.id;
	collection.execute("count", {id:bookID}, {}, function(msg){
		collection.close();
		if(msg.result === 1){
			msg.result = "This book is already exist";
			response.writeHead(200, {"Content-Type": "application/json"});
    		response.write(JSON.stringify(msg)); 
			response.end();
		}else{
			Book.getBook(bookID, function(json) {
				collection.execute("insert", json, {w:1}, function(result){
					collection.close();
					response.writeHead(200, {"Content-Type": "application/json"});
		    		response.write(JSON.stringify(result)); 
					response.end();
				});
			});
		}
		
	});
	
}

exports.login = login;
exports.test = test;
exports.addNewBook = addNewBook;