/*
Calle and Anna 2014-04-10:
This is where we create all the controllers. 
Since it's a small project we've done what AngularJS recommend and put all controllers in the same module (myAcademicControllers).
OBS! WE MUST ADD CONTROLLERS FOR EACH VIEW!
*/

var myAcademicControllers = angular.module('myAcademicControllers', []);

myAcademicControllers.controller('MainController', ['$scope', '$http', '$routeParams',
  function($scope, $http, $routeParams) {
  		
  		$scope.inputValue = "";
  		$scope.selectedCourse = "DM1021";
  		$scope.selectedMaster = JSON.parse($routeParams.selectedMaster); // We get the chosen master-object as a string and parses it to a JSON object.
  		$scope.selectedTrack = $routeParams.selectedTrack;
  		
  		/*
	  		TODO: use $http (HTTP GET) to populate $scope.courses with JSON.
  		*/
  		$scope.courses = [];
  		
  		/*
	  		TODO: use $http (HTTP GET) to populate $scope.masters with JSON.
  		*/
  		$scope.masters = [
		{
			name : "Interactive Media Technology",
			id : 1,
			code : "TMETM",
			tracks : [
				'META',
				'METB',
				'METC',
				'METD'
			]
		},
		{
			name : "Human Computer Interaction",
			id : 2,
			code : "THCIM",
			tracks : ['META']
		},
		{
			name : "Media Management",
			id : 3,
			code : "TMMTM",
			tracks : ['META']
		}
	];

}]);

myAcademicControllers.controller('WelcomeController', ['$scope', '$http',
  function($scope, $http) {
	  	/*   		FIXA HTTP GET  */
	  	$scope.selectedMaster;
	  	$scope.understand = "test";
		$scope.selectedTrack = null;
		
		
		/*
	  		TODO: use $http (HTTP GET) to populate $scope.masters with JSON.
  		*/
		$scope.masters = [
		{
			name : "Interactive Media Technology",
			id : 1,
			code : "TMETM",
			tracks : [
				'META',
				'METB',
				'METC',
				'METD'
			]
		},
		{
			name : "Human Computer Interaction",
			id : 2,
			code : "THCIM",
			tracks : ['META']
		},
		{
			name : "Media Management",
			id : 3,
			code : "TMMTM",
			tracks : ['META']
		}
	];

  }]);
  
