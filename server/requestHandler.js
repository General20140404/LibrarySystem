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

exports.login = login;
exports.home = test;