'use strict'
angular.module('jyotishyApp.config', [])
	.config(configs)
	.run(runs);

function configs($httpProvider){
	var interceptor =  function($location, $log, $q){
		function error (response){
			if(response.status === 401){
				$log.error('You are unauthorised acess 401');
			}else if(response.status === 404 ){
				$log.error('You are unauthorised acess 404');
			}else if(response.status === 500){
				$log.error('You are unauthorised acess 500');
			}
		}
		function success(response){
			return response;
		}
		return function(promise) {
            return promise.then(success, error);
        }
	}
	$httpProvider.interceptors.push(interceptor);
}

function runs($rootScope) {
    $rootScope.$on('$routeChangeStart', function() {
      //  PageValues.loading = true;
    });
    $rootScope.$on('$routeChangeSuccess', function() {
      //  PageValues.loading = false;
    });
}	