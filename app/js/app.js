'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/index', {templateUrl: 'partials/index.html', controller: 'indexCtrl'});
  $routeProvider.when('/login', {templateUrl: 'partials/login.html', controller: 'loginCtrl'});
  $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'homeCtrl'});
  $routeProvider.when('/detail', {templateUrl: 'partials/detail.html', controller: 'detailCtrl'});
  $routeProvider.when('/record', {templateUrl: 'partials/record.html', controller: 'recordCtrl'});
  $routeProvider.otherwise({redirectTo: '/home'});
}]);
