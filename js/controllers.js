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
        
        
        $scope.selectedCourses = [];
        $scope.totalCredits=0;
		
		$scope.add = function(course) {
			$scope.totalCredits += parseFloat(course.credits);
        	$scope.selectedCourses.push(course);
			$scope.newcourse = {};
			$scope.dynamic = $scope.totalCredits;
			$scope.progressBar();
        }
        
        
}]);

myAcademicControllers.controller('WelcomeController', ['$scope', '$http',
  function($scope, $http) {
		$scope.selectedMaster;
		$scope.understand = "test";
		$scope.selectedTrack = null;

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


myAcademicControllers.controller('periodOneController', ['$scope',
  function($scope) {
	  
        $scope.remove = function(index, course){
        	$scope.totalCredits = parseFloat(course.credits);
	        $scope.selectedCourses.splice(index,1);
	        $scope.dynamic = $scope.totalCredits;
	        alert($scope.totalCredits);
	        $scope.progressBar($scope.totalCredits);	//TEST
        }
	  
/*
  	  for(i=0; i<$scope.selectedCourses; i++){
	  	  $scope.periodOneCourses.push("test");
	  } 
*/

 }]);


myAcademicControllers.controller('progressController', ['$scope',
  function($scope) {
	 $scope.max = 60;

$scope.progressBar = function(value) {
		alert(value);		
		$scope.dynamic = $scope.totalCredits;
	};
 }]);
