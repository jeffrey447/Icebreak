const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const User = require('../models/user');
const passport = require('passport');

// load env vars
require('dotenv').config();

// used to serialize the user for the session
passport.serializeUser((user, done) => {
    done(null, user);
});

// used to deserialize the user
passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(err, user);
    });
});

passport.use(new GoogleStrategy({
    clientID:       process.env.GOOGLE_CLIENT_ID,
    clientSecret:   process.env.GOOGLE_CLIENT_SECRET,
    callbackURL:    process.env.GOOGLE_CALLBACK_URL
}, (token, refreshToken, profile, done) => {
    // make code async
    // User.findOne won't fire until all data from Google is loaded
    process.nextTick(() => {
        // try to find the user based on their google ID
        User.findOne({ 'uid' : profile.id },
        (err, user) => {
            if (err)
            return done(err);
        
            if (user) {
                // if a user is found, log them in.
                
                var changed = false;

                var pfp = profile._json['picture'];
                if (user.profilePic != pfp) {
                    // if they have a new profile picture, update
                    user.profilePic = pfp;
                    changed = true;
                }  

                if (user.token != token) {
                    user.token = token;
                    changed = true;
                }

                // if anything was changed, save the new updates.
                if (changed)
                    user.save();

                return done(null, user);
            } else {
                // user is not in our database, create new one then
                var u = new User();
                u.name = profile.displayName;
                u.email = profile.emails[0].value;
                u.token = token;
                u.uid = profile.id;
                u.profilePic = profile._json['picture'];
                u.save();

                return done(null, u);
            }
        });
    });
}));

let isUserAuthenticated = (req, res, next) => {
    if (req.isAuthenticated() && req.user != null) {
        return next();
    }
    res.redirect(process.env.HOME_DOMAIN);
}

module.exports = {
    signIn: passport.authenticate('google', {scope: ['profile', 'email']}),
    callback: passport.authenticate('google', { successRedirect : 'http://localhost:3000/home', failureRedirect : process.env.HOME_DOMAIN}),
    isUserAuthenticated
}