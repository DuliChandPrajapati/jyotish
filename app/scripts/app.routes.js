'use strict';

angular
    .module('jyotishyApp.routes', ['ngRoute','ui.router'])
    .config(config);

function config ($stateProvider,$urlRouterProvider) {
   $stateProvider
      .state('jyotishy', {//State demonstrating Nested views
          url: "/",
          views: {
           "breadcrum"    :     {templateUrl: "scripts/templates/breadcrum.tpl.html"},
            "daily"       :     { templateUrl: "scripts/templates/daily-rashi.tpl.html" },
            "crousal"     :     { templateUrl: "scripts/templates/crousal-rashi.tpl.html"},
            "weekly"    :     {templateUrl: "scripts/templates/weekly-rashi.tpl.html"},
            "planet"       :     { templateUrl: "scripts/templates/planet.tpl.html" },
            "yearly"     :     { templateUrl: "scripts/templates/yearly-rashi.tpl.html"}  
          }
      })
      
   }

    /*$routeProvider.
        when('/', {
            templateUrl: 'scripts/templates/planet.html',
        })

        .when('/about', {
            templateUrl: 'scripts/templates/home.html',
          
        })
        .when('/search', {
            templateUrl: 'scripts/templates/home.html',
        })
        .when('/contact', {
            templateUrl: 'scripts/templates/home.html',
        })
        .when('/popular', {
            templateUrl: 'scripts/templates/home.html',
           
        })
        .when('/view', {
            templateUrl: 'scripts/templates/home.html',
           
        })
        .otherwise({
            redirectTo: '/'
        });*/
