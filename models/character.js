// app/models/character.js
// load the things we need
var mongoose = require('mongoose');

// define the schema for our user model
var characterSchema = mongoose.Schema({
	
    name: {type: String, required: true, max: 100},
    race: {type: String, required: true, max: 100},
    class: {type: String, required: true, max: 100},
    level : Number,

    // creation date
    date: {type : Date, default: Date.now }
});

// methods ======================

// create the model for users and expose it to our app
module.exports = mongoose.model('Character', characterSchema);
