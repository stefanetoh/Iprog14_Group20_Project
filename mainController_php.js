// Implement this controllers object when we want to pass several controllers!
//var controllers = {};

app.controller("MainController", function($scope){
	$scope.whatever = "whatever bro";
	$scope.inputValue = "";
	$scope.selectedCourse = "DM1021";

	$scope.courses = [];
/*
	$scope.courses = [
            {
            "code": "DM3510",
            "title": "Current Topics in Technology-Enhanced Learning",
            "href": "http://www.kth.se/student/kurser/kurs/DM3510?l=en",
            "info": "",
            "credits": "7.5",
            "level": "Third cycle"
        }
    ];
*/

	var test;
	alert("UTE");
	function forceAjax(){
		$.ajax({
			type: 'GET',
		    url: "parser.php",
			dataType: 'json', 
		    error: function(e) {
		       console.log(e.message);
		    },
		    success: function(data) {
		    	console.log(data);
		    	test=data;
		    	alert("INNE");
		    	$scope.courses.push(data);	//funkar ej
			}
		});
	}
	forceAjax();
	alert("UTE IGEN: " + test);

});



