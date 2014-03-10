// Implement this controllers object when we want to pass several controllers!
//var controllers = {};

/*The data model (a simple array of courses in object literal notation) 
is now instantiated within the mainController controller. 
The controller is simply a constructor function that takes a $scope parameter. */

app.controller("MainController", function($scope) {
	$scope.whatever = "whatever bro";
	$scope.inputValue = "";
	$scope.selectedCourse = "DM1021";

	$scope.courses = [];

	$().ready(function() {
		var url = 'http://www.kth.se/api/kopps/v1/programme/TMETM/academic-year-plan/2013:2/1&callback=?';

		$.get(url, function(data) {
			alert(data);
			alert(url);
			// can use 'data' in here...
		});
	});


});



/*FRÅN ANGULAR_TUTORIAL: 

var phonecatControllers = angular.module('phonecatControllers', []);
 
phonecatControllers.controller('PhoneListCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('phones/phones.json').success(function(data) {
      $scope.phones = data;
    });
 
    $scope.orderProp = 'age';
  }]);
 
phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.phoneId = $routeParams.phoneId;
  }]); */