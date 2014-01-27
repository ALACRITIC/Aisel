'use strict';

angular.module('projectxApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .constant('API_URL','http://projectx.dev/app_dev.php/api')
  .config(function ($routeProvider) {
    $routeProvider
        .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
        })
        .when('/pages/:current/', {
            templateUrl: 'views/page.html',
            controller: 'PageCtrl'
        })
        .when('/page/:pageId', {
            templateUrl: 'views/page-detail.html',
            controller: 'PageDetailCtrl'
        })
        .when('/about/', {
            templateUrl: 'views/about.html',
            controller: 'AboutCtrl'
        })
        .when('/contact/', {
            templateUrl: 'views/contact.html',
            controller: 'ContactCtrl'
        })
        .otherwise({
        redirectTo: '/'
        });
  });