//Created by Stefan Etoh 2014-03-16
//
//TODO: add to correct list (p1List...
//		remove from correct list
//

app.service('coursesService', function($rootScope){	
    var selectedCourses = [];
    var totalCredits = 0;   
    var advancedCredits = 0;
/*
    var selectedMaster = "";
    var selectedTrack = "";
*/
    var creditsP1 = 0;
    var creditsP2 = 0;
    var creditsP3 = 0;
    var creditsP4 = 0;
    
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
	
 	
/*
 	this.setSelectedMaster = function(master){
	 	selectedMaster = master;
	 	$rootScope.$broadcast("valuesUpdated"); 
 	}
 	
 	this.setSelectedTrack = function(track){
	 	selectedTrack = track;
	 	$rootScope.$broadcast("valuesUpdated"); 
 	}
 
*/
    this.add = function (course) {
    	var courseAdded = this.checkIfCourseAdded(course);
    	var period = course.period;
    	
    	if(courseAdded){
	    	console.log("Course already added...");   			
			$rootScope.$broadcast("alert");
    	}
    	else{
    		var courseCredits = parseFloat(course.credits);
			totalCredits += courseCredits;
			
	    	if(course.level == "Second cycle"){
	    		advancedCredits += courseCredits;
			}
			
			if(period == "1"){
	    		creditsP1 += courseCredits;
	    		//push to p1List
			}
			else if(period == "2"){
				creditsP2 += courseCredits;	    	
			}
			else if (period == "3"){
	    		creditsP3 += courseCredits;
			}
			else if(period =="4"){
	    		creditsP4 += courseCredits;
			}
			else{
	    		console.log("Lade aldrig till credits från period " + period);
			}
			
		   	
			selectedCourses.push(course);
		
			//everytime something in the model changes we will broadcast it to our controllers
			$rootScope.$broadcast("valuesUpdated");
    	}
	}
	
	this.checkIfCourseAdded = function (course){
		var courseAdded = false;
		
		for(var i=0; i<selectedCourses.length; i++){
			if(selectedCourses[i].code == course.code){
				courseAdded = true;
			}
		}
		return courseAdded;
		courseAdded = false;
	}

    this.remove = function (course) {   
    	var courseCredits = parseFloat(course.credits);
    	var period = course.period;
    	
    	totalCredits -= courseCredits;
		
		if(course.level == "Second cycle"){
	    	advancedCredits -= courseCredits;
    	}
    	
    				
		if(period == "1"){
    		creditsP1 -= courseCredits;
		}
		else if(period == "2"){
			creditsP2 -= courseCredits;	    	
		}
		else if (period == "3"){
    		creditsP3 -= courseCredits;
		}
		else if(period =="4"){
    		creditsP4 -= courseCredits;
		}
		else{
    		console.log("Lade aldrig till credits från period " + period);
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
    
    this.getSelectedMaster = function(){
	    return selectedMaster;
    }
    
    this.getSelectedTrack = function(){
	    return selectedTrack;
    }
    
    this.getCredP1 = function(){
	    return creditsP1;
    }
    
    this.getCredP2 = function(){
	    return creditsP2;
    }
    
    this.getCredP3 = function(){
	    return creditsP3;
    }
    
    this.getCredP4 = function(){
	    return creditsP4;
    }
    
    
    
    
    
});