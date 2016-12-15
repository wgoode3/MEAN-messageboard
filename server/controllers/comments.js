console.log('comments controller');

var mongoose = require('mongoose');
var Comment = mongoose.model('Comment');
var Post = mongoose.model('Post');

function CommentsController(){
  this.create = function(req,res){
    Post.findOne({_id: req.body._post}, function(err, post){
      var comment = new Comment(req.body);
      console.log('gonna look at this comment object', comment);
      comment.save(function(err, result){
        post.comments.push(comment);
        post.save(function(err){
          if(err){
            console.log('something broke... shocking I know');
            res.json(err);
          } else {
            res.json({something: 'something'});
          }
        });
      });
    });
  };
}
module.exports = new CommentsController();


