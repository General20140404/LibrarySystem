var Collection = require("./../../mongodb/collection").Collection;

function login(response, data) {
    var collection = new Collection('User');
    collection.execute('find', {mail: data.username}, {}, function(results) {
    	collection.close();
		var returnData = '';
    	if (!results.error && (results.result.length > 0)) {
    		if (results.result[0].password === data.password) {
    			returnData = {
			        'success' : true,
			        'message' : ''
			    }
    		} else {
    			returnData = {
			        'success' : false,
			        'message' : 'Password is not right!'
			    }
    		}
    	} else {
    		returnData = {
		        'success' : false,
		        'message' : 'Username is not right!'
		    }
    	}

    	response.writeHead(200, {"Content-Type": "application/json"});
	    response.write(JSON.stringify(returnData)); 
		response.end();
    });
};

function home(response, data) {
	var collection = new Collection('BookInfo');
	collection.execute('find', {mail: data.username}, {}, function(results) {
    	collection.close();
		var returnData = '';
    	if (!results.error && (results.result.length > 0)) {
			returnData = {
		        'success' : true,
		        'message' : 'get books success',
		        'data': results.result
		    }
    	} else {
    		returnData = {
		        'success' : false,
		        'message' : 'no books',
		        'data': []
		    }
    	}

    	response.writeHead(200, {"Content-Type": "application/json"});
	    response.write(JSON.stringify(returnData)); 
		response.end();
    });
};

// add comment because of no 'Book' 
// function addNewBook(response, data){
// 	var collection = new Collection("BookInfo");
// 	// data = JSON.parse(data);
// 	var bookID = data.id;
// 	collection.execute("count", {id:bookID}, {}, function(msg){
// 		collection.close();
// 		if(msg.result === 1){
// 			msg.result = "This book is already exist";
// 			response.writeHead(200, {"Content-Type": "application/json"});
//     		response.write(JSON.stringify(msg)); 
// 			response.end();
// 		}else{
// 			Book.getBook(bookID, function(json) {
// 				collection.execute("insert", json, {w:1}, function(result){
// 					collection.close();
// 					response.writeHead(200, {"Content-Type": "application/json"});
// 		    		response.write(JSON.stringify(result)); 
// 					response.end();
// 				});
// 			});
// 		}
		
// 	});
	
// };

function undefined(response, data) {
	response.writeHead(404, {
		"Content-Type": "text/plain"
	});
	response.write("404 Not found");
	response.end();
};

exports.login = login;
exports.home = home;
// exports.addNewBook = addNewBook;
