'use strict';

var baguaApp = angular.module('baguaApp', ['ngResource', 'ngRoute'])
	.factory('getAll', function($resource) {
		return $resource()
	})	
	.config(function($routeProvider) {
		
		$routeProvider.when('/home',
		{
			templateUrl: 'templates/home.html',
			controller: 'HomeController'
		})

		$routeProvider.when('/baguazhangkungfu',
		{
			templateUrl: 'templates/BaguaZhangKungFu.html',
			controller: 'BaguaZhangKungFuController'
		});	

		$routeProvider.when('/vajraboxing',
		{
			templateUrl: 'templates/VajraBoxing.html',
			controller: 'VajraBoxingController'
		});	

		$routeProvider.when('/yoga',
		{
			templateUrl: 'templates/Yoga.html',
			controller: 'YogaController'
		});

		$routeProvider.when('/faqs',
		{
			templateUrl: 'templates/FAQs.html',
			controller: 'FaqsController'
		});

		$routeProvider.when('/articles',
		{
			templateUrl: 'templates/Articles.html',
			controller: 'ArticleController'
		});	

		$routeProvider.when('/contact',
		{
			templateUrl: 'templates/contact.html',
			controller: 'ContactController'
		});	

		
	
	

			
	});

