console.log('Comment Factory');
app.factory('commentFactory', ['$http', function($http) {

  var comments = [];
  var comment = {};
  function CommentFactory(){
    var _this = this;
    this.comment = function(newcomment,callback){
      $http.post('/comment', newcomment).then(function(returned_data){
        console.log('in the factory', returned_data);
        callback(returned_data);
      })
    }
    // this.getcomments = function(callback){
    //   console.log('about to make a get request for posts');
    //   $http.get('/comment').then(function(returned_data){
    //     console.log(returned_data.data);
    //     if (typeof(callback) == 'function'){
    //       callback(returned_data.data);
    //     }
    //   })
    // }
  };
  return new CommentFactory();
}]);
