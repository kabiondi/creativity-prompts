app.controller('slideshowCtrl', ['$scope', '$window', '$resource', function ($scope, $window, $resource) {
	var Prompt = $resource('/api/slideshow');
	var idx = 0;
	var counter = 0;

	$scope.changePrompt = function () {
		$scope.currPrompt = $scope.slides[idx].prompt;
		idx++;

		if (idx >= $scope.slides.length) idx = 0;

		$scope.templates = [
			{ url: 'views/template1.html' },
			{ url: 'views/template2.html' }
		];

		// switch template - triggers ngAnimate
		if (counter % 2 == 0) {
			$scope.template = $scope.templates[1];
			counter++;
		}
		else {
			$scope.template = $scope.templates[0];
			counter++;
		}
	};

	$scope.init = function () {
		Prompt.query(function (results) {
			var arr = results;
			// Fisher-Yates shuffle algorithm
			var m = arr.length, t, i;

			while (m) {
				i = Math.floor(Math.random() * m--);

				t = arr[m];
				arr[m] = arr[i];
				arr[i] = t;
			}

			$scope.slides = arr;
			$scope.changePrompt();
		});
	}
	$scope.init();

}]);