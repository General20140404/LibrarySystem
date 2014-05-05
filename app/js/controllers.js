'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
	.controller('mainCtrl', ['$scope', function($scope){
		$scope.navClick = function($event) {
			angular.element('#navbar').find('li').removeClass('active');
			angular.element($event.target).parent().addClass('active');
		};
	}])
	.controller('indexCtrl', ['$scope', function($scope){
		
	}])
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
	.controller('homeCtrl', ['$scope', 'Home', '$dialog', '$location', 'transfer', function($scope, Home, $dialog, $location, transfer) {
			$scope.book = [];
			Home.query({}, function(data) {
				$scope.books = data.data;
			});

			$scope.selectOneBook = function(data) {
				$location.path('/detail');
				transfer.setData('bookDetails', data);
				// $dialog.setData("CURRENT_BOOK_IN_BOOKDETAIL", data);
				// $dialog.init({
				// 	title : data.title,
				// 	width : 800,
				// 	height : 500,
				// 	templateUrl : "partials/bookDetail.html",
				// 	buttons : {
				// 		"button1" : {
				// 			text : "Borrow",
				// 			method : function() {

				// 			}
				// 		},
				// 		"button2" : {
				// 			text : "Close",
				// 			method : function() {
				// 				$dialog.Close();
				// 			}
				// 		}
				// 	}
				// });
			};
			
			$scope.moreAvailable = 'more';
			$scope.moreUnavailable = 'more';
			$scope.showMore = function($event, type) {
				angular.element($event.currentTarget).parent().toggleClass('show-all');
				if (type === 'available') {
					$scope.moreAvailable = $scope.moreAvailable === 'more'? 'less': 'more';
				} else {
					$scope.moreUnavailable = $scope.moreUnavailable === 'more'? 'less': 'more';
				}
			};
		}
	])
	.controller('bookDetailCtrl', ['$scope', "$dialog", function($scope, $dialog, transfer) {
			$scope.data = angular.copy($dialog.getData('CURRENT_BOOK_IN_BOOKDETAIL'));
			console.log($scope.data)
		}
	])
	.controller('detailCtrl', ['$scope', '$dialog', 'transfer', function($scope, $dialog, transfer){
		$scope.data = angular.copy(transfer.getData("bookDetails"));
	}])
	.controller('recordCtrl', ['$scope', function($scope) {
			console.log('record page');
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