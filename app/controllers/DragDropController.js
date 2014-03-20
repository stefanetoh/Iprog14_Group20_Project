app.controller('DragDropController', function($scope, coursesService){
	$scope.currentCourse;

	$scope.removeCourse = function(course) {
		coursesService.remove(course);	
	} 
	
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
		$scope.currentCourse = $(this)[0].course;
	}
	
	
	// Johan Bäckman 2013-03-18
	$scope.drop = function(event, ui){
		//console.log("completeDrop: "+ $scope.currentCourse);			
		coursesService.add($scope.currentCourse);						
	} 
	
});