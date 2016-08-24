'use strict'
angular.module('jyotishyApp.core', [])
.directive('header', function() {
  return {
    templateUrl: 'views/header.tpl.html'
  };
}).directive('footer', function(){
	return{
		templateUrl:'views/footer.tpl.html'
	};
}).directive('breadcrum', function(){
	return{
		templateUrl:'views/breadcrum.tpl.html'
	};
}).directive('aries', function(){
	return{
		templateUrl:'views/rashi/aries.tpl.html'
	};
}).directive('taurus', function(){
	return{
		templateUrl:'views/rashi/taurus.tpl.html'
	};
});
