app.controller('loginController', ['$scope','userFactory','$location', '$cookies', function($scope, userFactory, $location, $cookies) {

	console.log('login controller good to go.');

	// check if the user is still logged in?
	// var currentuser = $cookies.getAll();
	// if (currentuser.id && currentuser.name){
	// 	console.log('user is logged in');
	// 	$location.url('/home');
	// } 
	// doesn't seem all that secure to me

	$scope.login = function(){
		console.log($scope.user);
		userFactory.login($scope.user, function(returnedData){
			console.log("in login controller", returnedData);
			if (returnedData.login) {
				console.log('login successful', returnedData);
				console.log(returnedData);
				$cookies.put('id', returnedData.user._id);
				$cookies.put('name', returnedData.user.username);
				$location.url('/home');
			} else {
				console.log('we got errors here people');
				$scope.errors = returnedData.errors;
			}
		})
	}

	$scope.logout = function(){
		console.log('log me out!');
		$cookies.remove('id');
		$cookies.remove('name');
		$location.url('/index');
	}

}]);
