app.controller("MainController", function($scope){
	$scope.whatever = "whatever bro";
	$scope.inputValue = "";
	$scope.selectedCourse = "DM1021";

	$.getJSON("../data/DM.json", function( data )) {
		var items = [];
		$.each(data, function(key,val){
			items.push(key+val);

		});
	};
	consol.log(items);

	$scope.courses = items;//[


	// {
 //            code: "DM3510",
 //            title: "Current Topics in Technology-Enhanced Learning",
 //            href: "http://www.kth.se/student/kurser/kurs/DM3510?l=en",
 //            info: "",
 //            credits: "7.5",
 //            level: "Third cycle"
 //        },
 //            {
 //            code: "DM3516",
 //            title: "Labour - societal challenges and future possibilities",
 //            href: "http://www.kth.se/student/kurser/kurs/DM3516?l=en",
 //            info: "",
 //            credits: "7.5",
 //            level: "Third cycle"
 //        },
 //            {
 //            code: "DM2532",
 //            title: "Work Integrating Course in Media Technology",
 //            href: "http://www.kth.se/student/kurser/kurs/DM2532?l=en",
 //            info: "<p>An course specifically preparing students for working within the media industry and\/or as a media technology engineer.<\/p>",
 //            credits: "7.5",
 //            level: "Second cycle"
 //        },
 //            {
 //            code: "DM1021",
 //            title: "Audio and Video Technology",
 //            href: "http://www.kth.se/student/kurser/kurs/DM1021?l=en",
 //            info: "<p>The course gives knowledge of digital techniques used in audio and video production.<\/p>",
 //            credits: "7.5",
 //            level: "First cycle"
 //        },
 //            {
 //            code: "DH2413",
 //            title: "Advanced Graphics and Interaction",
 //            href: "http://www.kth.se/student/kurser/kurs/DH2413?l=en",
 //            info: "<p>Advanced course in computer science focusing on computer graphics and interaction.<\/p>",
 //            credits: "9.0",
 //            level: "Second cycle"
 //        },
 //            {
 //            code: "DH2466",
 //            title: "Advanced, Individual Course in Human-Computer Interaction",
 //            href: "http://www.kth.se/student/kurser/kurs/DH2466?l=en",
 //            info: "<p>Advanced course in human-computer interaction individually formed to suit the interests of the students.<\/p>",
 //            credits: "6.0",
 //            level: "Second cycle"
 //        },
 //            {
 //            code: "DM2592",
 //            title: "Processing of Moving Pictures",
 //            href: "http://www.kth.se/student/kurser/kurs/DM2592?l=en",
 //            info: "<p>A course in the processing of film, video and computer generated media products.<\/p><p>A KTH 180 credits course in Media technique covers in-depth Moving Images across the entire time spectre since the day it has been possible to register, transfer and store moving images. These pioneering techniques are not merely historical but are real and essential technical skills used to preserve an immense cultural heritage for the future. The Moving Images area of knowledge stretches from the 1890s and far into the future towards the creation of media &#8220;which has not yet left the drawing-board&#8221;.<\/p>",
 //            credits: "9.0",
 //            level: "Second cycle"
 //        },
 //            {
 //            code: "DH252V",
 //            title: "Methods in Behavioural Science",
 //            href: "http://www.kth.se/student/kurser/kurs/DH252V?l=en",
 //            info: "<p>The course presents different perspectives in behavioural science with focus on method. Practical exercises in techniques for collecting data are given.<\/p>",
 //            credits: "6.0",
 //            level: "Second cycle"
 //        },
 //            {
 //            code: "DM1576",
 //            title: "Image and Video Technology",
 //            href: "http://www.kth.se/student/kurser/kurs/DM1576?l=en",
 //            info: "",
 //            credits: "9.0",
 //            level: "First cycle"
 //        },
 //            {
 //            code: "DH2323",
 //            title: "Computer Graphics and Interaction",
 //            href: "http://www.kth.se/student/kurser/kurs/DH2323?l=en",
 //            info: "<p>A second course in computer science that gives a broad introduction to computer graphics and human-computer interaction.<\/p>",
 //            credits: "6.0",
 //            level: "Second cycle"
 //        },
 //            {
 //            code: "DH2650",
 //            title: "Computer Game Design",
 //            href: "http://www.kth.se/student/kurser/kurs/DH2650?l=en",
 //            info: "<p>Computer games are interesting from an HCI perspective in many ways. The games have to be understandable for the players immediately, with a minimum of instructions, and at the same time be challenging. Computer games are today pushing the technology for interaction and include knowledge from, among other subjects, HCI, Computer Science, AI, Computer Graphics, and Mathematics.<\/p>",
 //            credits: "6.0",
 //            level: "Second cycle"
 //        },
 //            {
 //            code: "DH2651",
 //            title: "Computer Game Design and Advanced Graphics",
 //            href: "http://www.kth.se/student/kurser/kurs/DH2651?l=en",
 //            info: "<p>Computer games are interesting from an HCI perspective in many ways. The games have to be understandable for the players immediately, with a minimum of instructions, and at the same time be challenging. Computer games are today pushing the technology for interaction and include knowledge from, among other subjects, HCI, Computer Science, AI, Computer Graphics, and Mathematics.<\/p>",
 //            credits: "9.0",
 //            level: "Second cycle"
 //        },
 //            {
 //            code: "DM2529",
 //            title: "Digital Images for Publication",
 //            href: "http://www.kth.se/student/kurser/kurs/DM2529?l=en",
 //            info: "<p>An advanced course about analogue and digital photography, reproduction technology, colour management systems and digital image processing.<\/p>",
 //            credits: "7.5",
 //            level: "Second cycle"
 //        },
 //            {
 //            code: "DM2593",
 //            title: "Display and Projection Technology",
 //            href: "http://www.kth.se/student/kurser/kurs/DM2593?l=en",
 //            info: "<p>A course focusing on displays, projectors, and other presentation tools for moving picture experiences.<\/p>",
 //            credits: "6.0",
 //            level: "Second cycle"
 //        },
 //            {
 //            code: "2D1042",
 //            title: "Degree Project in Human-Computer Interaction (Master of Science)",
 //            href: "http://www.kth.se/student/kurser/kurs/2D1042?l=en",
 //            info: "",
 //            credits: "30.0",
 //            level: "Second cycle"
 //        },
 //            {
 //            code: "2D1028",
 //            title: "Master's Project in Media Technology",
 //            href: "http://www.kth.se/student/kurser/kurs/2D1028?l=en",
 //            info: "<p>A comparatively large and independent analysis of a problem within media technology.<\/p>",
 //            credits: "30.0",
 //            level: "Second cycle"
 //        },
 //            {
 //            code: "DM228X",
 //            title: "Degree Project in Media Technology, Second Cycle",
 //            href: "http://www.kth.se/student/kurser/kurs/DM228X?l=en",
 //            info: "<p>A comparatively large and independent analysis of a problem within media technology.<\/p>",
 //            credits: "30.0",
 //            level: "Second cycle"
 //        },
 //            {
 //            code: "DM129X",
 //            title: "Degree Project in Media Technology, First Cycle",
 //            href: "http://www.kth.se/student/kurser/kurs/DM129X?l=en",
 //            info: "<p>A relatively large investigative project in media technology.<\/p>",
 //            credits: "15.0",
 //            level: "First cycle"
 //        },
 //            {
 //            code: "2D1024",
 //            title: "Master's Project in Human - Computer Interaction",
 //            href: "http://www.kth.se/student/kurser/kurs/2D1024?l=en",
 //            info: "<p>A comparatively large and independent analysis of a problem within human-computer interaction.<\/p>",
 //            credits: "30.0",
 //            level: "Second cycle"
 //        },
 //            {
 //            code: "DH224X",
 //            title: "Degree Project in Human-Computer Interaction, Second Cycle",
 //            href: "http://www.kth.se/student/kurser/kurs/DH224X?l=en",
 //            info: "<p>A comparatively large and independent analysis of a problem within human-computer interaction.<\/p>",
 //            credits: "30.0",
 //            level: "Second cycle"
 //        },
 //            {
 //            code: "DH250X",
 //            title: "Degree Project in Human-Computer Interaction, Second Cycle",
 //            href: "http://www.kth.se/student/kurser/kurs/DH250X?l=en",
 //            info: "<p>The master thesis is an individual work in Human Computer Interaction with an investigating character.<\/p>",
 //            credits: "15.0",
 //            level: "Second cycle"
 //        },
 //            {
 //            code: "2D5508",
 //            title: "Research Seminars in Media Technology",
 //            href: "http://www.kth.se/student/kurser/kurs/2D5508?l=en",
 //            info: "",
 //            credits: "6.0",
 //            level: "Third cycle"
 //        },
 //            {
 //            code: "DM3508",
 //            title: "Research Seminars in Media Technology",
 //            href: "http://www.kth.se/student/kurser/kurs/DM3508?l=en",
 //            info: "",
 //            credits: "6.0",
 //            level: "Third cycle"
 //        },
 //            {
 //            code: "4K5508",
 //            title: "Research Seminar in Media Technology",
 //            href: "http://www.kth.se/student/kurser/kurs/4K5508?l=en",
 //            info: "",
 //            credits: "6.0",
 //            level: "Third cycle"
 //        },
 //            {
 //            code: "DM3514",
 //            title: "Research Methods in Media Technology and Human-Computer Interaction",
 //            href: "http://www.kth.se/student/kurser/kurs/DM3514?l=en",
 //            info: "",
 //            credits: "7.5",
 //            level: "Third cycle"
 //        },
 //            {
 //            code: "DM2571",
 //            title: "Future of Media",
 //            href: "http://www.kth.se/student/kurser/kurs/DM2571?l=en",
 //            info: "<p>Through theoretical knowledge building within a current area in media technology, combined with practical elements and projects, the students are trained for future independent project within technical innovation and development. The course integrates students' expertise in different areas of media technology through the study of problems of such a nature that they demand a mix of different competencies in order to be solved.<\/p>",
 //            credits: "10.0",
 //            level: "Second cycle"
 //        },
 //            {
 //            code: "DH2400",
 //            title: "Physical Interaction Design and Realization",
 //            href: "http://www.kth.se/student/kurser/kurs/DH2400?l=en",
 //            info: "",
 //            credits: "7.5",
 //            level: "Second cycle"
 //        },
 //            {
 //            code: "DH2640",
 //            title: "Graphics and Interaction Programming",
 //            href: "http://www.kth.se/student/kurser/kurs/DH2640?l=en",
 //            info: "<p>Second course in computer science focusing on computer graphics and interaction.<\/p>",
 //            credits: "9.0",
 //            level: "Second cycle"
 //        },
 //            {
 //            code: "DM2531",
 //            title: "Graphic Arts Production",
 //            href: "http://www.kth.se/student/kurser/kurs/DM2531?l=en",
 //            info: "<p>An advanced course on graphic arts production systems.<\/p>",
 //            credits: "7.5",
 //            level: "Second cycle"
 //        },
 //            {
 //            code: "DM1573",
 //            title: "Graphic Arts Technology",
 //            href: "http://www.kth.se/student/kurser/kurs/DM1573?l=en",
 //            info: "<p>A basic course on graphic arts production systems.<\/p>",
 //            credits: "7.5",
 //            level: "First cycle"
 //        },
 //            {
 //            code: "DM1570",
 //            title: "Graphic Arts Technology 1",
 //            href: "http://www.kth.se/student/kurser/kurs/DM1570?l=en",
 //            info: "<p>A basic course on graphic arts production systems.<\/p>",
 //            credits: "7.0",
 //            level: "First cycle"
 //        },
 //            {
 //            code: "4K5506",
 //            title: "Graphic Arts Technology, literature course",
 //            href: "http://www.kth.se/student/kurser/kurs/4K5506?l=en",
 //            info: "",
 //            credits: "7.5",
 //            level: "Third cycle"
 //        },
 //            {
 //            code: "DH2660",
 //            title: "Haptics",
 //            href: "http://www.kth.se/student/kurser/kurs/DH2660?l=en",
 //            info: "<p>Haptic feedback (supporting the touch modality) is often taken for granted in real life but it is still not common when interacting with computers. If you grasp an object by using a haptic device that is available today you can feel the qualities of the material of a graphical object, like softness, texture, weight, or viscosity. Magnetism and pulling forces can also be represented and felt physically. Haptic feedback thus makes it possible to feel graphical objects as if they were real physical objects and that makes them easier to manipulate.&#160; In this course the theoretical framework for haptic perception and cognition is presented.&#160; Methods for design and evaluation of different haptic interfaces as well as other tactile interaction methods are described. Application areas that are relevant for haptic technology are reviewed like for example computer games, computer support for collaboration, scientific visualization, and medical simulation. Students will learn how to design and program their own applications in laboratory assignments with different haptic devices.<\/p>",
 //            credits: "6.0",
 //            level: "Second cycle"
 //        },
 //            {
 //            code: "DM2573",
 //            title: "Sustainability and Media Technology",
 //            href: "http://www.kth.se/student/kurser/kurs/DM2573?l=en",
 //            info: "<p>Students who have taken the course should 1) know about sustainability in general and 2) the relationship between media technologies and sustainability in particular.&#160;<\/p>",
 //            credits: "7.5",
 //            level: "Second cycle"
 //        },
 //            {
 //            code: "DH156V",
 //            title: "IT-design for the Disabled",
 //            href: "http://www.kth.se/student/kurser/kurs/DH156V?l=en",
 //            info: "<p>A course on the design of IT-support specifically focused on accessibility for people with disabilities. The course gives an overview of different kind of disabilities and design principles for making accessible IT-support.<\/p>",
 //            credits: "6.0",
 //            level: "First cycle"
 //        },
 //            {
 //            code: "DH2625",
 //            title: "IT-design for the Disabled",
 //            href: "http://www.kth.se/student/kurser/kurs/DH2625?l=en",
 //            info: "<p>A course on the design of IT-support specifically focused on accessibility for people with disabilities. The course gives an overview of different kind of disabilities and design principles for making accessible IT-support.<\/p>",
 //            credits: "6.0",
 //            level: "Second cycle"
 //        },
 //            {
 //            code: "DM1902",
 //            title: "Individual Course in Media Technology",
 //            href: "http://www.kth.se/student/kurser/kurs/DM1902?l=en",
 //            info: "",
 //            credits: "3.0",
 //            level: "First cycle"
 //        },
 //            {
 //            code: "DM2904",
 //            title: "Individual Course in Media Technology",
 //            href: "http://www.kth.se/student/kurser/kurs/DM2904?l=en",
 //            info: "<p>Advanced course in Media Technology individually formed to suit the interests of the students.<\/p>",
 //            credits: "6.0",
 //            level: "Second cycle"
 //        },
 //            {
 //            code: "DM2905",
 //            title: "Individual Course in Media Technology",
 //            href: "http://www.kth.se/student/kurser/kurs/DM2905?l=en",
 //            info: "<p>Advanced course in Media Technology individually formed to suit the interests of the students.<\/p>",
 //            credits: "7.5",
 //            level: "Second cycle"
 //        },
 //            {
 //            code: "DM2906",
 //            title: "Individual Course in Media Technology",
 //            href: "http://www.kth.se/student/kurser/kurs/DM2906?l=en",
 //            info: "<p>Advanced course in Media Technology individually formed to suit the interests of the students.<\/p>",
 //            credits: "9.0",
 //            level: "Second cycle"
 //        },
 //            {
 //            code: "DH2321",
 //            title: "Information Visualization",
 //            href: "http://www.kth.se/student/kurser/kurs/DH2321?l=en",
 //            info: "<p>The course includes techniques and principles for visualization of information with examples, demonstrations and lab assignments within different applications.<\/p><p>The course includes both theory and practical aspects with theory and lab assignments being mixed. The students are expected to see and use current tools within the focus of the course and will utilize software tools for information visualization that are being used within industry, public sector and academia.<\/p>",
 //            credits: "6.0",
 //            level: "Second cycle"
 //        },
 //            {
 //            code: "DM2570",
 //            title: "Content and Expression in Media",
 //            href: "http://www.kth.se/student/kurser/kurs/DM2570?l=en",
 //            info: "<p>Through theoretical knowledge building within a current area in media technology, combined with practical elements and projects, the students are trained for future independent project within technical innovation and development. The course integrates the student's previous studies in different media technology areas by studying problems which are so complex that they require several competences to be solved.<\/p>",
 //            credits: "9.0",
 //            level: "Second cycle"
 //        },
 //            {
 //            code: "DM2101",
 //            title: "Innovative Technologies in Media Production",
 //            href: "http://www.kth.se/student/kurser/kurs/DM2101?l=en",
 //            info: "<p>The course will provide an international perspective on current technological development and innovation within the media industry, with special focus on printed communication. Upon completing the course, the students will have obtained topical knowledge on central development trends in technology, business models, sustainability aspects, sector structure, standardization and innovation processes. In addition, the course provides opportunities for internationa networking.<\/p>",
 //            credits: "5.0",
 //            level: "Second cycle"
 //        },
 //            {
 //            code: "DH2626",
 //            title: "Interaction Design 1",
 //            href: "http://www.kth.se/student/kurser/kurs/DH2626?l=en",
 //            info: "",
 //            credits: "15.0",
 //            level: "Second cycle"
 //        },
 //            {
 //            code: "DH2627",
 //            title: "Interaction Design 2",
 //            href: "http://www.kth.se/student/kurser/kurs/DH2627?l=en",
 //            info: "<p>An&#160;advanced course&#160;in&#160;interaction design&#160;given in a studio-based format.<\/p>",
 //            credits: "15.0",
 //            level: "Second cycle"
 //        },
 //            {
 //            code: "DH2629",
 //            title: "Interaction Design as a Reflective Practice",
 //            href: "http://www.kth.se/student/kurser/kurs/DH2629?l=en",
 //            info: "",
 //            credits: "7.5",
 //            level: "Second cycle"
 //        },
 //            {
 //            code: "DH2641",
 //            title: "Interaction Programming",
 //            href: "http://www.kth.se/student/kurser/kurs/DH2641?l=en",
 //            info: "<p>Interaction programming introduce technologies and tools to support user interaction with various frameworks, on different computing platforms. You will learn how to program graphical user interfaces, interaction intensive web applications and mobile interaction.<\/p>",
 //            credits: "6.0",
 //            level: "Second cycle"
 //        },
 //            {
 //            code: "DM2033",
 //            title: "Interactive Media Technology",
 //            href: "http://www.kth.se/student/kurser/kurs/DM2033?l=en",
 //            info: "<p>An advanced course on information structuring, multi channel publishing and interactive web based information systems using XML, a general recommendation for data structuring.<\/p>",
 //            credits: "7.5",
 //            level: "Second cycle"
 //        },
 //            {
 //            code: "DM2556",
 //            title: "Intercultural communication",
 //            href: "http://www.kth.se/student/kurser/kurs/DM2556?l=en",
 //            info: "<p>Intercultural communication is a field of study that looks at how people from different countries and differing cultural backgrounds behave, communicate and perceive the world around them, in similar and different ways among themselves, and how they endeavour to communicate across cultures.<\/p>",
 //            credits: "7.5",
 //            level: "Second cycle"
 //        },
 //            {
 //            code: "DM3511",
 //            title: "Intercultural Communication",
 //            href: "http://www.kth.se/student/kurser/kurs/DM3511?l=en",
 //            info: "",
 //            credits: "7.5",
 //            level: "Third cycle"
 //        },
 //            {
 //            code: "DH1701",
 //            title: "Introduction to Linguistics",
 //            href: "http://www.kth.se/student/kurser/kurs/DH1701?l=en",
 //            info: "<p>This course provides an overview of the areas of interest of linguistics today. Topics include: spoken languages and other systems of communication, the biology of language, languages of the world, linguistic variation in the light of language comparison and of social environment, multilingualism, language acquisition and the relations between language, culture and thought.<\/p>",
 //            credits: "7.5",
 //            level: "First cycle"
 //        },
 //            {
 //            code: "DM1572",
 //            title: "Introduction to Media Technology",
 //            href: "http://www.kth.se/student/kurser/kurs/DM1572?l=en",
 //            info: "<p>The course gives an introduction to the studies in Media technology.<\/p>",
 //            credits: "7.5",
 //            level: "First cycle"
 //        },
 //            {
 //            code: "DH2320",
 //            title: "Introduction to Visualization and Computer Graphics",
 //            href: "http://www.kth.se/student/kurser/kurs/DH2320?l=en",
 //            info: "<p>The course includes fundamentals within visualization and visual communication with techniques in a broad sense and with examples, demonstrations and lab assignments within different applications, such as computer games, medical visualization, environmental planing, and information visualization.<\/p><p>The course includes both theory and practical aspects with theory and lab assignments being mixed. The students are expected to see and use current tools within the focus of the course.<\/p>",
 //            credits: "6.0",
 //            level: "Second cycle"
 //        },
 //            {
 //            code: "DH1602",
 //            title: "Communication",
 //            href: "http://www.kth.se/student/kurser/kurs/DH1602?l=en",
 //            info: "<p>The course aims primarily to give practical training in the design, construction and concrete representation of technical and scientific forms of presentation, including laboratory training in oral presentation. The course is oriented towards the technical and scientific representation but will also give a brief theoretical introduction to the interdisciplinary area Media and communication studies.&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;<\/p><p>Media and communication is an interdisciplinary field including technological, humanistic and social scientific perspectives and issues concerning the role of media and communication in society and culture as well as hands-on methods for the analysis of form and content in images, text and sound.<\/p>",
 //            credits: "6.0",
 //            level: "First cycle"
 //        },
 //            {
 //            code: "DH1600",
 //            title: "Communication in Engineering Sciences",
 //            href: "http://www.kth.se/student/kurser/kurs/DH1600?l=en",
 //            info: "<p>The course DH1600 gives an introduction to communication between people as theory and method. It aims primarily at giving practical training in the design, construction and concrete representation of technical and scientific forms of expression, including workshop assignments in oral presentation. At large the course is targeted towards the technical and scientific forms of representation.<\/p>",
 //            credits: "7.5",
 //            level: "First cycle"
 //        },
 //            {
 //            code: "DH1608",
 //            title: "Communication and Information",
 //            href: "http://www.kth.se/student/kurser/kurs/DH1608?l=en",
 //            info: "<p>The course gives an introduction to communication and media studies as an interdisciplinary field.<\/p>",
 //            credits: "5.0",
 //            level: "First cycle"
 //        },
 //            {
 //            code: "DH1609",
 //            title: "Communication and information",
 //            href: "http://www.kth.se/student/kurser/kurs/DH1609?l=en",
 //            info: "<p>The course covers theoretical and practical aspects of communication, media technology and communicative systems, as well as the relation between social and technical factors for use of media technology and communication systems.<\/p>",
 //            credits: "7.5",
 //            level: "First cycle"
 //        },
 //            {
 //            code: "DM2600",
 //            title: "Communication and Culture - Chinese Perspectives",
 //            href: "http://www.kth.se/student/kurser/kurs/DM2600?l=en",
 //            info: "",
 //            credits: "7.5",
 //            level: "Second cycle"
 //        },
 //            {
 //            code: "DH1601",
 //            title: "Communication and Media",
 //            href: "http://www.kth.se/student/kurser/kurs/DH1601?l=en",
 //            info: "<p>The course offers an advanced understanding of the interdisciplinary field communication, media technology and cultural theory.<\/p>",
 //            credits: "7.5",
 //            level: "First cycle"
 //        },
 //            {
 //            code: "DH1603",
 //            title: "Communication and Media",
 //            href: "http://www.kth.se/student/kurser/kurs/DH1603?l=en",
 //            info: "<p>The course covers practical and theoretical aspects of communication, media technology and communicative systems, as well as the relation between social and technical factors for development and use of media technology and communication systems.<\/p>",
 //            credits: "7.5",
 //            level: "First cycle"
 //        },
 //            {
 //            code: "DM1022",
 //            title: "Engineering Practice and Development in Media Technology",
 //            href: "http://www.kth.se/student/kurser/kurs/DM1022?l=en",
 //            info: "<p>The aim of the course is to, in a wide sense, inform and prepare students for different situation at work. Focus is on general issues.<\/p>",
 //            credits: "7.5",
 //            level: "First cycle"
 //        },
 //            {
 //            code: "2D5509",
 //            title: "Art and New Media",
 //            href: "http://www.kth.se/student/kurser/kurs/2D5509?l=en",
 //            info: "",
 //            credits: "15.0",
 //            level: "Third cycle"
 //        },
 //            {
 //            code: "DM2557",
 //            title: "Consumer Behaviour",
 //            href: "http://www.kth.se/student/kurser/kurs/DM2557?l=en",
 //            info: "<p>The course is given by the Stockholm School of Economics, with the course number 2105. Information on the course is found on the course webpage:<br \/>https:\/\/studentweb.hhs.se\/courseweb\/<br \/>CourseWebPublic\/CWPublic.ASP?WCI=<br \/>CourseDescription&amp;CourseNr=2105 <\/p>",
 //            credits: "7.5",
 //            level: "Second cycle"
 //        },
 //            {
 //            code: "2D5510",
 //            title: "Converging Media",
 //            href: "http://www.kth.se/student/kurser/kurs/2D5510?l=en",
 //            info: "",
 //            credits: "7.5",
 //            level: "Third cycle"
 //        },
 //            {
 //            code: "DH2655",
 //            title: "Cooperative IT-design",
 //            href: "http://www.kth.se/student/kurser/kurs/DH2655?l=en",
 //            info: "<p>This course aims at giving knowledge and experience from methods for cooperative design in an innovative design process.<\/p>",
 //            credits: "9.0",
 //            level: "Second cycle"
 //        },
 //            {
 //            code: "DM3512",
 //            title: "Critical Media Theory",
 //            href: "http://www.kth.se/student/kurser/kurs/DM3512?l=en",
 //            info: "",
 //            credits: "7.5",
 //            level: "Third cycle"
 //        },
 //            {
 //            code: "DH1607",
 //            title: "Learning and ICT, Project Course",
 //            href: "http://www.kth.se/student/kurser/kurs/DH1607?l=en",
 //            info: "<p>The course covers the pedagogy and didactics of information and communication technology and media technology; skills in and methods for project work; methods for reflection and documentation of the learning process. The course should also help the students to see connections between different courses in the program and to integrate knowledge from all courses of the program.<\/p>",
 //            credits: "6.0",
 //            level: "First cycle"
 //        },
 //            {
 //            code: "DM2550",
 //            title: "Market Systems",
 //            href: "http://www.kth.se/student/kurser/kurs/DM2550?l=en",
 //            info: "<p>The course is given by the Stockholm School of Economics, with the course number 2101. Information on the course is found on the course webpage:<\/p><p>https:\/\/studentweb.hhs.se\/courseweb\/<br \/>CourseWebPublic\/CWPublic.ASP?WCI=<br \/>CourseDescription&amp;CourseNr=2101 <\/p>",
 //            credits: "7.5",
 //            level: "Second cycle"
 //        },
 //            {
 //            code: "DM2580",
 //            title: "Media Distribution",
 //            href: "http://www.kth.se/student/kurser/kurs/DM2580?l=en",
 //            info: "<p>This course gives knowledge in the convergence in media distribution with focus on the Next Generation Networks and the use of media over IP and mobile networks.<\/p>",
 //            credits: "5.0",
 //            level: "Second cycle"
 //        },
 //            {
 //            code: "DM2581",
 //            title: "Media Distribution",
 //            href: "http://www.kth.se/student/kurser/kurs/DM2581?l=en",
 //            info: "<p>This course gives knowledge in the convergence in media distribution with focus on the Next Generation Networks and the use of media over IP and mobile networks.<\/p>",
 //            credits: "7.5",
 //            level: "Second cycle"
 //        },
 //            {
 //            code: "DM1577",
 //            title: "Media Design",
 //            href: "http://www.kth.se/student/kurser/kurs/DM1577?l=en",
 //            info: "<p>The course gives knowledge and practical experience of the production and design of communication and media. In the course the students learn to work in project form, and also to practice oral and written communication.<\/p>",
 //            credits: "7.5",
 //            level: "First cycle"
 //        },
 //            {
 //            code: "DM2552",
 //            title: "Media Management",
 //            href: "http://www.kth.se/student/kurser/kurs/DM2552?l=en",
 //            info: "<p>The course is given by the Stockholm School of Economics, with the course number 5082. Information on the course is found on the course webpage:<br \/>https:\/\/studentweb.hhs.se\/courseweb\/<br \/>CourseWebPublic\/CWPublic.ASP?WCI=<br \/>CourseDescription&amp;CourseNr=5082 <\/p>",
 //            credits: "15.0",
 //            level: "Second cycle"
 //        },
 //            {
 //            code: "DM2558",
 //            title: "Media Management",
 //            href: "http://www.kth.se/student/kurser/kurs/DM2558?l=en",
 //            info: "<p>The course aims to contribute in an understanding of what affects and what influences the parameters of change in media corporations, with respect to technology, individuals and market needs. In a rapidly changing media industry, it is important for media corporations to know how to speed up a product&#8217;s time to market. The challenge for media corporations today is to keep pace with new technology and to continuously learn and create knowledge in this fast changing environment. An important object in this course is therefore to teach students how to explore business opportunities and make decisions in this environment.<\/p>",
 //            credits: "15.0",
 //            level: "Second cycle"
 //        },
 //            {
 //            code: "DM2553",
 //            title: "Media Production",
 //            href: "http://www.kth.se/student/kurser/kurs/DM2553?l=en",
 //            info: "<p>Down-to-earth course within modern and future media technology and media&#160;production.<\/p>",
 //            credits: "15.0",
 //            level: "Second cycle"
 //        },
 //            {
 //            code: "DM2559",
 //            title: "Media Production",
 //            href: "http://www.kth.se/student/kurser/kurs/DM2559?l=en",
 //            info: "<p>Down-to-earth course within modern and future media technology and media&#160;production.<\/p>",
 //            credits: "11.0",
 //            level: "Second cycle"
 //        },
 //            {
 //            code: "DM2574",
 //            title: "Media Production",
 //            href: "http://www.kth.se/student/kurser/kurs/DM2574?l=en",
 //            info: "<p>Down-to-earth course within modern and future media technology and media&#160;production.<\/p>",
 //            credits: "9.0",
 //            level: "Second cycle"
 //        },
 //            {
 //            code: "DM1020",
 //            title: "Media Technology",
 //            href: "http://www.kth.se/student/kurser/kurs/DM1020?l=en",
 //            info: "<p>The course gives advanced knowledge in media technology, focusing on text- and image processing and applications within production systems.<\/p>",
 //            credits: "7.5",
 //            level: "First cycle"
 //        },
 //            {
 //            code: "DH2628",
 //            title: "Interaction Design Methods",
 //            href: "http://www.kth.se/student/kurser/kurs/DH2628?l=en",
 //            info: "",
 //            credits: "7.5",
 //            level: "Second cycle"
 //        },
 //            {
 //            code: "2D5511",
 //            title: "Methodologies and Digital Media",
 //            href: "http://www.kth.se/student/kurser/kurs/2D5511?l=en",
 //            info: "",
 //            credits: "7.5",
 //            level: "Third cycle"
 //        },
 //            {
 //            code: "DM2518",
 //            title: "Mobile Development with Web Technologies",
 //            href: "http://www.kth.se/student/kurser/kurs/DM2518?l=en",
 //            info: "<p>An advanced course on developing applications for mobile platforms based on Web technologies such as html5 and associated scripts and page description languages.<\/p>",
 //            credits: "7.5",
 //            level: "Second cycle"
 //        },
 //            {
 //            code: "DH2624",
 //            title: "Human-Computer Interaction - a Didactive Perspective",
 //            href: "http://www.kth.se/student/kurser/kurs/DH2624?l=en",
 //            info: "<p>This introductory Human-Computer Interaction (HCI) course presents an overview of human prerequisites and consequences of using information technology as a tool for solving tasks. User interface design is a central part of making an adequate cooperation between humans and technology, but there are few ready to use solutions. Even if interface design is generally<\/p>",
 //            credits: "7.5",
 //            level: "Second cycle"
 //        },
 //            {
 //            code: "DH2621",
 //            title: "Human-Computer Interaction, Advanced Course",
 //            href: "http://www.kth.se/student/kurser/kurs/DH2621?l=en",
 //            info: "<p>A second course on human-computer interaction that deepening theoretical and practical knowledge in human-computer interaction with a focus on methods, design principles and user centered design for specific needs. Within the course the student can separately deepen within a specific use area or theory within HCI.<\/p>",
 //            credits: "6.0",
 //            level: "Second cycle"
 //        },
 //            {
 //            code: "DH2622",
 //            title: "Human-Computer Interaction, Advanced Course with Prototyping",
 //            href: "http://www.kth.se/student/kurser/kurs/DH2622?l=en",
 //            info: "<p>A second course on human-computer interaction that deepening theoretical and practical knowledge in human-computer interaction with a focus on methods, prototyping, design principles and user centered design for specific needs. Within the course the student can separately deepen within a specific use area or theory within HCI.<\/p>",
 //            credits: "9.0",
 //            level: "Second cycle"
 //        },
 //            {
 //            code: "DH2632",
 //            title: "Human-Computer Interaction, Research Seminars",
 //            href: "http://www.kth.se/student/kurser/kurs/DH2632?l=en",
 //            info: "<p>The student take part in the research seminars at the HCI-group, read literature, use a reflection diary and write a report and discuss connections to own education, and with own masters thesis in mind.<\/p>",
 //            credits: "3.0",
 //            level: "Second cycle"
 //        },
 //            {
 //            code: "DH1620",
 //            title: "Human-Computer Interaction, Introductory Course",
 //            href: "http://www.kth.se/student/kurser/kurs/DH1620?l=en",
 //            info: "<p>This introductory Human-Computer Interaction (HCI) course presents an overview of human prerequisites and consequences of using information technology as a tool for solving tasks. User interface design is a central part of making an adequate cooperation between humans and technology, but there are few ready to use solutions. Even if interface design is generally associated with human-computerinteraction there are many other issues that are equally important. The course will present methods that help the designer to elicit user requirements and structure the design process with a focus on the users. Above all the course will emphasize the importance of paying attention to user needs, motivation and context in order to design usable systems.<\/p>",
 //            credits: "6.0",
 //            level: "First cycle"
 //        },
 //            {
 //            code: "DH2620",
 //            title: "Human-Computer Interaction, Introductory Course",
 //            href: "http://www.kth.se/student/kurser/kurs/DH2620?l=en",
 //            info: "<p>This introductory Human-Computer Interaction (HCI) course presents an overview of human prerequisites and consequences of using information technology as a tool for solving work related tasks. User interface design is a central part of making an adequate cooperation between humans and technology, but there are few ready to use solutions. The course will present methods that help the designer to elicit user requirements and structure the design process as to make the users in focus. Above all the course will emphasize the importance of paying attention to user needs and cognitive functioning in order to design usable systems.<\/p>",
 //            credits: "6.0",
 //            level: "Second cycle"
 //        },
 //            {
 //            code: "DM2500",
 //            title: "Telepresence Production",
 //            href: "http://www.kth.se/student/kurser/kurs/DM2500?l=en",
 //            info: "",
 //            credits: "7.5",
 //            level: "Second cycle"
 //        },
 //            {
 //            code: "DM250N",
 //            title: "Telepresence Production",
 //            href: "http://www.kth.se/student/kurser/kurs/DM250N?l=en",
 //            info: "<p>A second course treating and using net based systems for communication.<\/p>",
 //            credits: "6.0",
 //            level: "Second cycle"
 //        },
 //            {
 //            code: "DM1578",
 //            title: "Program Integrating Course in Media Technology",
 //            href: "http://www.kth.se/student/kurser/kurs/DM1578?l=en",
 //            info: "<p>The course shall facilitate for students to perceive connections between courses in the Media Technology program and provide a foundation for routines for life long learning, through reflection about the conditions of learning as well as by thematic exercises in contemporary cross-boundary subject areas both from within and outside of the academy. The course is spread out over three years of the program and is studied continually and in parallel with other courses.<\/p>",
 //            credits: "7.0",
 //            level: "First cycle"
 //        },
 //            {
 //            code: "DM1575",
 //            title: "Media Technology Programme Summary Course",
 //            href: "http://www.kth.se/student/kurser/kurs/DM1575?l=en",
 //            info: "",
 //            credits: "6.0",
 //            level: "First cycle"
 //        },
 //            {
 //            code: "DH2460",
 //            title: "Software Design - Business - Leadership",
 //            href: "http://www.kth.se/student/kurser/kurs/DH2460?l=en",
 //            info: "<p>Software Design. Business. Leadership. Integration.<\/p>",
 //            credits: "12.0",
 //            level: "Second cycle"
 //        },
 //            {
 //            code: "DM2555",
 //            title: "Project Course in Media Technology",
 //            href: "http://www.kth.se/student/kurser/kurs/DM2555?l=en",
 //            info: "<p>A course focusing on cooperation between competences and communication processes in media projects. The course is mainly conducted in project form.<\/p>",
 //            credits: "7.5",
 //            level: "Second cycle"
 //        },
 //            {
 //            code: "DM1031",
 //            title: "Radio Technology",
 //            href: "http://www.kth.se/student/kurser/kurs/DM1031?l=en",
 //            info: "<p>A course on digital radio technology.<\/p>",
 //            credits: "7.5",
 //            level: "First cycle"
 //        },
 //            {
 //            code: "DH239V",
 //            title: "Real-Time Graphics and Visualization",
 //            href: "http://www.kth.se/student/kurser/kurs/DH239V?l=en",
 //            info: "",
 //            credits: "7.5",
 //            level: "Second cycle"
 //        },
 //            {
 //            code: "DH3376",
 //            title: "Reflexivity in HCI",
 //            href: "http://www.kth.se/student/kurser/kurs/DH3376?l=en",
 //            info: "",
 //            credits: "7.5",
 //            level: "Third cycle"
 //        },
 //            {
 //            code: "DM2578",
 //            title: "Social Media Technologies",
 //            href: "http://www.kth.se/student/kurser/kurs/DM2578?l=en",
 //            info: "<p>An advanced course on the use and development of social media technologies, such as messaging, forums, blogs, wikis, feeds, social bookmarking, social networking systems, video- and photo sharing sites, mobile social media platforms and synthetic worlds. The course also introduces social issues arising from the everyday uses of these technologies.<\/p>",
 //            credits: "7.5",
 //            level: "Second cycle"
 //        },
 //            {
 //            code: "DH1702",
 //            title: "General Linguistics",
 //            href: "http://www.kth.se/student/kurser/kurs/DH1702?l=en",
 //            info: "",
 //            credits: "7.5",
 //            level: "First cycle"
 //        },
 //            {
 //            code: "DH1703",
 //            title: "Fonetics",
 //            href: "http://www.kth.se/student/kurser/kurs/DH1703?l=en",
 //            info: "",
 //            credits: "7.5",
 //            level: "First cycle"
 //        },
 //            {
 //            code: "DH2418",
 //            title: "Language Engineering",
 //            href: "http://www.kth.se/student/kurser/kurs/DH2418?l=en",
 //            info: "<p>The course in language technology treats different methods for analysis, generation, and filtering of human language especially text. Rule-based and statistical methods are used and studied in applications such as information retrieval, spelling- and grammar checking, and text summarization.<\/p><p>The course covers theory, methods, and application areas within language technology. The course requirements are an examination, laboratory assignments, and a home assignment.<\/p>",
 //            credits: "6.0",
 //            level: "Second cycle"
 //        },
 //            {
 //            code: "DH1704",
 //            title: "Linguistic Methods",
 //            href: "http://www.kth.se/student/kurser/kurs/DH1704?l=en",
 //            info: "",
 //            credits: "7.5",
 //            level: "First cycle"
 //        },
 //            {
 //            code: "DM1030",
 //            title: "Television Technology",
 //            href: "http://www.kth.se/student/kurser/kurs/DM1030?l=en",
 //            info: "<p>A course focusing on analogue and digital TV techniques and current and future production and distribution methods.<\/p>",
 //            credits: "7.5",
 //            level: "First cycle"
 //        },
 //            {
 //            code: "DM2572",
 //            title: "Theory and Method for Media Technology",
 //            href: "http://www.kth.se/student/kurser/kurs/DM2572?l=en",
 //            info: "<p>The aim of the course is to provide a deeper understanding of scientific theories and methods relevant for media technology research.<\/p>",
 //            credits: "7.5",
 //            level: "Second cycle"
 //        },
 //            {
 //            code: "DH2408",
 //            title: "Evaluation Methods in Human-Computer Interaction",
 //            href: "http://www.kth.se/student/kurser/kurs/DH2408?l=en",
 //            info: "<p>Advanced course in human-computer interaction treating methods for evaluation of usability.<\/p>",
 //            credits: "6.0",
 //            level: "Second cycle"
 //        },
 //            {
 //            code: "DM3518",
 //            title: "What is Seeing? Phenomenology, Psychoanalysis, Neuroscience: Perspectives and Encounters",
 //            href: "http://www.kth.se/student/kurser/kurs/DM3518?l=en",
 //            info: "",
 //            credits: "7.5",
 //            level: "Third cycle"
 //        },
 //            {
 //            code: "DH2605",
 //            title: "Science, Technology and Learning, part II, incl Teaching Practice",
 //            href: "http://www.kth.se/student/kurser/kurs/DH2605?l=en",
 //            info: "<p>The course includes experimental and pedagogic work with theoretical perspective in natural sciences, mathematics and\/or technology in formal learning environments (such a science centres and museums, but also in elementary and secondary school). The course belongs to the programme Master of Civil Engineering and Learning.<\/p>",
 //            credits: "4.5",
 //            level: "Second cycle"
 //        },
 //            {
 //            code: "2D5512",
 //            title: "Critique of Science and Critical Theory",
 //            href: "http://www.kth.se/student/kurser/kurs/2D5512?l=en",
 //            info: "",
 //            credits: "7.5",
 //            level: "Third cycle"
 //        },
 //            {
 //            code: "DH2610",
 //            title: "Theory and Methodology of Science in Human-Computer Interaction",
 //            href: "http://www.kth.se/student/kurser/kurs/DH2610?l=en",
 //            info: "<p>The aim of this course is to give a broad introduction to philosophy of science from a natural science, social science and humanistic perspective that connects to the area of HCI. Design of studies, techniques for collecting data and analysis of data are introduced and ethic and ethical problems are addressed.<\/p>",
 //            credits: "7.5",
 //            level: "Second cycle"
 //        },
 //            {
 //            code: "DM1580",
 //            title: "Video Technology",
 //            href: "http://www.kth.se/student/kurser/kurs/DM1580?l=en",
 //            info: "",
 //            credits: "6.0",
 //            level: "First cycle"
 //        },
 //            {
 //            code: "DM2517",
 //            title: "XML for Publishing",
 //            href: "http://www.kth.se/student/kurser/kurs/DM2517?l=en",
 //            info: "<p>An advanced course on information structuring, multi channel publishing using XML, a general recommendation for data structuring.<\/p>",
 //            credits: "7.5",
 //            level: "Second cycle"
 //        }
	// ];
});
