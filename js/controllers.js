/*
Calle and Anna 2014-04-10:
This is where we create all the controllers. 
Since it's a small project we've done what AngularJS recommend and put all controllers in the same module (myAcademicControllers).
OBS! WE MUST ADD CONTROLLERS FOR EACH VIEW/DIV!
*/

var myAcademicControllers = angular.module('myAcademicControllers', []);


/* ------------Controller for mainView ------------*/
myAcademicControllers.controller('MainController', ['$scope', '$http', '$routeParams',
  function($scope, $http, $routeParams) {

		$scope.inputValue = "";
		$scope.selectedCourse = "DM1021";
		$scope.selectedMaster = JSON.parse($routeParams.selectedMaster); // We get the chosen master-object as a string and parses it to a JSON object.
		$scope.selectedTrack = JSON.parse($routeParams.selectedTrack);
		//console.log("$scope.selectedMaster: " + $scope.selectedMaster.title + " $scope.selectedTrack: " + $scope.selectedTrack.trackCode);
		$scope.searchText;
		
  		$scope.masters = [];

		//Ajax magic by Stefan
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
        // Calle and Anna 2014-03-13
        // Saves the correct index of the chosen master and track from the JSON object
        $scope.index = $scope.masters.map(function(d) { return d['title']; }).indexOf($scope.selectedMaster.title);
        $scope.trackIndex = $scope.masters[$scope.index].specialisation.map(function(d) {return d['trackCode']; }).indexOf($scope.selectedTrack.trackCode);
        
        // $watch is a kind of listener. When selectedMaster is updated the inner code runs. Therefore $scope.index and $scope.trackIndex updates when selectedMaster updates.
        $scope.$watch('selectedMaster', function(){
		        $scope.index = $scope.masters.map(function(d) { return d['title']; }).indexOf($scope.selectedMaster.title);
		        $scope.trackIndex = $scope.masters[$scope.index].specialisation.map(function(d) {return d['trackCode']; }).indexOf($scope.selectedTrack.trackCode);
		        //console.log("index " + $scope.index + "trackindex: " + $scope.trackIndex + " $scope.selectedTrack.trackCode: " + $scope.selectedTrack.trackCode);
		    
		});	
        // $watch is a kind of listener. When selectedTrack is updated the inner code runs. Therefore $scope.index and $scope.trackIndex updates when selectedTrack updates.
		$scope.$watch('selectedTrack', function(){
		        $scope.index = $scope.masters.map(function(d) { return d['title']; }).indexOf($scope.selectedMaster.title);
		        $scope.trackIndex = $scope.masters[$scope.index].specialisation.map(function(d) {return d['trackCode']; }).indexOf($scope.selectedTrack.trackCode);
			
		});

        //console.log("index är: " + $scope.index + "trackIndex är: " + $scope.trackIndex);

}]);

myAcademicControllers.controller('PeriodController', ['$scope',
  function($scope) {

		//$scope.inputValue = "";
		//$scope.selectedCourse = "DM1021";
		//$scope.selectedMaster = ;		
		//$scope.selectedTrack = ;
		
		//console.log("$scope.selectedMaster: " + $scope.selectedMaster + " $scope.selectedTrack: " + $scope.selectedTrack);
		//$scope.selectedTrack = JSON.parse($scope.selectedTrack);
		//$scope.searchText;

		$scope.whatever = "tjena";
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


/* ------------Controller for weclomeView ------------*/
myAcademicControllers.controller('WelcomeController', ['$scope', '$http',
  function($scope, $http) {

		$scope.masters = [];

		//Ajax magic by Stefan
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
        
        // Calle and Anna 2014-03-13
        // INIT the variables
        $scope.selectedMaster = $scope.masters[0];
		$scope.selectedTrack = $scope.masters[0].specialisation[0];
        
        // Saves the correct index of the chosen master and track from the JSON object
        $scope.index = $scope.masters.map(function(d) { return d['title']; }).indexOf($scope.selectedMaster.title);
		$scope.trackIndex = $scope.masters[$scope.index].specialisation.map(function(d) {return d['trackCode']; }).indexOf($scope.selectedTrack.trackCode);
		//console.log("index innan watch " + $scope.index + "trackindex innan watch: " + $scope.trackIndex);
		
		 // $watch is a kind of listener. When selectedMaster is updated the inner code runs. Therefore $scope.index and $scope.trackIndex updates when selectedMaster updates.
		$scope.$watch('selectedMaster', function(){
				
		        $scope.index = $scope.masters.map(function(d) { return d['title']; }).indexOf($scope.selectedMaster.title);
		        $scope.selectedTrack = $scope.masters[$scope.index].specialisation[0]; //Set the init value to the first element in the list. 
		        $scope.trackIndex = $scope.masters[$scope.index].specialisation.map(function(d) {return d['trackCode']; }).indexOf($scope.selectedTrack.trackCode);

		        //console.log("index " + $scope.index + "trackindex: " + $scope.trackIndex + " $scope.selectedTrack.trackCode: " + $scope.selectedTrack.trackCode);
		    
		});	
		
		 // $watch is a kind of listener. When selectedTrack is updated the inner code runs. Therefore $scope.index and $scope.trackIndex updates when selectedTrack updates.
		$scope.$watch('selectedTrack', function(){
		        $scope.index = $scope.masters.map(function(d) { return d['title']; }).indexOf($scope.selectedMaster.title);
		        $scope.trackIndex = $scope.masters[$scope.index].specialisation.map(function(d) {return d['trackCode']; }).indexOf($scope.selectedTrack.trackCode);
			
		});
		
  }]);