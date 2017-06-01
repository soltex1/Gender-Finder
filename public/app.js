var myApp = angular.module('myApp',['ngRoute']);

myApp.config(function($routeProvider){
	$routeProvider.when('/', {
		controller: 'GenresController',
		templateUrl: 'views/genres.html'
	})
	.otherwise({
		redirectTo: '/'
	})
});