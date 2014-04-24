var requestHandler = require("./requestHandler");

var handle = {};
handle['/login'] = requestHandler.login;
handle['/home'] = requestHandler.home;
handle['/test'] = requestHandler.test;

handle["/addNewBook"] = requestHandler.addNewBook;


exports.handle = handle;