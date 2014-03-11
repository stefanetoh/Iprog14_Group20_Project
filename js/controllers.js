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
		//$scope.selectedTrack = $routeParams.selectedTrack;
		$scope.selectedTrack = JSON.parse($routeParams.selectedTrack);
		console.log("$scope.selectedMaster: " + $scope.selectedMaster + " $scope.selectedTrack: " + $scope.selectedTrack);
		//$scope.selectedTrack = JSON.parse($scope.selectedTrack);
		$scope.searchText;


  		$scope.masters = [];

		//Ajax magic på Stefan
		var url = "parser.php";
        $.ajax({
	        type: 'GET',
	        url: url,
	        dataType: 'json',
	        async: false,
	        success: function (data) {
	            $scope.masters = data;
	        },
	        error: function(e){
	            console.log(e.message);
	        }
        });


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
		$scope.masters = [];

		//Ajax magic på Stefan
		var url = "parser.php";
        $.ajax({
	        type: 'GET',
	        url: url,
	        dataType: 'json',
	        async: false,
	        success: function (data) {
	            $scope.masters = data;
	        },
	        error: function(e){
	            console.log(e.message);
	        }
        });



  }]);