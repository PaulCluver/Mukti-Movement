'use strict';

angular.module('muktiMovementApp.bagua', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/bagua', {
    templateUrl: 'app/templates/bagua/bagua.html',
    controller: 'baguaCtrl'
  });
}])

.controller('baguaCtrl', [function() {

}]);