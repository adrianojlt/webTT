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
	//console.log($scope.rootProperty);
	$scope.outerval = "mydata";
	$scope.outerfunc = function() {
		console.log('outerfunc()');
	};
}

app.directive('myDirective', function() {
	return {
		restrict: 'E',
		replace: true,
		template: '<a href="http://www.google.com">GooGle</a>' // text and link are hard coded here ...
	}
});

app.directive('linkMicrosoft', function() {
	return {
		restrict: 'A',
		replace: false,
		scope: { // create an isolated scope ...
			someProperty:'@someAttr', // ... we can specify the name of the attribute we want to bind to.
			myUrl: '@',		// binding strategy
			myText: '@'		// binding strategy
		},
		template: '<input type="text" ng-model="myUrl" /><a href="{{myUrl}}">{{myText}}</a>',
		controller: function($scope) {

			// here we can access to binding var's
			//console.log('myUrl:',$scope.myUrl);
			//console.log('someProperty:',$scope.someProperty);
		}
	}
});

app.directive('tmpDir', function() {
	return {
		restrict: 'AE',
		template: '<i>{{ innerval }}</i>',
		scope: {innerval: '@myattr', innerfunc: '&myfunc'},
		//scope: false,
		link: function(scope) {
			console.log('**link**');
			console.log(scope.innerval);
			scope.innerfunc();
		},
		controller: function($scope) {
			console.log('**controller**');
			console.log($scope.outerval);
		}
	}
});
