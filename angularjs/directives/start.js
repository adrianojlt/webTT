var app = angular.module('startApp', 
	[
		 'ngRoute'
		 //'restangular',
	]
);

app.run(function($rootScope) {
	$rootScope.rootProperty = 'var in root scope';
});

app.controller('MainController', 	['$scope','$route',MainController]);

function MainController( $scope , $route ) {

	var self = this;
	
	$scope.outerval = "String inside MainController!!!";
	$scope.ctrlObj = {cenas:'obj inside controller and called from directive'};

	$scope.outerfunc = function() {
		console.log('outerfunc() inside MainController!!!');
	};

	//console.log($scope.rootProperty);
}

app.directive('linkDirective', function() {
	return {
		restrict: 'E',
		replace: true,
		template: '<a href="http://www.google.com">GooGle</a>' // text and link are hard coded here ...
	}
});

app.directive('linkMicrosoft', [function() {

	return {

		restrict: 'A',
		replace: false,
		scope: { // create an isolated scope ...
			someProperty:'@someAttr', // ... we can specify the name of the attribute we want to bind to.
			myUrl: '@',		// binding strategy
			myText: '@'		// binding strategy
		},
		template: '<input type="text" ng-model="myUrl" /><a href="{{myUrl}}" target="_blank"> {{myText}} </a>',
		controller: ['$scope',function($scope) {
			// here we can access to binding var's
			//console.log('myUrl:',$scope.myUrl);
			//console.log('someProperty:',$scope.someProperty);
		}]
	}
}]);

app.directive('templateDirective', [function() {

	return {

		// E = element, A = attribute, C = class, M = comment      
		restrict: 'AE', 
		template: '<i>{{ innerval }}</i>',

		// choose if the content of the directive template replaces or not the element that
		// the directive is declared on ...
		replace: false,

		//@ reads the attribute value, = provides two-way binding, & works with functions
		scope: {
			innerval: '@dirVar', 
			innerfunc: '&dirFunc',
			innerobj: '=dirObj'
		}, 
		//scope: false,
		//scope: true, // inherits the parent scope, but creates a child scope on its own

		//bindToController: true,
		//controllerAs: 'ctrl',

		link: function(scope,element,attrs,ctrl) {

			console.log('*** link ***');
			console.log(scope.innerval);

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

			scope.innerfunc();

			console.log(scope.innerval);
			console.log(scope.innerobj);
		},
		
		controller: ['$scope',function($scope) {
			console.log('*** directive controller ***');
			console.log($scope.innerval);
		}]
	}
}]);

app.directive('transcludeExample', [function() {

	return {
		restrict: 'AE',
		scope: true,
		transclude: true,
		template: 	'<div class="col-md-6">content inside template</div>' +
					'<div class="col-md-6" ng-transclude></div>' 
	};
}]);



app.directive('tempDirective', [function() {

	return {
		restrict: 'AE',
		replace: true,
		template: '<div class="row">temp directive</div>' 
	};
}]);
