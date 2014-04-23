'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
	.controller('loginCtrl', ['$scope', 'Login', 'Home', function($scope, Login, Home) {
			$scope.fields = {
				'username': 'admin@tibco-support.com',
				'password': 'admin',
				'remember': 'false'
			}
			$scope.submit = function() {
				// var param = {'action': 'query', 'param': 'name'};
				var param = {};
				$scope.checked = Login.query(param, $scope.fields, function(data) {
					console.log(data);
				});
				$scope.checked = Home.query(param, $scope.fields, function(data) {
					console.log(data);
				});
				$scope.check = Login.query(function(data) {
					console.log(data);
				});
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