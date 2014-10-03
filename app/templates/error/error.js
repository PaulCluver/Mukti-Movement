'use strict';

angular.module('muktiMovementApp.error', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/error', {
    templateUrl: 'app/templates/error/error.html',
    controller: 'errorCtrl'
  });
}])

.controller('errorCtrl', [function() {

}]);