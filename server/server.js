//server/server.js
var express = require('express');
var router = require('./routes/routes.js')
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();
var passport = require('passport');
var configDB = require('./config/database.js');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var flash = require('connect-flash');

// configuration ===============================================================
mongoose.connect(configDB.url); // connect to our database

require('./config/passport')(passport); // pass passport for configuration

// set up our express application
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser()); // get information from html forms

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../client'));
app.use(express.static(path.join(__dirname, '../client')));

// required for passport
app.use(session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

app.use('/', router);

module.exports=app;