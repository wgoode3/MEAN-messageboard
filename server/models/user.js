console.log('users model');
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var Schema = mongoose.Schema;


var UserSchema = new mongoose.Schema({
	username: {type: String, 
		required: [true, 'Username is required.']},
	email: {type: String, 
		required: [true, 'Email is required'],
		validate: {
			validator: function( value ) {
				return /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]/.test( value );
			},
			message: "Email is invalid."
		}
	},
	password: {type: String, 
		required: [true, 'Password is required.'],
		validate: {
          	validator: function( value ) {
            	return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d$@$!%*?&]{8,32}/.test( value );
          	},
          	message: "Password must be length 8 or greater with at least 1 number, uppercase, and lowercase letter"
        }
    },
    posts: [{type: Schema.Types.ObjectId, ref: 'Post'}],
    comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
}, {timestamps: true})

UserSchema.pre('save', function(done){
	this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8));
	done();
})

var User = mongoose.model('User', UserSchema) 

