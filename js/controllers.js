/*FRÅN ANGULAR_TUTORIAL: */

var myAcademicControllers = angular.module('myAcademicControllers', []);

myAcademicControllers.controller('MainController', ['$scope', '$http',
  function($scope, $http) {
		// $http.get('phones/phones.json').success(function(data) {
		//   $scope.phones = data;
		$scope.courses = [{
			code: "blabla"
			}];

		//$scope.orderProp = 'age';
}]);

myAcademicControllers.controller('Controller2', ['$scope', '$routeParams',
  function($scope, $routeParams) {
		$scope.code = $routeParams.code;
  }]);