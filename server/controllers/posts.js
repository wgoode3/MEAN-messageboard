console.log('posts controller');

var mongoose = require('mongoose');
var Post = mongoose.model('Post');

function PostsController(){
  this.index = function(req,res){
    // something to retrieve all posts
    console.log('in posts index')
    Post.find({}).populate('_user comments')
      .exec(function(err, posts){
        Post.populate(
          posts,
          {path: 'comments._user', model: 'User'}, 
          function(err, posts){
            res.json(posts);
          })
      })
  };
  this.create = function(req,res){
    var post = new Post(req.body);
    console.log('gonna look at this post object', post);
    post.save(function(err, result){
      if(err) {
        console.log('something went wrong', err);
        res.json(err);
      } else {
        console.log('successfully added a post');
        res.json(result);
      }
    })
  };
}
module.exports = new PostsController();


// Post.find({}).populate('_user comments comments._user').exec(function(err, posts){
//         res.json(posts);
//     })