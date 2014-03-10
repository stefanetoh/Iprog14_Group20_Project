/*FRÅN ANGULAR_TUTORIAL: */

var myAcademicControllers = angular.module('myAcademicControllers', []);

myAcademicControllers.controller('MainController', ['$scope', '$http', '$routeParams',
  function($scope, $http, $routeParams) {
  		/*   		FIXA HTTP GET  */
  		$scope.inputValue = "";
  		$scope.selectedCourse = "DM1021";
  		$scope.selectedMaster = JSON.parse($routeParams.selectedMaster);  //vi hämtar in det valda master-objektet som en sträng, gör om den till ett JSON-objekt.
  		
  		$scope.courses = [];
  		
  		$scope.masters = [
		{
			name : "Interactive Media Technology",
			id : 1
		},
		{
			name : "Human Computer Interaction",
			id : 2
		},
		{
			name : "Media Management",
			id : 3
		}
	];

}]);

myAcademicControllers.controller('Controller2', ['$scope', '$http',
  function($scope, $http) {
	  	/*   		FIXA HTTP GET  */
	  	$scope.selectedMaster;
	  	$scope.understand = "test";
		
		$scope.masters = [
		{
			name : "Interactive Media Technology",
			id : 1
		},
		{
			name : "Human Computer Interaction",
			id : 2
		},
		{
			name : "Media Management",
			id : 3
		}
	];
  }]);
  
