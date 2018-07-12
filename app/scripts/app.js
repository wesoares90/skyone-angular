'use strict';

/**
 * @ngdoc overview
 * @name testeSkyoneApp
 * @description
 * # testeSkyoneApp
 *
 * Main module of the application.
 */
angular
  .module('testeSkyoneApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'bw.paging',
    'ngTouch'
  ])
  .config(function ($routeProvider, $locationProvider, $qProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
    
    $locationProvider.html5Mode(true);  
    $qProvider.errorOnUnhandledRejections(false);
  });
