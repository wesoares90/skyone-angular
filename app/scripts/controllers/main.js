'use strict';

/**
 * @ngdoc function
 * @name testeSkyoneApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testeSkyoneApp
 */
angular.module('testeSkyoneApp')
.controller('MainCtrl', function ($http, $filter) {

	var $public = this,
		$private = {};

	
	$private.urkRest = 'https://jsonplaceholder.typicode.com/photos/';
	$public.limitPage = $filter('limitPage')();

	$public.getTable = function() {

	    $http.get($private.urkRest + $public.limitPage).then(function(response) {
	        
	        $public.rowCollection = response.data;
	    
	    });

	};

    $public.viewMore = function (input) {
    	
    	$public.limitPage = $filter('limitPage')(input);
    	$public.getTable();

    };

    $public.getTable();

});
