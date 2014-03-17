//Created by Stefan Etoh 2014-03-16
//
//TODO: Points per period, 
//		Error handling: not be able to add one course several times
//

app.service('coursesService', function($rootScope){	
    var selectedCourses = [];
    var totalCredits = 0;   
    var advancedCredits = 0;
    
    
	this.getMasters = function(){
		var url = "app/scripts/getMasters.php";
		
	    $.ajax({
	        type: 'GET',
	        url: url,
	        dataType: 'json',
	        async: false,
	        success: function (data) {
	            masters = data;
	        },
	        error: function(e){
	            console.log(e.message);
	        }
	    });		
	    
	    return masters;	
	}
 	
 
	//BÖR LÄGGA IN NÅGON FORM AV CHECK, HAR MAN REDAN LAGT TILL KURSEN SKA MAN INTE KUNNA LÄGGA TILL DEN IGEN!
    this.add = function (course) {
    	var courseCredits = parseFloat(course.credits);
		totalCredits += courseCredits;
    	
    	if(course.level == "Second cycle"){
	    	advancedCredits += courseCredits;
    	}
    	
    	selectedCourses.push(course);

		
		//everytime something in the model changes we will broadcast it to our controllers
		$rootScope.$broadcast("valuesUpdated");
    } 
    
    
    this.remove = function (course) {   
    	var courseCredits = parseFloat(course.credits);
    	
    	totalCredits -= courseCredits;
		
		if(course.level == "Second cycle"){
	    	advancedCredits -= courseCredits;
    	}
    	
		//determine position of course in array and remove it
        var index = selectedCourses.indexOf(course);
        selectedCourses.splice(index,1);
        
        
		//everytime something in the model changes we will broadcast it to our controllers
		$rootScope.$broadcast("valuesUpdated");        
    }	
	

	this.getTotalCredits = function(){
        return totalCredits;
    }
    
    
    this.getSelectedCourses = function(){
        return selectedCourses;
    }       
    
    
    this.getAdvancedCredits = function(){
	    return advancedCredits;
    }
});