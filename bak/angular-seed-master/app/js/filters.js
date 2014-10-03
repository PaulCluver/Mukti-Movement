'use strict';

baguaApp.filter('charReplace', function() {

	return function(charToReplace) {
		return charToReplace.replace("\n", "<br />");
	}
});