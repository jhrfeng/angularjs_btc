app.controller('InvestController', ['$scope', 'photos', function($scope, photos) {
	$scope.questionList = questionList; // 通过懒加载，加载配置JSON信息
	console.log($scope.questionList)
}]);