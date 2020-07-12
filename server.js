const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

const app = express();

// load env vars
require('dotenv').config();

app.use(express.static('public'));
app.use(session({
    secret: process.env.EXPRESS_SESSION_SECRET,
    resave: true,
    saveUninitialized: false
}));
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());

mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("MongoDB connected."))
    .catch(err => console.log(`Error connecting to MongoDB: ${err.message}`));

require('./Middleware/gpassport').initializeGoogleAuth;
// use routes
const groups = require('./routes/api/groups');
app.use('/api/groups', groups);

const auth = require('./routes/api/auth');
app.use('/api/auth', auth);

const users = require('./routes/api/users');
app.use('/api/users', users);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));