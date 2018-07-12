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
	  
		var limit = '_limit=';

		switch (input) {
			case null:
				limit  += 20;
				break;
			case 'todos':
				limit = ''
				break;
			default:
				limit  += input;
				break;
		};

		return  limit;


	};
});
