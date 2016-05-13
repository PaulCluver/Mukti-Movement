(function() {

    'use strict';

    var muktiMovementApp = angular.module('muktiMovementApp', ['ui.router', 'ui.bootstrap']);

    muktiMovementApp.constant('VERSION', '0.1');

    muktiMovementApp.config(function($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {

        $urlRouterProvider.otherwise('/home');
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'partials/home/home.html',
                data: {
                    pageTitle: 'Bagua Kung Fu Durban - Home',
                    description: 'Bagua Zhang Kung Fu in Durban South Africa'
                }
            })
            .state('error', {
                url: '/error',
                templateUrl: 'partials/error/error.html',
                data: {
                    pageTitle: 'Bagua Kung Fu Durban - History',
                    description: 'This page provides history on the martial art of Bagua Zhang Kung Fu.'
                }
            })
            .state('yoga', {
                url: '/yoga',
                templateUrl: 'partials/yoga/yoga.html',
                data: {
                    pageTitle: 'Bagua Kung Fu Durban - Theory',
                    description: 'This page describes the theories contained within the martial art of Bagua Zhang Kung Fu.',
                }
            })
            .state('bagua', {
                url: '/bagua',
                templateUrl: 'partials/bagua/bagua.html',
                data: {
                    pageTitle: 'Bagua Kung Fu Durban - Method',
                    description: 'This page provides information on the training methods of Durban Bagua Zhang Kung Fu.'
                }
            })
            .state('classes', {
                url: '/classes',
                templateUrl: 'partials/classes/classes.html',
                data: {
                    pageTitle: 'Bagua Kung Fu Durban - Method',
                    description: 'This page provides information on the training methods of Durban Bagua Zhang Kung Fu.'
                }
            })
            .state('contact', {
                url: '/contact',
                templateUrl: 'partials/contact/contact.html',
                data: {
                    pageTitle: 'Bagua Kung Fu Durban - Method',
                    description: 'This page provides information on the training methods of Durban Bagua Zhang Kung Fu.'
                }
            });
    });

    muktiMovementApp.controller('appCtrl', ['$scope', function($scope) {
        $scope.items = [
            'The first choice!',
            'And another choice for you.',
            'but wait! A third!'
        ];

        $scope.status = {
            isopen: false
        };

        $scope.toggled = function(open) {
            $log.log('Dropdown is now: ', open);
        };

        $scope.toggleDropdown = function($event) {
            $event.preventDefault();
            $event.stopPropagation();
            $scope.status.isopen = !$scope.status.isopen;
        };

        $scope.appendToEl = angular.element(document.querySelector('#dropdown-long-content'));
    }]);
    
}());
