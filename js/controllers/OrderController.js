app.controller('OrderController', 
['$rootScope', '$scope', 'httpUtil', 'photos',
function($rootScope, $scope, httpUtil, photos) {
	$rootScope.header = true;
	
	function ngInit(){
		photos.success(function(data) {
	    	$scope.productList = data.productList;
		});
	}
	
	ngInit();
  
}]);