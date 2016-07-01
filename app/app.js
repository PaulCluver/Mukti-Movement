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
                    title: '',
                    description: 'Mukti Movement and Medicine: Yoga, Kung Fu, Muay Thai, Chiropractic, Homeopathy in Durban, South Africa'
                }
            })
            .state('error', {
                url: '/error',
                templateUrl: 'partials/error/error.html'
            })
            .state('astangayoga', {
                url: '/astangayoga',
                templateUrl: 'partials/yoga/astanga.html'
            })
            .state('vinyasayoga', {
                url: '/vinyasayoga',
                templateUrl: 'partials/yoga/vinyasa.html'
            })
            .state('bagua', {
                url: '/bagua',
                templateUrl: 'partials/martial/bagua.html'
            })
            .state('xingyi', {
                url: '/xingyi',
                templateUrl: 'partials/martial/xingyi.html'
            })
            .state('taiji', {
                url: '/taiji',
                templateUrl: 'partials/martial/taiji.html'
            })
            .state('muaythai', {
                url: '/muaythai',
                templateUrl: 'partials/martial/muaythai.html'
            })
            .state('chiropractic', {
                url: '/chiropractic',
                templateUrl: 'partials/medicine/chiropractic.html'
            })
            .state('homeopathy', {
                url: '/homeopathy',
                templateUrl: 'partials/medicine/homeopathy.html'
            })
            .state('classes', {
                url: '/classes',
                templateUrl: 'partials/classes/classes.html'
            })
            .state('contact', {
                url: '/contact',
                templateUrl: 'partials/contact/contact.html'
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
