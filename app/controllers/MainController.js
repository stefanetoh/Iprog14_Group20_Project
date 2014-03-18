
/*
Calle and Anna 2014-03-10: Updates by Johan Bäckman 2014-03-17.

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
	$scope.searchText;
	
	
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

	    
	});	
	
	 // $watch is a kind of listener. When selectedTrack is updated the inner code runs. Therefore $scope.index and $scope.trackIndex updates when selectedTrack updates.
	$scope.$watch('selectedTrack', function(){

	        $scope.index = $scope.masters.map(function(d) { return d['title']; }).indexOf($scope.selectedMaster.title);
	        $scope.trackIndex = $scope.masters[$scope.index].specialisation.map(function(d) {return d['trackCode']; }).indexOf($scope.selectedTrack.trackCode);
		    	$scope.listMandatory = $scope.masters[$scope.index].mandatory;
		$scope.listTracks = $scope.selectedTrack.trackCourses;
	});


    
    
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
				    return true;
				}
			}
        }
        
        $scope.acceptP2 = {
       	 	activeClass: "ui-state-highlight",
	    	accept: function(dragEl) {
		    if ($scope.currentPeriod==2) {
			    return true;
        }
        }
        }
        
        $scope.acceptP3 = {
        	activeClass: "ui-state-highlight",
	    	accept: function(dragEl) {
		    if ($scope.currentPeriod==3) {
			    return true;
        }
        }
        }		
        
        $scope.acceptP4 = {
        	activeClass: "ui-state-highlight",
	    	accept: function(dragEl) {
		    if ($scope.currentPeriod==4) {
			    return true;
        }
        }
        }	
        
        
   		$scope.startCallback = function(event, ui){
			$scope.currentPeriod = $(this)[0].course.period; 	//Selects the period of the course being dragged at the moment.	  
		}
		
		
		// Johan Bäckman 2013-03-18
		$scope.completeDrop = function(event, ui){
			$scope.currentCourse = $(this)[0].course;	
			console.log("completeDrop: "+ $scope.currentCourse.title);	//$(this)[0].course.title);
																		//Det över funkar, men inte den till vänster. 
																		 
			coursesService.add($(this)[0].course);	//TODO: Kan ej användas som objekt		
													//		fungerar ej med add()
			
			
			
		}

});
