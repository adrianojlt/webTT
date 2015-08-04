var app = angular.module('wizardExample', 
	[
		'ngRoute',
		'mgo-angular-wizard'
		 //'restangular'
	]
);

app.run(function($rootScope) {

});

app.controller('MainController', 	['$scope','$route','WizardHandler',MainController]);

function MainController( $scope , $route , WizardHandler ) {

	var self = this;

	$scope.current = "Continuing";

	$scope.tmp = function() {
		WizardHandler.wizard().goTo(2);
	}

	$scope.finishedWizard = function() {
		console.log('finishedWizard');
	};
}



