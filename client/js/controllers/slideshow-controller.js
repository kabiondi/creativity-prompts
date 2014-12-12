app.controller('slideshowCtrl', ['$scope', '$resource', function ($scope, $resource) {
	var Prompt = $resource('/api/slideshow');

	console.log('slide control');

	Prompt.query(function (results) {
		$scope.slides = results;
	});

	//$scope.slides = [];

}])