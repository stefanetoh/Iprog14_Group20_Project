/*
Calle and Anna 2014-04-10:
This is where we create all the controllers. 
Since it's a small project we've done what AngularJS recommend and put all controllers in the same module (myAcademicControllers).
OBS! WE MUST ADD CONTROLLERS FOR EACH VIEW/DIV!
*/

var myAcademicControllers = angular.module('myAcademicControllers', []);


/* -------------------------------------------SERVICES SOLUTION-----------------------------------------------------
myAcademicControllers.service('SelectedCoursesService', function(){	
    var selectedCourses = [];
    var totalCredits = 0;   
    this.add = function (course) {
    	//alert("Totalcredits innan add: "+totalCredits);
		totalCredits += parseFloat(course.credits);
		//alert("Totalcredits efter add: "+totalCredits);
    	selectedCourses.push(course);
    	var index = selectedCourses.indexOf(course);
		//alert("Saved correctly: "+selectedCourses[index].code);
    } 
    this.remove = function (course) {   
    	totalCredits -= parseFloat(course.credits);
		//determine position of course in array and remove it
        var index = selectedCourses.indexOf(course);
        selectedCourses.splice(index,1);
    }	
	this.total = function(){
        return totalCredits;
    }
    this.list = function(){
        return selectedCourses;
    }       
});
-------------------------------------END OF  SERVICES SOLUTION--------------------------------------------------*/



/* ------------Controller for mainView ------------*/
myAcademicControllers.controller('MainController', ['$scope', '$http', '$routeParams', 
  function($scope, $http, $routeParams) {

		$scope.inputValue = "";
		$scope.selectedCourse = "DM1021";
		$scope.selectedMaster = JSON.parse($routeParams.selectedMaster); // We get the chosen master-object as a string and parses it to a JSON object.
		$scope.selectedTrack = JSON.parse($routeParams.selectedTrack);
		//console.log("$scope.selectedMaster: " + $scope.selectedMaster.title + " $scope.selectedTrack: " + $scope.selectedTrack.trackCode);
		$scope.searchText;


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
        
 //----------------------------------- MAIN CONTROLLER SOLUTION---------------------------//       
        $scope.selectedCourses = [];
        $scope.totalCredits=0;
		$scope.max=60;
		
		$scope.addCourse = function(course) {
			$scope.totalCredits += parseFloat(course.credits);
        	$scope.selectedCourses.push(course);
			$scope.newcourse = {};
			$scope.dynamic = $scope.totalCredits;
			

			//$scope.progressBar();
        }
        
        
		$scope.removeCourse = function(course){
        	$scope.totalCredits -= parseFloat(course.credits);
	        
	        var index = $scope.selectedCourses.indexOf(course);
	        $scope.selectedCourses.splice(index,1);
	        $scope.dynamic = $scope.totalCredits;
	        
	        if($course.level == "Second cycle"){
		        $scope.totalCredits -= parseFloat(course.credits);
	        }
	        //$scope.progressBar();	//TEST
        }
//--------------------------------END OF MAIN CONTROLLER SOLUTION-----------------------//        
        
        
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



/* ------------Controller for weclomeView ------------*/
myAcademicControllers.controller('WelcomeController', ['$scope', '$http',
  function($scope, $http) {


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

/*

//------------------------------------------SERVICES SOLUTION_______________________________________//
//By Stefan

myAcademicControllers.controller('periodController', ['$scope', 'SelectedCoursesService',
	function($scope, SelectedCoursesService) {
		$scope.selectedCourses = SelectedCoursesService.list();
		$scope.totalCredits = SelectedCoursesService.total();
		$scope.removeCourse = function(course) {
			SelectedCoursesService.remove(course);	
        }    
	}
]);
myAcademicControllers.controller('coursesController', ['$scope', 'SelectedCoursesService', 
	function($scope, SelectedCoursesService){		
		$scope.addCourse = function(course) {
			SelectedCoursesService.add(course);
			
			$scope.totalCredits = SelectedCoursesService.total();
			$scope.selectedCourses = SelectedCoursesService.list();
        }			
	
	}
]);
myAcademicControllers.controller('progressController', ['$scope', 'SelectedCoursesService', 
	function($scope, SelectedCoursesService) {
		$scope.max = 60;
		$scope.totalCredits = SelectedCoursesService.total();
//		$scope.progressBar = function(value) {
			$scope.dynamic = SelectedCoursesService.total();
	//	};
	}
]);
myAcademicControllers.controller('creditsMenuController', ['$scope', 'SelectedCoursesService', 
	function($scope, SelectedCoursesService) {
		$scope.selectedCourses = SelectedCoursesService.list();
		$scope.totalCredits = SelectedCoursesService.total();
		
	}
]);
---------------------------------END OF SERVICES SOLUTION----------------------------------------*/


