/**
 * Creates a new character
 */

// load up the user model
var User = require('../../../models/user');
// load up the character model
var Character = require('../../../models/character');

// returns all users
function index(req, res) {
  User.find()
  .sort('-date')
  .then(users => res.json(users));
}

// find a user
function getUser(req, res) {
  User.findById(req.params.id)
  .then(user => res.json(user))
  .catch(err => res.status(404).json({success: false}));
}

// delete a user
// this should also delete all of their characters
function removeUser(req, res) {
  User.findById(req.params.id)
  .then( user => {
    Character.find({_id: {$in: user.characters}}, function (err, characters) {
      if (err) res.status(404).json({success : false });
      else {
        characters.forEach( character => {
          character.remove()
          .then(user.remove()
            .then(res.json({ success : true })));
        })
      }
    })
  })
}

// get user's characters
function getUserCharacters(req, res) {
	User.findById(req.params.id).populate("characters")
	.then(user => res.json(user. characters))
	.catch(err => res.status(404).json({success: false}));
}

// update a user


module.exports = {index, getUser, removeUser, getUserCharacters};