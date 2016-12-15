console.log('comments model');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var CommentSchema = new mongoose.Schema({
	_user: {type: Schema.Types.ObjectId, ref: 'User'},
	_post: {type: Schema.Types.ObjectId, ref: 'Post'},
	text: String,
}, {timestamps: true});

var Comment = mongoose.model('Comment', CommentSchema); 
