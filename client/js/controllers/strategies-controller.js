app.controller('strategiesController', ['$scope', '$resource', function ($scope, $resource) {
	var Strategy = $resource('/api/strategies');

	Strategy.query(function (results) {
		$scope.strategies = results;
	});

	$scope.strategies = [];

	$scope.addPrompt = function () {
		var strategy = new Strategy();
		strategy.prompt = $scope.strategyPrompt;
		strategy.$save(function (result) {
			$scope.strategies.push(result);
			$scope.strategyPrompt = '';
		});
	}
}]);