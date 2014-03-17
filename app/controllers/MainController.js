
/*
Calle and Anna 2014-04-10:
*/



/* ------------Controller for mainView ------------*/
app.controller('MainController', function($scope, $http, $routeParams, coursesService) {

	$scope.inputValue = "";
	$scope.selectedCourse = "DM1021";
	$scope.selectedMaster = JSON.parse($routeParams.selectedMaster); // We get the chosen master-object as a string and parses it to a JSON object.
	$scope.selectedTrack = JSON.parse($routeParams.selectedTrack);
	//console.log("$scope.selectedMaster: " + $scope.selectedMaster.title + " $scope.selectedTrack: " + $scope.selectedTrack.trackCode);
	$scope.searchText;
	
	
	//Get the masters via the service (By Stefan)
	$scope.masters = coursesService.getMasters();


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

});
