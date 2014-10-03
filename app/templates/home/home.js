'use strict';

angular.module('muktiMovementApp.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'app/templates/home/home.html',
    controller: 'homeCtrl'
  });
}])

.controller('homeCtrl', [function() {

}]);