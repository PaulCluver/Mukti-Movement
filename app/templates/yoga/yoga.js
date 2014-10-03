'use strict';

angular.module('muktiMovementApp.yoga', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/yoga', {
    templateUrl: 'app/templates/yoga/yoga.html',
    controller: 'yogaCtrl'
  });
}])

.controller('yogaCtrl', [function() {

}]);