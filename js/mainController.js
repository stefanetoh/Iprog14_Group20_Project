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
    //URL for the Media Technology track
/*
	var url = 'http://www.kth.se/api/kopps/v1/programme/TMETM/academic-year-plan/2013:2/1';
	
	$.ajax({
		type: 'GET',
	    url: url,
		dataType: 'xml', 
	    error: function(e) {
	       console.log(e.message);
	    },
	    success: function(xml) {
	    	var academicYearPlan = $(this).find('academicYearPlan').text();
	    	console.log(academicYearPlan);
		}
	});
*/
	$().ready(function () {
		var url = 'http://www.kth.se/api/kopps/v1/programme/TMETM/academic-year-plan/2013:2/1&callback=?';

		$.get(url, function (data) {
			alert(data);
			alert(url);
			// can use 'data' in here...
		});
	});

	
});



