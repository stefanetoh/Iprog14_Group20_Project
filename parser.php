<?php
$programmes = array("TMETM", "THCIM");
$course_list_all = array();
$specialisation_list = array();

foreach($programmes as $programme){
	$url = 'http://www.kth.se/api/kopps/v1/programme/'.$programme.'/academic-year-plan/2014:2/2';
	$xml_url = simplexml_load_file($url);

/*
	foreach($xml_url->specialisation as $specialisation){		
		foreach($specialisation->conditional->courseRound as $specialisation_course){
			echo $specialisation["programmeSpecialisationCode"] . " " . $specialisation_course["courseCode"];
			echo "<br/>";
		}
	}
*/
	
	
	$course_list_programme = array();	
	foreach($xml_url->xpath('//courseRound') as $course){
		
		//get initial info form the first xml-page
		$course_code = $course["courseCode"];
		$start_term=$course["startTerm"]; 
		$year=substr($start_term, 0, 4); //ta de 3 första tecknen
		$term=substr($start_term, -1); //sista tecknet
		$round_id=$course["roundId"];
		
		
		
/* 		echo $xml_url->common->specialisation-> */
		
		//create a new link to get TITLE, HREF, POINTS and LEVEL
		$url_course = 'http://www.kth.se/api/kopps/v1/course/' . $course_code;
			$xml_course = simplexml_load_file($url_course);
			$course_title = $xml_course->title[1]; // 1-> english
			$course_href = $xml_course->supplementalInformationUrl[1];
			$course_credits = $xml_course->credits[1];
			$course_level = $xml_course->educationalLevel[1];
		
		//one last link to get the PERIOD
		$url_course_round = 'http://www.kth.se/api/kopps/v1/course/' . $course_code . '/round/' . $year . ':' . $term . '/' . $round_id;
			$xml_course_round = simplexml_load_file($url_course_round);
			$course_period = $xml_course_round->creditDistribution[0]->periodCredits[0]["period"];
		
		//create course objects and push to the array
		$course = array("code" => "$course_code" , "title" => "$course_title", "credits" => "$course_credits", "level" => "$course_level", "period" => "$course_period");
		array_push($course_list_programme, $course);	
	}
	
	//create an array with every course in that programme, push it to the upper list with all programmes and courses
	$temp_array = array($programme => $course_list_programme);
	array_push($course_list_all, $temp_array);	
}

echo json_encode($course_list_all);

?>