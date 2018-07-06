'use strict';

/**
 * @ngdoc service
 * @name testeSkyoneApp.settings
 * @description
 * # settings
 * Service in the testeSkyoneApp.
 */
angular.module('testeSkyoneApp')
  .service('settings', function () {
    
    var $public = this;

    $public.config = {
    	urlRest: 'www.rola.com'
    }


  });
