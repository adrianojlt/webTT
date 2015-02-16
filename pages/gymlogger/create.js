var app = angular.module('gymApp', 
	[
		 'ngRoute'
		 //'restangular',
	]
);

app.controller('MainController', ['$scope','$route',MainController]);

function MainController( $scope , $route ) {

	var self = this;

	$scope.exercices = [
		{"id":"1","name":"Legs"},
		{"id":"2","name":"Back"},
		{"id":"3","name":"Chest"}
	];

	$scope.exercices = [
		{"id":"1","name":"power squats"},
		{"id":"2","name":"front squats"},
	];

	$scope.exercicesForm = [
		{ 
			repetitions: [
				{weight:"",rep:""}
			] 
		}
	];

	//$scope.repetitions = [{weight:"11",rep:"11"} ];

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




