/**
 * Creates a new character
 */

// load up the user model
var User = require('../../../models/user');

// load up the character model
var Character = require('../../../models/character');

function index(req, res) {
    // render the page and pass in any flash data if it exists
    res.render('app/character/characterCreate.ejs');
}

function createCharacter(req, res) {
  // add the created character to the database
  var name = req.body.name;
  var race = req.body.race;
  var charClass = req.body.class;

  var user = req.user // grab the user

  var characterDetail = {name: name, race: race, class: charClass, level: 1};
  var character = new Character(characterDetail);

  character.save(function (err) {
      if (err) {
        console.log("Error!")
        return
      }
  });

  user.characters.push(character);
  user.save(function (err) {
      if (err) {
        console.log("Error!")
        return
      }
  });

  res.redirect('/profile');
}

function showCharacter(req, res) {
  // pass in the relevant character information
  Character.findById(req.params.id, function(err, some_char){
    req.selectedChar = some_char;
    res.render('app/character/character.ejs', { user : req.user, character : req.selectedChar });
  });
}

module.exports = {index, createCharacter, showCharacter};