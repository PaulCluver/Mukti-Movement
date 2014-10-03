'use strict';

angular.module('muktiMovementApp.vajra', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/vajra', {
    templateUrl: 'app/templates/vajra/vajra.html',
    controller: 'vajraCtrl'
  });
}])

.controller('vajraCtrl', [function() {

}]);