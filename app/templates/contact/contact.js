'use strict';

angular.module('muktiMovementApp.contact', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/contact', {
    templateUrl: 'app/templates/contact/contact.html',
    controller: 'contactCtrl'
  });
}])

.controller('contactCtrl', [function() {

}]);