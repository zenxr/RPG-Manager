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
});

// =====================================
// LOGOUT ==============================
// =====================================
router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});


// routing to respective folders
router.use('/character', require('./character'));

// routing to api folders
router.use('/api/user', require('../api/user'));
router.use('/api/character', require('../api/character'));

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}


module.exports = router;