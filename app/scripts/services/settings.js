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

    $public.listView = function(){

        var list = [20,40,80,100,200,300,400,500];

        return list;

    };

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
