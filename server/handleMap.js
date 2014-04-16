var requestHandler = require("./requestHandler");

var handle = {};
handle['/login'] = requestHandler.login;
handle['/test'] = requestHandler.test;


exports.handle = handle;