'use strict';

baguaApp.controller('ArticleController',
	function ArticleController($scope, articleData) {
		$scope.sortOrder = 'name';
		$scope.article = articleData.getArticle()
		.$promise.then(
			function(article) { $scope.article = article; console.log(article); },
			function(response) { console.log(response); }
		)
	}
);