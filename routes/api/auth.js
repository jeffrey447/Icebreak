const express = require('express');
const router = express.Router();
const passport = require('passport');
const googleAuth = require('../../Middleware/gpassport');

var isLoggedIn = (req, res, callback) => {
  if (req.isAuthenticated()) 
    return callback();
  
    // not logged in so redirect to home page
    res.redirect('/');
}
router.get('/logout', (req, res) => {
    req.logout();
    res.redirect(process.env.HOME_DOMAIN);
});

// ask google to do the authentication
router.get('/', googleAuth.signIn);

// callback after google has finished auth'ing the user
router.get('/callback', googleAuth.callback)

router.get('/status', (req, res) => {
    // check if logged in
    res.status(200).json({
        loggedIn: (req.isAuthenticated() && (req.user != null)),
        user: req.user
    });
});

module.exports = router;