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
	$public.photoList = [];

	$public.getDataTable = function() {

	    TableMethods.query({limit : $public.limitPage}, function(data) {
 
        	$public.photoList = data;
 
        });
	
	};

	$public.teste = function(i) { console.log(i)};

	$public.newDataTable = function(input, id, index) {
		
		var teste = {
			url: input.newUrl.$modelValue,
			title: input.newTitle.$modelValue
		}

		TableMethods.new(teste, function(data) {
 	
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
