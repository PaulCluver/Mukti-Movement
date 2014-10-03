'use strict';

// Declare app level module which depends on views, and components
var muktiMovementApp = angular.module('muktiMovementApp', [
  'ngRoute',  
  'muktiMovementApp.home',
  'muktiMovementApp.yoga',
  'muktiMovementApp.bagua',
  'muktiMovementApp.classes',
  'muktiMovementApp.contact'
]).
config(['$routeProvider', function ($routeProvider) {

	$routeProvider.when('/error',
	{
		templateUrl: 'app/templates/error/error.html',
		controller: 'errorCtrl'
	});

	$routeProvider.when('/yoga',
	{
		templateUrl: 'app/templates/yoga/yoga.html',
		controller: 'yogaCtrl'
	});

	$routeProvider.when('/bagua',
	{
		templateUrl: 'app/templates/bagua/bagua.html',
		controller: 'baguaCtrl'
	});

	$routeProvider.when('/classes',
	{
		templateUrl: 'app/templates/classes/classes.html',
		controller: 'classesCtrl'
	});

	$routeProvider.when('/contact',
	{
		templateUrl: 'app/templates/contact/contact.html',
		controller: 'contactCtrl'
	});

    $routeProvider.otherwise({ redirectTo: '/home' });
}]);

muktiMovementApp.controller('navController', ['$scope', function($scope) {
	$scope.changeButtonColour = function() {
		
	};	
}])

muktiMovementApp.directive("click", function () {
    return function(scope, element, attrs) {
        element.bind("click", function() {
            scope.boolChangeClass = !scope.boolChangeClass;
            console.log(element);
            scope.$apply();
        });
    };
});



