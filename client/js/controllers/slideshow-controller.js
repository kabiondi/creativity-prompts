app.controller('slideshowCtrl', ['$scope', '$window', '$resource', function ($scope, $window, $resource) {
	var Prompt = $resource('/api/slideshow');
	var idx = 0;

	
	// var landingURL = "http://" + $window.location.host + "/views/slideshow";
	// $window.location.href = landingURL;

	// $scope.$route = $route;
	// $scope.$location = $location;
	// $scope.$routeParams = $routeParams;

	$scope.animation = true;

	$scope.changePrompt = function () {
		// var target = document.getElementById('prompt-target');
		if (idx >= $scope.slides.length) idx = 0;
		
		$scope.currPrompt = $scope.slides[idx].prompt;
		// target.innerHTML=$scope.currPrompt;
		idx++;

		$scope.templates = [
			{ url: 'views/template1.html' },
			{ url: 'views/template2.html' }
		];

		if ( idx % 2 == 0) {
			$scope.template = $scope.templates[0];
		} else
			$scope.template = $scope.templates[1];

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