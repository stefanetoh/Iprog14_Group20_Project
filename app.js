var app = angular.module('MyApp', [
	'ngRoute',
	'myAcademicControllers'
	]);

/*
	By: Anna and Calle 2014-03-10
	This provides routing between different views. 
	We assign controllers to each view as well.

	OBS! WE MUST ADD CONTROLLERS FOR EACH VIEW!
*/

app.config(['$routeProvider',
  function($routeProvider) {
		$routeProvider.
		when('/Master/:selectedMaster/Track/:selectedTrack', {
			templateUrl: 'views/mainView.html',
			controller: 'MainController'
		}).
		when('/welcome', {
			templateUrl: 'views/welcomeView.html',
			controller: 'WelcomeController'
		}).
		otherwise({
			redirectTo:'/welcome'
		});
  }]);