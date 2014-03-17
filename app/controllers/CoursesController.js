//Created by Stefan Etoh, 2014-03-16
//
//TODO: 
//

app.controller('CoursesController', function($scope, coursesService){		
				
	$scope.addCourse = function(course) {
		coursesService.add(course);
    }			
});