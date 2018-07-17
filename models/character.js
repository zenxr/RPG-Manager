// app/models/character.js
// load the things we need
var mongoose = require('mongoose');

// define the schema for our user model
var characterSchema = mongoose.Schema({
	
    name : {type: String, required: true, max: 100},
    race : {type: String, required: true, max: 100},
    class : {type: String, required: true, max: 100},
    level : {type: Number, default: 1 },
    user: {type: mongoose.Schema.ObjectId, ref: 'User'},

    // creation date
    date: {type : Date, default: Date.now }
});

// methods ======================
// custom remove middleware
// removes the character from the appropriate user's account
characterSchema.pre('remove', function(next) {
	var character = this;
	character.model('User').update(
		{}, { $pull: { "characters" : character._id } }, function (err, user) {
			if(err){
				return res.status(404).json({ success : false });
			}
		},
	);
	next();
});
// create the model for users and expose it to our app
module.exports = mongoose.model('Character', characterSchema);