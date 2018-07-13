'use strict';

/**
 * @ngdoc function
 * @name testeSkyoneApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testeSkyoneApp
 */
angular.module('testeSkyoneApp')
.controller('MainCtrl', function (TableMethods, settings) {

	var $public = this;

	$public.limitPage = settings.limitView(null);
	$public.currentPage = 1;
	$public.photoList = [];


	$public.controlPage = function(currentPage) { 
		
		$public.currentPage = currentPage;

		$public.getDataTable();

	};

	$public.getDataTable = function() {

		var teste = '_page='+$public.currentPage;

	    TableMethods.query({limit:$public.limitPage, page:teste }, function(data) {
 
        	$public.photoList = data;
 
        });
	
	};

	$public.newDataTable = function(input, id, index) {
		
		var dataForm = {
			url: input.newUrl.$modelValue,
			title: input.newTitle.$modelValue
		}

		TableMethods.new(dataForm, function(data) {
 	
 			if (data.$resolved) {
 			
 				input.newUrl.$modelValue = '';

 			}

 		});
	
	};

	$public.updateDataTable = function(input, id, index) {
		
		var dataInput = settings.normalizeData(input)

	    TableMethods.update({update:id}, dataInput, function(data) {
 	
 			if (data.$resolved) {
 			
 				$public.photoList[index].title = data.title;
 				$public.photoList[index].url = data.url;

 			}

 		});
	
	};

	$public.removeDataTable = function(photo, index) {

		TableMethods.remove({delete : photo.id}, function(data) {
 
        	if (data.$resolved) {

        		$public.photoList.splice(index, 1);	

        	} 
        
        });
	
	};		

    $public.viewMore = function (input) {
    	
    	$public.limitPage = settings.limitView(input);
    	$public.getDataTable();

    };

   	$public.init = function () {
		
		$public.getDataTable();  		
   	
   	};

   	$public.init();
 
});
