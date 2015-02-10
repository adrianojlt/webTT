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
				{ 
					weight:"",
					rep:""
				}
			] 
		}
	];

	//$scope.exercices = [];
	//$scope.exercices
	//$scope.exercices[0] = { repetitions: [] };
	//$scope.exercices.repetitions = [];
	//$scope.exercices.repetitions[0] = {"name":""};
	$scope.repetitions = [];


	//$scope.exercices.repetitions.push({weight: null, rep: null});
	$scope.repetitions.push({weight: null, rep: null});
	$scope.exercices.push({});

	$scope.addExerciceInput = function() {
		$scope.exercices.push({});
	};

	$scope.removeExerciceInput = function(indice) {
		$scope.exercices.splice(indice,1);
	};

	$scope.addRepetitionInput = function(a) {
		console.log(a);
		$scope.repetitions.push({});
	};

	$scope.removeRepetitionInput = function($index) {
		console.log($index);
		if ( $scope.repetitions.length > 1 )
			$scope.repetitions.splice($index,1);
	};

	$scope.save = function() {
		console.log($scope.repetitions);
	};

	$scope.cancel = function() {
		console.log('cancel');
		console.log($scope.exercices);
	};
}
