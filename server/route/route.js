var dynamicHandle = require("./../handle/dynamic/handle");

var handle = {};
handle['/login'] = dynamicHandle.login;
handle['/home'] = dynamicHandle.home;
handle['/test'] = dynamicHandle.test;
handle["/addNewBook"] = dynamicHandle.addNewBook;

function route(handle, pathname, response, postData) {
	if (typeof handle[pathname] === 'function') {
		handle[pathname](response, postData);
	} else {
		handle['undefined']();
	}
}

exports.route = route;
exports.handle = handle;