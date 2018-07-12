'use strict';

/**
 * @ngdoc service
 * @name testeSkyoneApp.settings
 * @description
 * # settings
 * Service in the testeSkyoneApp.
 */
angular.module('testeSkyoneApp')
  .service('settings', function ($filter) {
    
    var $public = this;
    
  	$public.limitView = function(input){

  		var number = $filter('limitPage')(input);

  		return number;
  	};

  	$public.normalizeData = function (input) {

  		var data = {
  			title: input.iTitle.$modelValue, 
  			url: input.iUrl.$modelValue
  		};

  		return data;
  	};

  });
