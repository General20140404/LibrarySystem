'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
	.controller('loginCtrl', ['$scope',
		function($scope) {
			$scope.fields = {
				'username': 'admin@tibco-support.com',
				'password': 'admin',
				'remember': 'false'
			}
			$scope.submit = function() {
				console.log('submit action.');
				console.log('login fields details:');
				console.log('username: ' + $scope.fields.username+' | password: '+$scope.fields.password+ ' | remember: '+$scope.fields.remember);
			}
		}
	])
	.controller('MyCtrl1', ['$scope',
		function($scope) {

		}
	])
	.controller('MyCtrl2', ['$scope',
		function($scope) {

		}
	]);