//Created by Stefan Etoh, 2014-03-16
//
// TODO: Points per period


app.controller('PeriodController', function($scope, coursesService){
	$scope.selectedCourses = coursesService.getSelectedCourses();
				
	$scope.removeCourse = function(course) {
		coursesService.remove(course);	
	}    
	
});