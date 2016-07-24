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
           "home"         :     { templateUrl: "views/home.tpl.html"},
            "daily"       :     { templateUrl: "views/daily-rashi.tpl.html" },
            "crousal"     :     { templateUrl: "views/crousal-rashi.tpl.html"},
            "weekly"      :     { templateUrl: "views/weekly-rashi.tpl.html"},
            "planet"      :     { templateUrl: "views/planet.tpl.html" },
            "yearly"      :     { templateUrl: "views/yearly-rashi.tpl.html"}  
          }
      })
      .state('about',{ //about us page redirect
        url: "/about",
        templateUrl : "views/about.tpl.html"
      })
      .state('astrology',{ //astrology us page redirect
        url: "/astrology",
        templateUrl : "views/astrology.tpl.html"
      })
      .state('rashi',{ //rashi us page redirect
        url: "/rashi",
        templateUrl : "views/rashi.tpl.html"
      })
      .state('graha',{ //graha us page redirect
        url: "/graha",
        templateUrl : "views/graha.tpl.html"
      })
      .state('rashifal',{ //rashifal us page redirect
        url: "/rashifal",
        templateUrl : "views/rashifal.tpl.html"
      })
      .state('grahratna',{ //grahratna us page redirect
        url: "/grah-ratna",
        templateUrl : "views/grah-ratna.tpl.html"
      })
      .state('rashiratna',{ //rashiratna us page redirect
        url: "/rashi-ratna",
        templateUrl : "views/rashi-ratna.tpl.html"
      })
      .state('grahnakshatra',{ //grahnakshatra us page redirect
        url: "/grah-nakshatra",
        templateUrl : "views/grah-nakshatra.tpl.html"
      })
      .state('grahdasha',{ //grahdasha us page redirect
        url: "/grah-dasha",
        templateUrl : "views/grah-dasha.tpl.html"
      })
      .state('vastu',{ //vastu us page redirect
        url: "/vastu",
        templateUrl : "views/vastu.tpl.html"
      })
      .state('shanisadesati',{ //shanisadesati us page redirect
        url: "/shani-sadesati",
        templateUrl : "views/shani-sadesati.tpl.html"
      })
      .state('photo',{ //shanisadesati us page redirect
        url: "/photo",
        templateUrl : "views/newtemp.tpl.html"
      })
      
   }

    
