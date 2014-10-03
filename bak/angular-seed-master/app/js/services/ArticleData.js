baguaApp.factory('articleData', function($resource) {
	return {
		getArticle: function() {
			return $resource('/data/article/:id', {id:'@id'}).get({id:'articles'});
		}
	};
});
