var app = angular.module('creativityPrompts', ['ngRoute', 'ngResource', 'ngAnimate',])

.config(function($routeProvider, $locationProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'views/home.html',
			})
			.when('/edit', {
				templateUrl: 'views/edit.html',
				controller: 'strategiesController'
			})
			.when('/slideshow', {
				templateUrl: 'views/slideshow.html',
				controller: 'slideshowCtrl',
			})
			
		$locationProvider.html5Mode(true);
});

