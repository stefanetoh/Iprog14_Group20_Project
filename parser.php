<!-- By Stefan Etoh, 2014-02-11 -->
<?php
$programmes = array("TMETM", "THCIM");
$course_list_all = array();

foreach($programmes as $programme){
	$url = 'http://www.kth.se/api/kopps/v1/programme/' . $programme . '/academic-year-plan/2014:2/2';
	$xml_url = simplexml_load_file($url);
	
	//Set variable names to the different xml elements
	$mandatory = $xml_url->common->mandatory;
	$specialisation = $xml_url->specialisation;
	$conditional = $xml_url->common->conditional;
	
	//list of objects that will store the courses 
	$mandatory_object_list = array();
	$specialisation_object_list = array();
	$conditional_object_list = array();
	
	
	//if the track contains any mandatory courses	
	if(isset($mandatory)){		
		$mandatory_list = array();
		
		//loop the mandatory courses
		foreach($mandatory->courseRound as $course){	
		
			//get initial info form the first xml-page
			$course_code = $course["courseCode"];
			$start_term=$course["startTerm"]; 
			$round_id=$course["roundId"];
			
			//create course-objects
			$course = createCourseObject("$course_code", "$start_term", "$round_id");
			array_push($mandatory_list, $course);
			
		}
		//create "json-object"-compatible array for the Mandatory courses 
		$mandatory_object = array("Mandatory" => $mandatory_list);
		array_push($mandatory_object_list, $mandatory_object);

	}


	//if the track contains any specialisations
	if(isset($specialisation)){
		$specialisation_list_all = array();
		
		//loop the specialisations
		foreach($specialisation as $specialisation){
			$specialisation_code = $specialisation["programmeSpecialisationCode"];
			$specialisation_list = array();
			
			//loop the courses in each specialisation
			foreach($specialisation->conditional->courseRound as $course){
				
				//get initial info form the first xml-page
				$course_code = $course["courseCode"];
				$start_term = $course["startTerm"]; 
				$round_id = $course["roundId"];
				
				//create course-objects
				$course = createCourseObject("$course_code", "$start_term", "$round_id");
				array_push($specialisation_list, $course);
								
			}
			//create "json-object"-compatible array for the Specialisation courses 
			$specialisation_object = array("$specialisation_code" => $specialisation_list);
			array_push($specialisation_list_all, $specialisation_object);
			
		}
		
		array_push($specialisation_object_list, $specialisation_list_all);
	}
	
	
	//if the track contains any conditional courses
	if(isset($conditional)){
		$conditional_list = array();
		
		//loop the conditional courses
		foreach($conditional->courseRound as $course){	
		
			//get initial info form the first xml-page
			$course_code = $course["courseCode"];
			$start_term=$course["startTerm"]; 
			$round_id=$course["roundId"];
			
			//create course-objects
			$course = createCourseObject("$course_code", "$start_term", "$round_id");
			array_push($conditional_list, $course);
			
		}
		//create "json-object"-compatible array for the Conditional courses 
		$conditional_object = array("Conditional" => $conditional_list);
		array_push($conditional_object_list, $conditional_object);
		
	}
	//create "json-object"-compatible array, each programme containing the different course_object_lists
	//json-structure Programme->Mandatory, Specialisation(s), Conditional
	$course_list = array($mandatory_object_list, $specialisation_object_list, $conditional_object_list);
	$programme_object = array($programme => $course_list);
	array_push($course_list_all, $programme_object);
}



//function that creates course-objects from the different programme- and course-pages
//that we need in order to create the json-object for each course
function createCourseObject($course_code, $start_term, $round_id){
	
	//edit the string to be able to enter the course round page
	$year=substr($start_term, 0, 4); //3 first signs: $start_term = "2014:2" 
	$term=substr($start_term, -1); //last sign

	//create a new link to get TITLE, HREF, POINTS and LEVEL
	$url_course = 'http://www.kth.se/api/kopps/v1/course/' . $course_code;
	$xml_course = simplexml_load_file($url_course);
	$course_title = $xml_course->title[1]; // 1-> english
	$course_credits = $xml_course->credits[1];
	$course_level = $xml_course->educationalLevel[1];

	//one last link to get the PERIOD
	$url_course_round = 'http://www.kth.se/api/kopps/v1/course/' . $course_code . '/round/' . $year . ':' . $term . '/' . $round_id;
	$xml_course_round = simplexml_load_file($url_course_round);
	$course_period = $xml_course_round->creditDistribution[0]->periodCredits[0]["period"];
	
	//create course-object
	$course = array("code" => "$course_code" , "title" => "$course_title", "credits" => "$course_credits", "level" => "$course_level", "period" => "$course_period");
	
	return $course;	
	
}

//json_encode the list 
echo json_encode($course_list_all);
?>