'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
	.controller('loginCtrl', ['$scope', '$location', 'Login', 'Home', function($scope, $location, Login, Home) {
			$scope.fields = {
				'username': 'tangxz.0501@gmail.com',
				'password': 'tangxuezhi',
				'remember': 'false'
			}
			$scope.errorMsg = '';
			$scope.submit = function() {
				// var param = {'action': 'query', 'param': 'name'};
				var param = {};
				Login.query(param, $scope.fields, function(data) {
					if (data.success) {
						$location.path('/home');
					} else {
						$scope.errorMsg = data.message;
					}
				});
			}
		}
	])
	.controller('HomeCtrl', ['$scope', 'Home',
		function($scope, Home) {
			$scope.book = [];
			Home.query({}, function(data) {
				$scope.books = data.data;
			});
		}
	])
	.controller('MyCtrl2', ['$scope',
		function($scope) {

		}
	]);