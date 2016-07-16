'use strict'
angular.module('jyotishyApp.core', [])
.directive('header', function() {
  return {
    templateUrl: 'scripts/templates/header.tpl.html'
  };
})
.directive('footer', function(){
	return{
		templateUrl:'scripts/templates/footer.tpl.html'
	};
})
.directive('breadcrum', function(){
	return{
		templateUrl:'scripts/templates/breadcrum.tpl.html'
	};
});
