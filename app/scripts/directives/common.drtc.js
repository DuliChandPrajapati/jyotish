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
}).directive('cancer', function(){
	return{
		templateUrl:'views/rashi/cancer.tpl.html'
	};
}).directive('aqarius', function(){
	return{
		templateUrl:'views/rashi/aqarius.tpl.html'
	};
}).directive('capricorn', function(){
	return{
		templateUrl:'views/rashi/capricorn.tpl.html'
	};
}).directive('gemini', function(){
	return{
		templateUrl:'views/rashi/gemini.tpl.html'
	};
}).directive('leo', function(){
	return{
		templateUrl:'views/rashi/leo.tpl.html'
	};
}).directive('libra', function(){
	return{
		templateUrl:'views/rashi/libra.tpl.html'
	};
}).directive('pisces', function(){
	return{
		templateUrl:'views/rashi/pisces.tpl.html'
	};
}).directive('scorpio', function(){
	return{
		templateUrl:'views/rashi/scorpio.tpl.html'
	};
}).directive('virgo', function(){
	return{
		templateUrl:'views/rashi/virgo.tpl.html'
	};
});
