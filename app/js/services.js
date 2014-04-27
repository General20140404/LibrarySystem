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
})
.factory('Home', function($resource) {
	return $resource('home/:action', {}, {
		query: {
			method: 'get',
			params: {},
			isArray: false,
			cache: true
		}
	});
})
.factory("$dialog", function($rootScope){

	var dialog = {
		initObj : {
			title: "Dialog",
			templateUrl : "",
			width: 500,
			height : 300,
			buttons : {
				"button1" : {
					text : "Change",
					method : function() {

					}
				},
				"button2" : {
					text : "Close",
					method : function() {
						dialog.Close();
					}
				}
			}
		},
		data : {},
		init : function(dialogObj){
			dialogObj = angular.extend(dialog.initObj, dialogObj);
			$rootScope.$broadcast("DIALOG_OPEN", dialogObj);
		},
		Close : function() {
			$rootScope.$broadcast("DIALOG_CLOSE");
		},
		Minimize : function() {
			$rootScope.$broadcast("DIALOG_MINIMIZE");
		},
		setData : function(propName, obj) {
			dialog.data[propName] = obj;
		},
		getData : function(propName){
			return dialog.data[propName];
		}
	}

	return dialog;

});
