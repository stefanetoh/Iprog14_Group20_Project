// Implement this controllers object when we want to pass several controllers!
//var controllers = {};

app.controller("MainController", function($scope){
	$scope.whatever = "whatever bro";
	$scope.inputValue = "";
	$scope.selectedCourse = "DM1021";

	$scope.courses = [];
	
/*
	$.getJSON( "DM.json&callback=?", function( data ) {
  
		  var courses = data.courses;


		  for(i=0; i<courses.length; i++){	  	
			  var code = courses[i].code;
			  var title = courses[i].title;
			  var href = courses[i].href;
			  var info = courses[i].info;
			  var credits = courses[i].credits;
			  var level = courses[i].level;	
			  var item = '{code: "'+code+'", '+'title: "'+title +'", ' + 'href: "' + href +'", ' +'info: "'+info +'", '+'credits: "'+ credits + '", '+'level: "'+level+'"}';
			  
			  $scope.courses.push(item);

		  }
	});
*/

	
/*
		$.ajax({
	        type: 'GET',
	        dataType: 'jsonp',
			data: {},
	        url: "http://www.student.nada.kth.se/~etoh/Iprog14_Group20_Project/DM.js",
	        //url: "http://www.kth.se/api/kopps/v2/courses/DM.json",
			async: false,
	        error: function (jqXHR, textStatus, errorThrown) {
	            console.log("jqXHR! "+jqXHR);
	            console.log("textStatus! "+textStatus);
	            console.log("errorThrown! "+errorThrown);
	        },
	        success: function (result,status,xhr) {
				console.log("SUCCESS"+result);
				alert("success");
	        }    
	    })
*/
(function($) {
var url = 'http://www.student.nada.kth.se/~etoh/Iprog14_Group20_Project/DM.json?callback=?';

$.ajax({
   type: 'GET',
    url: url,
    async: false,
    jsonpCallback: 'jsonCallback',
    contentType: "application/json",
    dataType: 'jsonp',
    success: function(json) {
       console.log(json.courses[0].code);
    },
    error: function(e) {
       console.log(e.message);
    }
});

})(jQuery);


	    
/*
	    var courses = data.courses;
	    for(i=0; i<courses.length; i++){	  	
			  var code = courses[i].code;
			  var title = courses[i].title;
			  var href = courses[i].href;
			  var info = courses[i].info;
			  var credits = courses[i].credits;
			  var level = courses[i].level;	
			  var item = '{code: "'+code+'", '+'title: "'+title +'", ' + 'href: "' + href +'", ' +'info: "'+info +'", '+'credits: "'+ credits + '", '+'level: "'+level+'"}';
			  
			  $scope.courses.push(item);
		  }
*/
/* 	 }); */
});

/*

	$scope.courses = 
	[
	{
            code: "DM3510",
            title: "Current Topics in Technology-Enhanced Learning",
            href: "http://www.kth.se/student/kurser/kurs/DM3510?l=en",
            info: "",
            credits: "7.5",
            level: "Third cycle"
        },
            {
            code: "DM3516",
            title: "Labour - societal challenges and future possibilities",
            href: "http://www.kth.se/student/kurser/kurs/DM3516?l=en",
            info: "",
            credits: "7.5",
            level: "Third cycle"
        },
            {
            code: "DM2532",
            title: "Work Integrating Course in Media Technology",
            href: "http://www.kth.se/student/kurser/kurs/DM2532?l=en",
            info: "<p>An course specifically preparing students for working within the media industry and\/or as a media technology engineer.<\/p>",
            credits: "7.5",
            level: "Second cycle"
  
        }
	];
*/

