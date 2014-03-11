/*
Calle and Anna 2014-04-10:
This is where we create all the controllers. 
Since it's a small project we've done what AngularJS recommend and put all controllers in the same module (myAcademicControllers).
OBS! WE MUST ADD CONTROLLERS FOR EACH VIEW!
*/

var myAcademicControllers = angular.module('myAcademicControllers', []);

myAcademicControllers.controller('MainController', ['$scope', '$http', '$routeParams',
  function($scope, $http, $routeParams) {

		$scope.inputValue = "";
		$scope.selectedCourse = "DM1021";
		$scope.selectedMaster = JSON.parse($routeParams.selectedMaster); // We get the chosen master-object as a string and parses it to a JSON object.
		//$scope.selectedTrack = $routeParams.selectedTrack;
		$scope.selectedTrack = JSON.parse($routeParams.selectedTrack);
		console.log("$scope.selectedMaster: " + $scope.selectedMaster + " $scope.selectedTrack: " + $scope.selectedTrack);
		//$scope.selectedTrack = JSON.parse($scope.selectedTrack);
		$scope.searchText;

		/*
	  		TODO: use $http (HTTP GET) to populate $scope.courses with JSON.
  		*/
		$scope.courses = [];

		/*
	  		TODO: use $http (HTTP GET) to populate $scope.masters with JSON.
  		*/
		$scope.masters = [
			{
				name: "Media Technology",
				id: 1,
				code: "TMETM",
				mandatoryCourses: [{
					code: "DM2573",
					title: "Sustainabily",
					level: "second cycle",
					period: 1,
					credits: 7.5
				}, {
					code: "DM2572",
					title: "Theory and methodology",
					level: "second cycle",
					period: 2,
					credits: 7.5
				}],
				tracks: [
					{
						trackCode: "META",
						title: "Image and Video Technlogy",
						trackCourses: [{
							code: "EN2401",
							title: "Image and video processing",
							level: "second cycle",
							period: 2,
							credits: 6.0
						}]
					},

					{
						trackCode: "METB",
						title: "Interactive Media Technology",
						trackCourses: [{
							code: "DH2641",
							title: "Interaction Programming",
							level: "second cycle",
							period: 3,
							credits: 6.0
						}, {
							code: "DT2141",
							title: "Multimodal Interaction",
							level: "second cycle",
							period: 2,
							credits: 7.5
				}, {
							code: "DD2385",
							title: "Software engineering",
							level: "second cycle",
							period: 1,
							credits: 6.0
				}, {
							code: "DD2395",
							title: "Computer Security",
							level: "second cycle",
							period: 1,
							credits: 6.0
				}]
					},

					{
						trackCode: "METC",
						title: "Audio Technlogy",
						trackCourses: [{
							code: "DT2300",
							title: "Sound in interaction",
							level: "second cycle",
							period: 1,
							credits: 7.5
						}]
					},
					{
						trackCode: "METD",
						title: "Printed Communication",
						trackCourses: [{
							code: "DM2531",
							title: "Graphic Arts Prduction",
							level: "second cycle",
							period: 4,
							credits: 7.5
						}]
					}
			]
		},
			{
				name: "Human Computer Interaction",
				id: 2,
				code: "THCIM",
				tracks: [{
					trackCode: "",
					title: "",
					trackCourses: []
				}],
				mandatoryCourses: [{
					code: "DH2610",
					title: "Theory and methodology for HCI",
					level: "second cycle",
					period: 1,
					credits: 7.5
				}],
				conditionalCourses: [{
					code: "DH2320",
					title: "Introduction to Visualization and Computer Graphics",
					level: "second cycle",
					period: 1,
					credits: 6.0
				}]
		}
	];

}]);

myAcademicControllers.controller('WelcomeController', ['$scope', '$http',
  function($scope, $http) {
		/*   		FIXA HTTP GET  */
		$scope.selectedMaster;
		$scope.understand = "test";
		$scope.selectedTrack = null;


		/*
	  		TODO: use $http (HTTP GET) to populate $scope.masters with JSON.
  		*/
		$scope.masters = [
			{
				name: "Media Technology",
				id: 1,
				code: "TMETM",
				mandatoryCourses: [{
					code: "DM2573",
					title: "Sustainabily",
					level: "second cycle",
					period: 1,
					credits: 7.5
				}, {
					code: "DM2572",
					title: "Theory and methodology",
					level: "second cycle",
					period: 2,
					credits: 7.5
				}],
				tracks: [
					{
						trackCode: "META",
						title: "Image and Video Technlogy",
						trackCourses: [{
							code: "EN2401",
							title: "Image and video processing",
							level: "second cycle",
							period: 2,
							credits: 6.0
						}]
					},

					{
						trackCode: "METB",
						title: "Interactive Media Technology",
						trackCourses: [{
							code: "DH2641",
							title: "Interaction Programming",
							level: "second cycle",
							period: 3,
							credits: 6.0
						}, {
							code: "DT2141",
							title: "Multimodal Interaction",
							level: "second cycle",
							period: 2,
							credits: 7.5
				}, {
							code: "DD2385",
							title: "Software engineering",
							level: "second cycle",
							period: 1,
							credits: 6.0
				}, {
							code: "DD2395",
							title: "Computer Security",
							level: "second cycle",
							period: 1,
							credits: 6.0
				}]
					},

					{
						trackCode: "METC",
						title: "Audio Technlogy",
						trackCourses: [{
							code: "DT2300",
							title: "Sound in interaction",
							level: "second cycle",
							period: 1,
							credits: 7.5
						}]
					},
					{
						trackCode: "METD",
						title: "Printed Communication",
						trackCourses: [{
							code: "DM2531",
							title: "Graphic Arts Prduction",
							level: "second cycle",
							period: 4,
							credits: 7.5
						}]
					}
			]
		},
			{
				name: "Human Computer Interaction",
				id: 2,
				code: "THCIM",
				tracks: [{
					trackCode: "",
					title: "",
					trackCourses: []
				}],
				mandatoryCourses: [{
					code: "DH2610",
					title: "Theory and methodology for HCI",
					level: "second cycle",
					period: 1,
					credits: 7.5
				}],
				conditionalCourses: [{
					code: "DH2320",
					title: "Introduction to Visualization and Computer Graphics",
					level: "second cycle",
					period: 1,
					credits: 6.0
				}]
		}
	];

  }]);