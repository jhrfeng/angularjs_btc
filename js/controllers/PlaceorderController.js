app.controller('PlaceorderController', 
['$rootScope', '$scope', 'httpUtil', 'photos', '$state',
function($rootScope, $scope, httpUtil, photos, $state) {
	$rootScope.header = true;
	
	function ngInit(){
		console.log($state.params.orderId)
		photos.success(function(data) {
			angular.forEach(data.productList, function(product, index){
				if(product.pid=="20170001"){
					$scope.product = product;
				}
			})
		});
	}
	
	$scope.generate = function(){

		$("#register").button('loading');
		$state.go("placeorder", {orderId:"000001"})

		
	}
	
	
	ngInit();
  
}]);