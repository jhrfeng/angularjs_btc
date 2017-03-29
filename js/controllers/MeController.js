app.controller('MeController', 
['$rootScope', '$scope', 
function($rootScope, $scope) {
	
  $rootScope.header = true;
  $scope.userName = "John";
  $scope.passWord = "123456";
  $scope.payPassWord = "123456";
  
  $scope.tabshow = 1;
  
  $scope.toChangeView = function(type) {
	$scope.tabshow = type;
	}
}]);