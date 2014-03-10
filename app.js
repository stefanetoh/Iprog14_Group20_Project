var app = angular.module('MyApp', [
	'ngRoute',
	'myAcademicControllers'
	]);

app.config(['$routeProvider',
  function($routeProvider) {
		$routeProvider.
		when('/partials/:selectedMaster', {
			templateUrl: 'partials/mainView.html',
			controller: 'MainController'
		}).
		when('/partials', {
			templateUrl: 'partials/welcomeView.html',
			controller: 'Controller2'
		}).
		otherwise({
			redirectTo: '/partials'
		});
  }]);