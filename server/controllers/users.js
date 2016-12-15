console.log('users controller');

var mongoose = require('mongoose');
var User = mongoose.model('User');
var bcrypt = require('bcrypt');

function UsersController(){
  this.index = function(req,res){
    // something
  };
  this.create = function(req,res){
    var user = new User(req.body);
    if (req.body.password !== req.body.confirm_password){
      err = {errors: {password: {message: "Password must match confirm password"}}};
      res.json(err);
    } else {
      user.save(function(err, result){
      if(err) {
        console.log('something went wrong', err);
        res.json(err);
      } else {
        console.log('successfully added a user');
        res.json(result);
      }
    })
    }
  };
  this.login = function(req,res){
    if (!req.body.password && !req.body.email){
      res.json({login: false, 
        errors: {
          email: {message: 'Email cannot be blank.'},
          password: {message: 'Password cannot be blank.'} 
        }
      });
    } else if (!req.body.password){
      res.json({login: false, errors: {password: {message: 'Password cannot be blank.'}}});
    } else {
      User.findOne({email: req.body.email}, function(err, user){
        console.log('get back a user', user);
        if (user) {
          if(bcrypt.compareSync(req.body.password, user.password)){
            res.json({login: true, user: user})
          } else {
            res.json({login: false, errors: {password: {message: 'Wrong Password'}}})
          }
        } else {
          res.json({login: false, errors: {email: {message: 'Email not found ;_;'}}})
        }
      })
    }
  };
  this.logout = function(req,res){
    // make a logout function
    // I've been handling logout on the frontend
  };
}
module.exports = new UsersController();
