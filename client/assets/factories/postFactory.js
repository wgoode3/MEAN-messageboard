console.log('Post Factory');
app.factory('postFactory', ['$http', function($http) {

  var posts = [];
  var post = {};
  function PostFactory(){
    var _this = this;
    this.post = function(newpost,callback){
      $http.post('/post', newpost).then(function(returned_data){
        console.log(returned_data.data);
        if (typeof(callback) == 'function'){
          callback(returned_data.data);
        }
      })
    }
    this.getposts = function(callback){
      console.log('about to make a get request for posts');
      $http.get('/post').then(function(returned_data){
        console.log(returned_data.data);
        if (typeof(callback) == 'function'){
          callback(returned_data.data);
        }
      })
    }
  };
  return new PostFactory();
}]);
