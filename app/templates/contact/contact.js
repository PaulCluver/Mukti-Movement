'use strict';

angular.module('muktiMovementApp.contact', ['ngRoute'])
	.controller('contactCtrl', function($scope, $http, $log) {
        
        $scope.submit = function(form) {
        	$scope.submitted = true;

        	if (form.$invalid) {
        		return;
        	}

        	var config = {
        		params: {
        			'callback' : 'JSON_CALLBACK',
        			'firstName' : $scope.firstName,
        			'lastName' : $scope.lastName,
        			'email' : $scope.emailAddress,
        			'questionOrComment' : $scope.questionOrComment
        		},
        	};

        	var $promise = $http.jsonp('response.json', config)
        		.success(function (data, status, headers, config) {
        			if (data.status == 'OK') {
        				$scope.firstName = null;
        				$scope.lastName = null;
        				$scope.emailAddress = null;
        				$scope.questionOrComment = null;
        				$scope.messages = "Your form has been sent";
        				$scope.submitted = false;
        			}
        			else {
        				$scope.messages = "Oops, we received your request, but there was an error processing it.";
        				$log.error(data);
        			}
        		})
        		.error (function (data, status, headers, config) {
					$scope.progress = data;
					$scope.messages = 'There was a network error. Try again later.';
					$log.error(data);	
        		})
        		.finally (function() {
        			$timeout(function() {
        				$scope.messages = null;
        			}, 3000) ;
        		});

        		//$scope.progress.addPromise($promise);
        };
	})	
	.config(['$routeProvider', function($routeProvider) {
  		$routeProvider.when('/contact', {
    	templateUrl: 'app/templates/contact/contact.html',
    	controller: 'contactCtrl'
  });
}]);