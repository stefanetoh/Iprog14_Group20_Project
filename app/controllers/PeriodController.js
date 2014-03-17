//Created by Stefan Etoh, 2014-03-16
//
// TODO: Points per period


app.controller('PeriodController', function($scope, coursesService){
	$scope.selectedCourses = coursesService.getSelectedCourses();
	$scope.creditsP1 = coursesService.getCredP1();
	$scope.creditsP2 = coursesService.getCredP2();
	$scope.creditsP3 = coursesService.getCredP3();
	$scope.creditsP4 = coursesService.getCredP4();

	
	$scope.removeCourse = function(course) {
		coursesService.remove(course);	
	}    
	
	$scope.$on('valuesUpdated', function(){
		$scope.creditsP1 = coursesService.getCredP1();
		$scope.creditsP2 = coursesService.getCredP2();
		$scope.creditsP3 = coursesService.getCredP3();
		$scope.creditsP4 = coursesService.getCredP4();
	})
});