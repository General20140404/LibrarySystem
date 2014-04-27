'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
	.controller('loginCtrl', ['$scope', '$location', 'Login', 'Home', function($scope, $location, Login, Home) {
			$scope.fields = {
				'username': '',
				'password': '',
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
	.controller('homeCtrl', ['$scope', 'Home', "$dialog", function($scope, Home, $dialog) {
			$scope.book = [];
			Home.query({}, function(data) {
				$scope.books = data.data;
			});

			$scope.selectOneBook = function(data) {
				$dialog.setData("CURRENT_BOOK_IN_BOOKDETAIL", data);
				$dialog.init({
					title : data.title,
					width : 800,
					height : 500,
					templateUrl : "partials/bookDetail.html",
					buttons : {
						"button1" : {
							text : "Borrow",
							method : function() {

							}
						},
						"button2" : {
							text : "Close",
							method : function() {
								$dialog.Close();
							}
						}
					}
				});
			}
		}
	])
	.controller('bookDetailCtrl', ['$scope', "$dialog", function($scope, $dialog) {

			$scope.data = angular.copy($dialog.getData("CURRENT_BOOK_IN_BOOKDETAIL"));

			console.log($scope.data)



			
		}
	])
	.controller('MyCtrl2', ['$scope', function($scope) {

		}
	])
	.controller("dialog", ["$scope", "$element", "$dialog", function($scope, $element, $dialog){

		$scope.hideStatus = true;

		$scope.$on("DIALOG_CLOSE", function(event){
			$scope.hideStatus = true;
		});

		$scope.$on("DIALOG_MINIMIZE", function(event){

		});

		$scope.$on("DIALOG_OPEN", function(event, obj){
			$scope.hideStatus = false;

			$scope.title = obj.title;
			$scope.templateUrl = obj.templateUrl;
			$scope.buttons = obj.buttons;
			$scope.height = obj.height;
			$scope.width = obj.width;

		});


	}]);