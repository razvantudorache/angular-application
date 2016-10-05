'use strict';

/**
 * @ngdoc overview
 * @name adminstrationApp
 * @description
 * # adminstrationApp
 *
 * Main module of the application.
 */
angular
  .module('adminstrationApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
