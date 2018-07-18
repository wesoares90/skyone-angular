'use strict';

/**
 * @ngdoc filter
 * @name testeSkyoneApp.filter:limitPage
 * @function
 * @description
 * # limitPage
 * Filter in the testeSkyoneApp.
 */
angular.module('testeSkyoneApp')
.filter('limitPage', function () {
	return function (input) {
	  
		var limit = '&_limit=';

		if (input === null) {

			limit  += 20;

		} else {

			limit  += input;

		}

		return  limit;

	};
	
});
