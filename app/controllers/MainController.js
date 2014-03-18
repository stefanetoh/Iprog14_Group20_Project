
/*
Calle and Anna 2014-03-10: Updates by Johan Bäckman 2014-03-18.

// TODO: Maybe connect to the model instead, connected to the entire page at the moment
  			Add set- and get-SelectedTrack/Master in model
  			$broadcast when they change, move lists to model
*/



/* ------------Controller for mainView ------------*/
app.controller('MainController', function($scope, $http, $routeParams, coursesService) {


	$scope.inputValue = "";
	$scope.selectedCourse = "DM1021";
	$scope.selectedMaster = JSON.parse($routeParams.selectedMaster); // We get the chosen master-object as a string and parses it to a JSON object.
	$scope.selectedTrack = JSON.parse($routeParams.selectedTrack);
	//console.log("$scope.selectedMaster: " + $scope.selectedMaster.title + " $scope.selectedTrack: " + $scope.selectedTrack.trackCode);
	$scope.searchText;
	$scope.currentCourse;
	
	
	//Get the masters via the service (By Stefan)
	$scope.masters = coursesService.getMasters();


    // Calle and Anna 2014-03-13
    // Saves the correct index of the chosen master and track from the JSON object
    $scope.index = $scope.masters.map(function(d) { return d['title']; }).indexOf($scope.selectedMaster.title);
    $scope.trackIndex = $scope.masters[$scope.index].specialisation.map(function(d) {
    	return d['trackCode']; }).indexOf($scope.selectedTrack.trackCode);
    	

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
		    	$scope.listMandatory = $scope.masters[$scope.index].mandatory;
		$scope.listTracks = $scope.selectedTrack.trackCourses;
	});


    //console.log("index är: " + $scope.index + "trackIndex är: " + $scope.trackIndex);
    
    
    // DRAG DROP!!!
    	
    	// list with mandatory courses for chosen master, to be used  in the <tr>
    	$scope.listMandatory = $scope.masters[$scope.index].mandatory; 
		$scope.listTracks = $scope.selectedTrack.trackCourses;
		
		
		//TODO Create new controller for the periods and paste this content.
		$scope.currentPeriod = 0;
		$scope.acceptP1 = {
			activeClass: "ui-state-highlight",
	    	accept: function(dragEl) {
			    if ($scope.currentPeriod==1) {
				    //console.log("inne i acceptFunciton");
				    return true;
				}
			}
        }
        
        $scope.acceptP2 = {
       	 	activeClass: "ui-state-highlight",
	    	accept: function(dragEl) {
		    if ($scope.currentPeriod==2) {
			    //console.log("inne i acceptFunciton");
			    return true;
        }
        }
        }
        
        $scope.acceptP3 = {
        	activeClass: "ui-state-highlight",
	    	accept: function(dragEl) {
		    if ($scope.currentPeriod==3) {
			    //console.log("inne i acceptFunciton");
			    return true;
        }
        }
        }		
        
        $scope.acceptP4 = {
        	activeClass: "ui-state-highlight",
	    	accept: function(dragEl) {
		    if ($scope.currentPeriod==4) {
			    //console.log("inne i acceptFunciton");
			    return true;
        }
        }
        }	
        
        
   		$scope.startCallback = function(event, ui){
			$scope.currentPeriod = $(this)[0].course.period; 	//Selects the period of the course being dragged at the moment.	
			$scope.currentCourse = $(this)[0].course;			//TODO: Can't find this variable in HTML-page.  	
			console.log("i startCallBack, håller i: " + $scope.currentCourse.title);
		}

});
