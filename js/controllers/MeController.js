app.controller('MeController', 
['$rootScope', '$scope', 'httpUtil',
function($rootScope, $scope, httpUtil) {
	$rootScope.header = true;
	 
	$scope.tabshow = 1;
	$scope.toChangeView = function(type) {
		$scope.tabshow = type;
	}
	  
	function ngInit(){
		var reqUrl = globalConfig.rootUrl + "/me";
		httpUtil.get(reqUrl, function(data, status){
			if(status==200){
				$scope.user = data;
			}
		})
	}
	
	ngInit();
  
}]);