'use strict';

angular.module('muktiMovementApp.classes', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/classes', {
    templateUrl: 'app/templates/classes/classes.html',
    controller: 'classesCtrl'
  });
}])

.controller('classesCtrl', [function() {

}]);