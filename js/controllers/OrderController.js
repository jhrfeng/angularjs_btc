app.controller('OrderController', 
['$rootScope', '$scope', 'httpUtil', 'photos', '$state',
function($rootScope, $scope, httpUtil, photos, $state) {
	$rootScope.header = true;
	
	function ngInit(){
		console.log($state.params.pid)
		photos.success(function(data) {
			angular.forEach(data.productList, function(product, index){
				if(product.pid==$state.params.pid){
					$scope.product = product;
				}
			})
		});
	}
	
	$scope.generate = function(){
		if(validate()){
			$("#register").button('loading');
			$state.go("placeorder", {orderId:"000001"})
		}
		
	}
	
	function validate(){
		if(null==$scope.order.payAmount || $scope.order.payAmount==0){
			alert("请输入订单金额")
			return false;
		}
		if(parseInt($scope.order.payAmount)!==$scope.order.payAmount){
			alert("请输入整数金额")
			return false;
		}
		if($scope.order.payAmount < 1000){
			alert("请输入大于1000元整数金额")
			return false;
		}
		return true;
	}
	
	ngInit();
  
}]);