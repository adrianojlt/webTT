app.controller("MainController", function($scope){

	this.understand = "I now understand how the scope works!";	
	$scope.inputValue = "data binding ....";
	$scope.amount = 24039;

	$scope.selectedPerson = 0;
	$scope.people = [
		{
			id: 0,
			name: 'Leon',
			music: [
				'Rock',
				'Metal',
				'Dubstep',
				'Electro'
			],
			live: true
		},
		{
			id: 1,
			name: 'Chris',
			music: [
				'Indie',
				'Drumstep',
				'Dubstep',
				'Electro'
			],
			live: true
		},
		{
			id: 2,
			name: 'Harry',
			music: [
				'Rock',
				'Metal',
				'Thrash Metal',
				'Heavy Metal'
			],
			live: false
		},
		{
			id: 3,
			name: 'Allyce',
			music: [
				'Pop',
				'RnB',
				'Hip Hop'
			],
			live: true
		}
	];

	$scope.newPerson = null;

    $scope.addNew = function() {

        if ( $scope.newPerson != null && $scope.newPerson != "" ) {

            $scope.people.push({
                id: $scope.people.length,
                name: $scope.newPerson,
                live: true,
                music: []
            });
        }
    };

    $scope.remove = function(id) {

    	angular.forEach($scope.people, function(p, key) {
    		//if ( p.id === id ) { $scope.people.splice(p, id); }
    		pessoas = $scope.people;
    		if ( p.id === id ) { 
    			pessoa = p;
    		}
    	});
    }
});