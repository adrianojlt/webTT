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
	$scope.outerval = "String inside MainController!!!";

	$scope.outerfunc = function() {
		console.log('outerfunc() inside MainController!!!');
	};

	//console.log($scope.rootProperty);
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

app.directive('templateDirective', function() {

	return {

		//E = element, A = attribute, C = class, M = comment      
		restrict: 'AE', 

		template: '<i>{{ innerval }}</i>',

		// create an isolated scope
		// @ reads the attribute value, = provides two-way binding, & works with functions
		scope: {
			innerval: '@dirVar', 
			innerfunc: '&myfunc'
		}, 
		//scope: false, // same as emtpy
		//scope: true, // inherits the parent scope, but creates a child scope on its own

		link: function(scope,element,attrs,ctrl) {

			console.log('*** link ***');
			console.log(scope.innerval);

			scope.innerfunc();

			element.bind('click',function() {
				if ( element.html() === scope.innerval) element.html('clicked!!');
				else element.html(scope.innerval);
			});

			element.bind('mouseenter', function () {
                element.css('background-color', 'yellow');
            });

            element.bind('mouseleave', function () {
                element.css('background-color', 'lightgreen');
            });
		},
		
		controller: function($scope) {
			console.log('*** controller ***');
			console.log($scope.innerval);
		}
	}
});


app.directive('tempDirective', function() {

	return {

		restrict: 'AE',
		replace: true,
		template: '<div class="row">temp directive</div>' 
	}
});
