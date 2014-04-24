var requestHandler = require("./requestHandler");

var handle = {};
handle['/login'] = requestHandler.login;
handle['/test'] = requestHandler.test;

handle["/addNewBook"] = requestHandler.addNewBook;


exports.handle = handle;