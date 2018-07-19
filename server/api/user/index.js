var router = require('express').Router();
var controller = require("./user.controller");

// =====================================
// Create ==============================
// =====================================
// show the create character form
// only accessible if user is logged in
 
router.delete('/:id', controller.removeUser);
router.get('/:id/characters', controller.getUserCharacters)

//router.get('/:id', isLoggedIn, controller.get);


// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {
    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}

module.exports = router;