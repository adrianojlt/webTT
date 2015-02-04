var app = angular.module('startApp', 
	[
		 'ngRoute'
		 //'restangular',
	]
);

app.controller('MainController', 	['$scope','$route',MainController]);

function MainController( $scope , $route ) {
	var self = this;
	//console.log($route);
}