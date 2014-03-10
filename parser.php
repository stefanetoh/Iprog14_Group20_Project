<?php
//the xml-file structure:
/*
	<academicYearPlan...>
		<common>
			<supplementaryInfo xml:lang="sv">...</supplementaryInfo>
			<supplementaryInfo xml:lang="en">...</supplementaryInfo>
			<mandatory>
				<courseRound courseCode="DM2572" startTerm="20132" roundId="1"/>
				<courseRound courseCode="DM2573" startTerm="20132" roundId="1"/>
				<courseRound courseCode="DM2500" startTerm="20141" roundId="1"/>
			</mandatory>
		</common>
	...
	</academicYearPlan>
*/


//how angular wants the courses:
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

//från denna länk kan vi hämta alla kurser för Medieteknik-mastern; obligatoriska och villkorligt valfria 
$url_tmetm = 'http://www.kth.se/api/kopps/v1/programme/TMETM/academic-year-plan/2013:2/1';
$xml_tmetm = simplexml_load_file($url_tmetm);
	$course_code=$xml_tmetm->common[0]->mandatory[0]->courseRound[0]["courseCode"];
	$start_term=$xml_tmetm->common[0]->mandatory[0]->courseRound[0]["startTerm"]; 
	$year=substr($start_term, 0, 4); //ta de 3 första tecknen
	$term=substr($start_term, -1); //sista tecknet
	$round_id=$xml_tmetm->common[0]->mandatory[0]->courseRound[0]["roundId"];
	
	//för att ta ut de obligatoriska kurserna:
/*
	foreach($xml_tmetm->common->mandatory->courseRound as $mandatory_course){
		echo "Obligatorisk kurs: " . $mandatory_course["courseCode"]."<br/>";
	}
*/
	
//sen får vi skapa upp nya länkar för att hämta mer data om kursen

//på denna länk finns: TITEL, HEMSIDA, POÄNG, NIVÅ
$url_course = 'http://www.kth.se/api/kopps/v1/course/' . $course_code;
$xml_course = simplexml_load_file($url_course);
	$course_title = $xml_course->title[1]; // 1-> engelska 
	$course_page = $xml_course->supplementalInformationUrl[1];
	$course_points = $xml_course->credits[1];
	$course_level = $xml_course->educationalLevel[1];
	
//på denna länk finns PERIODEN kursen går
$url_course_round = 'http://www.kth.se/api/kopps/v1/course/' . $course_code . '/round/' . $year . ':' . $term . '/' . $round_id;
$xml_course_round = simplexml_load_file($url_course_round);
	$course_period = $xml_course_round->creditDistribution[0]->periodCredits[0]["period"];
	
//lite utskrifter för å testa
/*
echo "<br/>Lite sammanfattad info för " . $course_code . " tagen från de 3 olika XML-sidorna:<br/>";
echo "code: " . $course_code . "<br/>";
echo "title: " . $course_title . "<br/>";
echo "href: " . $course_page . "<br/>";
echo "credits: " . $course_points . "<br/>"; 
echo "level: " . $course_level . "<br/>";
echo "period: " . $course_period . "<br/><br/>"; 
*/

//För att mainControllern ska kunna ta ut informationen måste den konverteras till json-format
$course = array("code" => "$course_code" , "title" => "$course_title");
echo json_encode($course);
/*

echo '<br/><br/>';
echo $url_course;
echo '<br/>';
echo $url_course_round;
*/
?>