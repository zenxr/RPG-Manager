var router = require('express').Router();
var controller = require("./character.controller");

// handle routing to controller
router.get('/', controller.index);
router.post('/', controller.create);
router.get('/:id', controller.get);
router.delete('/:id', controller.remove);
// router.get('/:id', isLoggedIn, controller.get);


// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {
    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}

module.exports = router;