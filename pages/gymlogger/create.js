var app = angular.module('gymApp', 
	[
		 'ngRoute'
		 //'restangular',
	]
);

app.controller('MainController', 	['$scope','$route',MainController]);

function MainController( $scope , $route ) {

	var self = this;

	$scope.exercices = [];
	//$scope.exercices.repetitions = [];
	$scope.repetitions = [];


	//$scope.exercices.repetitions.push({weight: null, rep: null});
	$scope.repetitions.push({weight: null, rep: null});
	$scope.exercices.push({});

	$scope.save = function() {
		//console.log('save');
		//console.log($scope.exercices);
		console.log($scope.repetitions);
	};

	$scope.cancel = function() {
		console.log('cancel');
	};
}
