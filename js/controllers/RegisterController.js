app.controller('RegisterController', 
['$rootScope', '$scope', 'photos','$state',
function($rootScope, $scope, photos, $state) {
 
	$rootScope.header = true;
	
	$scope.login = function(){
		$state.go('/login'); 
	}
}]);