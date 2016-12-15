/* our angular app modularize, with config */
var app = angular.module('app', ['ngRoute', 'ngCookies']);
/* configuration for angular route */
app.config(function($routeProvider) {
  $routeProvider
    .when('/index', {
      templateUrl: '/partials/index.html'
    })
    .when('/home', {
    	templateUrl: 'partials/home.html',
    	controller: 'homeController'
    })
    .otherwise({
      redirectTo: '/index'
    });
});