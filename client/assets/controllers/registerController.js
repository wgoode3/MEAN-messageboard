app.controller('registerController', ['$scope','userFactory','$location', '$cookies', function($scope, userFactory, $location, $cookies) {

	console.log('register controller good to go.');

	$scope.register = function(){
		console.log($scope.user);
		userFactory.create($scope.user, function(returnedData){
			console.log(returnedData);
			if (returnedData.errors){
				console.log('we got errors here people')
				$scope.errors = returnedData.errors;
			} else {
				console.log("in the create method", returnedData);
				$cookies.put('id', returnedData._id);
				$cookies.put('name', returnedData.username);
				$location.url('/home');
			}
		})
	}
}]);
