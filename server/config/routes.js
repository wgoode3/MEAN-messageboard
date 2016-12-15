console.log('muh routes');

var users = require('../controllers/users.js');
var posts = require('../controllers/posts.js');
var comments = require('../controllers/comments.js');

module.exports = function(app) {
	
  	app.get('/users', users.index);
  	app.post('/users', users.create);
  	app.post('/users/login', users.login);
  	app.get('/logout', users.logout);

  	app.get('/post', posts.index);
  	app.post('/post', posts.create);

  	app.post('/comment', comments.create);
  	
}