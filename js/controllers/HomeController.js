app.controller('HomeController', 
['$rootScope', '$scope', 'photos',
function($rootScope,$scope, photos) {

	$rootScope.header = false;
//$scope.productList = productList; // 懒加载数据
	photos.success(function(data) {
    $scope.productList = data.productList;
	});
  
}]);