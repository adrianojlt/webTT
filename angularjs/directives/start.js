var app = angular.module('startApp', 
	[
		 'ngRoute'
		 //'restangular',
	]
);

app.run(function($rootScope) {
	//console.log('inside run');
	$rootScope.rootProperty = 'root scope';
});

app.controller('MainController', 	['$scope','$route',MainController]);

function MainController( $scope , $route ) {

	var self = this;

	console.log($scope.rootProperty);
}

app.directive('myDirective', function() {
	return {
		restrict: 'E',
		replace: true,
		template: '<a href="http://www.google.com">GooGle</a>'
	}
});

app.directive('linkMicrosoft', function() {
	return {
		restrict: 'A',
		replace: false,
		scope: {
			myUrl: '@',		// binding strategy
			myText: '@'		// binding strategy
		},
		template: '<a href="{{myUrl}}">{{myText}}</a>'
	}
});