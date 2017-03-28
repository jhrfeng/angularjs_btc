app.controller('RegisterController', 
['$rootScope', '$scope', 'photos', '$routeParams', '$location', '$state',
function($rootScope, $scope, photos, $routeParams, $location, $state) {
 
	$rootScope.header = true;
	
	$scope.login = function(){
		$state.go('/login'); 
	}
}]);