'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', ['ngResource']).
factory('Login', function($resource) {
	return $resource('login/:action', {}, {
		query: {
			method: 'post',
			params: {},
			data: {},
			isArray: false,
			cache: true
		}
	});
});
