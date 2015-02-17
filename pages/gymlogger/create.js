var app = angular.module('gymApp', 
	[
		 'ngRoute'
		 //'restangular',
	]
);

app.controller('MainController', ['$scope','$route',MainController]);

function MainController( $scope , $route ) {

	var self = this;

	$scope.musclegroups = [
		{"id":"2","name":"Legs"},
		{"id":"3","name":"Back"},
		{"id":"4","name":"Chest"}
	];

	$scope.repetitions = [
		{"id":"1","name":"power squats"},
		{"id":"2","name":"front squats"}
	];

	$scope.exercicesForm = [
		{ 
			repetitions: [
				{weight:"",rep:""}
			] 
		}
	];

	//$scope.repetitions = [{weight:"11",rep:"11"} ];

	$scope.getMuscleGroups = function() {};

	$scope.getExercices = function(indice) {
		console.log('getExercices');
		return [];
	};

	$scope.addExerciceInput = function(indice) {
		$scope.exercicesForm.splice( indice + 1 , 0 , {repetitions:[{weight:"",rep:""}]} );
	};

	$scope.removeExerciceInput = function(indice) {
		if ( $scope.exercicesForm.length > 1 ) $scope.exercicesForm.splice(indice,1);
	};

	$scope.addRepetitionInput = function(indice) {
		$scope.exercicesForm[indice].repetitions.push({});
	};

	$scope.removeRepetitionInput = function(indice,$index,a) {
		if ( $scope.exercicesForm[indice].repetitions.length > 1 ) $scope.exercicesForm[indice].repetitions.splice($index,1);
	};

	$scope.save = function() {
		console.log($scope.exercicesForm[0].repetitions);
		console.log($scope.repetitions);
	};

	$scope.cancel = function() {
		console.log('cancel');
		console.log($scope.exercicesForm);
	};
}




