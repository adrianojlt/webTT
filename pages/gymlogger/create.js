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
		{
			"id":"2",
			"name": "Legs",
			"exercises":[
				{"id":"1","name":"power squats"},
				{"id":"2","name":"front squats"}
			]
		},
		{
			"id":"3",
			"name":"Back",
			"exercises":[
				{"id":"1","name":"back exerc 1"},
				{"id":"2","name":"back exerc 2"}
			]
		},
		{
			"id":"4",
			"name":"Chest",
			"exercises":[
				{"id":"1","name":"chest exec 1"},
				{"id":"2","name":"chest exec 2"}
			]
		}
	];

	//$scope.exercises = [{"id":"1","name":"power squats"}, {"id":"2","name":"front squats"} ];

	$scope.exercisesForm = [
		{ 
			repetitions: [{weight:"",rep:""}],
			selectedGroup: null,
			selectedExercise: null
		}
	];

	//$scope.repetitions = [{weight:"11",rep:"11"} ];

	$scope.getMuscleGroups = function() {};

	$scope.muscleGroupChanged = function(exercise) {

		console.log('selectedGroup: ',exercise.selectedGroup);
		console.log('exercise: ',exercise);

		if ( exercise.selectedGroup == undefined ) 		exercise.selectedGroup = null;
		if ( exercise.selectedExercise == undefined ) 	exercise.selectedExercise = null;
	};

	$scope.exerciseChanged = function(selectedExercise) {
		//console.log('selectedExercise: ',selectedExercise);
	};

	$scope.getExercises = function(indice) {
		//console.log(indice);
		return [
			{"id":"1","name":"power squats"},
			{"id":"2","name":"front squats"}
		];
	};

	$scope.addExerciseInput = function(indice) {
		$scope.exercisesForm.splice( indice + 1 , 0 , {repetitions:[{weight:"",rep:""}]} );
	};

	$scope.removeExerciseInput = function(indice) {
		if ( $scope.exercisesForm.length > 1 ) $scope.exercisesForm.splice(indice,1);
	};

	$scope.addRepetitionInput = function(indice) {
		$scope.exercisesForm[indice].repetitions.push({});
	};

	$scope.removeRepetitionInput = function(indice,$index,a) {
		if ( $scope.exercisesForm[indice].repetitions.length > 1 ) $scope.exercisesForm[indice].repetitions.splice($index,1);
	};

	$scope.save = function() {
		console.log($scope.exercisesForm[0].repetitions);
		console.log($scope.repetitions);
	};

	$scope.cancel = function() {
		console.log('cancel');
		console.log($scope.exercisesForm);
	};
}




