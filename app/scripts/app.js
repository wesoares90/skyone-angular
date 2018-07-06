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
    'ngTouch'
  ])
  .config(function ($routeProvider, $locationProvider) {
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
  });
