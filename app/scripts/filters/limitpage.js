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
	  
		var limit = '';

		switch (input) {
			case undefined:
				limit  = '?_start=1&_limit=' + 20;
				break;
			case 'todos':
				limit = ''
				break;
			default:
				limit  = '?_start=1&_limit=' + input;
				break;
		}

		return limit;


	};
});
