'use strict';

angular
    .module('jyotishyApp.routes', ['ngRoute','ui.router'])
    .config(config);

function config ($stateProvider,$urlRouterProvider) {
  $urlRouterProvider.otherwise('/jyotishy');
   $stateProvider
      .state('jyotishy', {//State demonstrating Nested views
          url: "/jyotishy",
          views: {
           "home"         :     { templateUrl: "scripts/templates/home.tpl.html"},
            "daily"       :     { templateUrl: "scripts/templates/daily-rashi.tpl.html" },
            "crousal"     :     { templateUrl: "scripts/templates/crousal-rashi.tpl.html"},
            "weekly"      :     { templateUrl: "scripts/templates/weekly-rashi.tpl.html"},
            "planet"      :     { templateUrl: "scripts/templates/planet.tpl.html" },
            "yearly"      :     { templateUrl: "scripts/templates/yearly-rashi.tpl.html"}  
          }
      })
      .state('about',{ //about us page redirect
        url: "/about",
        templateUrl : "scripts/templates/about.tpl.html"
      })
      .state('astrology',{ //astrology us page redirect
        url: "/astrology",
        templateUrl : "scripts/templates/astrology.tpl.html"
      })
      .state('rashi',{ //rashi us page redirect
        url: "/rashi",
        templateUrl : "scripts/templates/rashi.tpl.html"
      })
      .state('graha',{ //graha us page redirect
        url: "/graha",
        templateUrl : "scripts/templates/graha.tpl.html"
      })
      .state('rashifal',{ //rashifal us page redirect
        url: "/rashifal",
        templateUrl : "scripts/templates/rashifal.tpl.html"
      })
      .state('grahratna',{ //grahratna us page redirect
        url: "/grah-ratna",
        templateUrl : "scripts/templates/grah-ratna.tpl.html"
      })
      .state('rashiratna',{ //rashiratna us page redirect
        url: "/rashi-ratna",
        templateUrl : "scripts/templates/rashi-ratna.tpl.html"
      })
      .state('grahnakshatra',{ //grahnakshatra us page redirect
        url: "/grah-nakshatra",
        templateUrl : "scripts/templates/grah-nakshatra.tpl.html"
      })
      .state('grahdasha',{ //grahdasha us page redirect
        url: "/grah-dasha",
        templateUrl : "scripts/templates/grah-dasha.tpl.html"
      })
      .state('vastu',{ //vastu us page redirect
        url: "/vastu",
        templateUrl : "scripts/templates/vastu.tpl.html"
      })
      .state('shanisadesati',{ //shanisadesati us page redirect
        url: "/shani-sadesati",
        templateUrl : "scripts/templates/shani-sadesati.tpl.html"
      })
      
   }

    
