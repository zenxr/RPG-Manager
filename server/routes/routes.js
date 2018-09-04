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
// process the login request
router.post('/login', passport.authenticate('local-login'), function(req, res) {
    // if this function gets called, authentication was successful
    if (req){
      res.json({ user : req.user });
    }
});

// =====================================
// SIGNUP ==============================
// =====================================

// process the signup form
router.post('/signup', passport.authenticate('local-signup'), function(req, res) {
    // if this function gets called, authentication was successful
    // 'req.user' contains the authenticated User
    res.json({ user : req.user });
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

// for everything else, route to index
router.get('/*', function(req, res){
  res.render('index')
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
