//server/routes/routes.js
var express = require('express');
var passport = require('passport');
var router = express.Router();

// load up the user model
var User = require('../../models/user');

// load up the character model
var Character = require('../../models/character');

router.get('/', function(req, res){
  res.render('index')
});

// =====================================
// LOGIN ===============================
// =====================================
// show the login form
router.get('/login', function(req, res) {

    // render the page and pass in any flash data if it exists
    res.render('app/profile/login.ejs', { message: req.flash('loginMessage') }); 
});

// process the login form
router.post('/login', passport.authenticate('local-login', {
    successRedirect : '/profile', // redirect to the secure profile section
    failureRedirect : '/login', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages
}));

// =====================================
// SIGNUP ==============================
// =====================================
// show the signup form
router.get('/signup', function(req, res) {

    // render the page and pass in any flash data if it exists
    res.render('app/profile/signup.ejs', { message: req.flash('signupMessage') });
});

// process the signup form
router.post('/signup', passport.authenticate('local-signup', {
    successRedirect : '/profile', // redirect to the secure profile section
    failureRedirect : '/signup', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages
}));

// =====================================
// PROFILE SECTION =====================
// =====================================
// we will want this protected so you have to be logged in to visit
// we will use route middleware to verify this (the isLoggedIn function)
router.get('/profile', isLoggedIn, function(req, res) {

    // if the user has characters
    if (req.user.characters){
        Character.find({ '_id': { $in: req.user.characters}}, function(err, characters) {
            if (err)
                return done(err);
            res.render('app/profile/profile.ejs', {
                user : req.user, characters : characters // get the user out of session and pass to template
            });
        });
    }
    // else, dont pass characters
    else {
        res.render('app/profile/profile.ejs', {
            user : req.user // get the user out of session and pass to template
        });
    }

    //res.render('app/profile/profile.ejs', {
    //    user : req.user, character: character // get the user out of session and pass to template
    //});
});

// =====================================
// LOGOUT ==============================
// =====================================
router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});

// =====================================
// Create ==============================
// =====================================
// show the create character form
// only accessible if user is logged in
router.get('/create', isLoggedIn, function(req, res) {

    // render the page and pass in any flash data if it exists
    res.render('app/character/character.ejs');
});

router.post('/create', function(req, res) {
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
        console.log('character saved for user');
    });


    // if errors exist, inform the user via flash (?)

    // ensure the character name doesn't already exist


    res.redirect('/profile');

});
// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}


module.exports = router;