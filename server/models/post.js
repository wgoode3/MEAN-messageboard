console.log('posts model');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var PostSchema = new mongoose.Schema({
	_user: {type: Schema.Types.ObjectId, ref: 'User'},
	text: String,
	comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
}, {timestamps: true})

var Post = mongoose.model('Post', PostSchema) 
