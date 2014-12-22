app.controller('slideshowCtrl', ['$scope', '$resource', function ($scope, $resource) {
	var Prompt = $resource('/api/slideshow');
	var idx = 0;

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
	});

	$scope.changePrompt = function () {
		var target = document.getElementById('prompt-area');
		if (idx >= $scope.slides.length) idx = 0;
		var currPrompt = $scope.slides[idx].prompt;
		target.innerHTML=currPrompt;
		idx++;
	}

}])