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

	$scope.deletePrompt = function (idx) {
		var id = $scope.strategies[idx]._id;

		var Strat = $resource('/api/strategies/'+id, {promptId:'@_id'});
		Strat.remove();

		$scope.strategies.splice(idx, 1);

	}
}]);





