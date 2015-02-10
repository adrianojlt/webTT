var app = angular.module('gymApp', 
	[
		 'ngRoute'
		 //'restangular',
	]
);

app.controller('MainController', 	['$scope','$route',MainController]);

function MainController( $scope , $route ) {

	var self = this;

	$scope.exercices = [
		{ 
			repetitions: [
				{weight:"11",rep:"11"}
			] 
		}
	];

	$scope.repetitions = [
		{weight:"11",rep:"11"}
	];

	$scope.addExerciceInput = function() {
		$scope.exercices.push({});
	};

	$scope.removeExerciceInput = function(indice) {
		$scope.exercices.splice(indice,1);
	};

	$scope.addRepetitionInput = function(indice) {
		//$scope.repetitions.push({});
		$scope.exercices[indice].repetitions.push({});
	};

	$scope.removeRepetitionInput = function(indice,$index) {
		console.log($index);
		if ( $scope.exercices[indice].repetitions.length > 1 ) 
			$scope.exercices[indice].repetitions.splice($index,1);
	};

	$scope.save = function() {
		console.log($scope.exercices[0].repetitions);
		console.log($scope.repetitions);
	};

	$scope.cancel = function() {
		console.log('cancel');
		console.log($scope.exercices);
	};
}
