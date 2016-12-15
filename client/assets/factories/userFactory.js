console.log('User Factory');
app.factory('userFactory', ['$http', function($http) {

  var users = [];
  var user = {};
  function UserFactory(){
    var _this = this;
    this.create = function(newuser,callback){
      $http.post('/users', newuser).then(function(returned_data){
        if (returned_data.data.errors){
          console.log('we got errors in the factory');
        } else {
          console.log('successful creation');
        }
        console.log(returned_data.data.errors);
        if (typeof(callback) == 'function'){
          callback(returned_data.data);
        }
      });
    };
    this.show = function(users,callback){
      $http.get('/users').then(function(data){
        if (typeof(callback) == 'function'){
          callback(data.data);
        }
      });
    };
    this.login = function(user,callback){
      $http.post('/users/login', user).then(function(data){
        if (typeof(callback) == 'function'){
          callback(data.data);
        }
      });
    }
  }
  return new UserFactory();
}]);
