/**
 * Creates a new character
 */

// load up the models
var Character = require('../../../models/character');
var User = require('../../../models/user');

// returns all characters
function index(req, res){
  Character.find()
  .sort('-date')
  .then(characters => res.json(characters));
}


// find a character
function get(req, res) {
  Character.findById(req.params.id)
  .then(character => res.json(character))
  .catch(err => res.status(404).json({success: false}));
}

// create a character
function create(req, res) {
  if(req.body.user){
    const newChar = new Character({
      name : req.body.name,
      race : req.body.race,
      class : req.body.class,
      user: req.body.user
    });
  }

  // save the character to DB
  newChar.save()
  .then(character => res.json({success: true}));
}

// delete a character
// see the mongoose model for character for middleware
function remove(req, res) {
  Character.findById(req.params.id)
  .then(character => {
    character.remove().then(res.json({ success : true }));
  })
  .catch(err => res.status(404).json({success: false }));
}

module.exports = {index, get, remove, create };
