app.controller('homeController', ['$scope','userFactory', 'postFactory', 'commentFactory', '$location', '$cookies', function($scope, userFactory, postFactory, commentFactory, $location, $cookies) {

	$scope.comment = {text: ''};

	var currentuser = $cookies.getAll();
	console.log('this is the home controller', currentuser);
	
	// makes sure a user is logged in
	if (currentuser.id){
		console.log('user is logged in');
	} else {
		console.log('user is not logged in');
		$location.url('/index');
	}

	getposts = function(){
		console.log('trying to get posts');
		postFactory.getposts(function(returnedData){
			console.log('my posts', returnedData);
			$scope.posts = returnedData;
		})
	}

	$scope.newpost = function(){
		if ($scope.post){
			$scope.post._user = currentuser.id;
			console.log('new post should have', $scope.post);
			postFactory.post($scope.post, function(returnedData){
				console.log('my returned data', returnedData);
				$scope.post = {};
				getposts();
			})
		}
	}

	$scope.newcomment = function(id, index){
		$scope.comment[index]._user = currentuser.id;
		$scope.comment[index]._post = id;
		console.log('the comment is:', $scope.comment[index])
		commentFactory.comment($scope.comment[index], function(returnData){
			console.log('my returned data', returnData);
			$scope.comment[index] = {};
			getposts();
		})	
	}

	$scope.currentuser = currentuser

	getposts();

}]);

