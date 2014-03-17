var app = angular.module('MyApp', [
	'ngRoute',
	'ui.bootstrap',
	'ngDragDrop'
	]);

/*
	By: Anna and Calle 2014-03-10
	This provides routing between different views. 
	We assign controllers to each view as well.

*/

app.config(function($routeProvider) {
		$routeProvider.
		when('/Master/:selectedMaster/Track/:selectedTrack', {
			templateUrl: 'app/views/mainView.html',
			controller: 'MainController'
		}).
		when('/welcome', {
			templateUrl: 'app/views/welcomeView.html',
			controller: 'WelcomeController'
		}).
		otherwise({
			redirectTo:'/welcome'
		});
});