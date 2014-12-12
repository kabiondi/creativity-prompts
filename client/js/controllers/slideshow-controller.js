app.controller('slideshowCtrl', ['$scope', '$resource', function ($scope, $resource) {
	var Prompt = $resource('/api/slideshow');

	Prompt.query(function (results) {
		$scope.slides = results;
	});

	(function () {
		runSlideshow();
		console.log('IIFE runs');
	})();



	//$scope.slides = [];

}])