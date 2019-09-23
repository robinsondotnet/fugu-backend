// Import all of dependencies needed to setup our express app
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');
const configureRouting = require('./config/router');
const {initDatabase} = require('./database');

// Create the express app instace that will be used
const app = express();

// Setup middlewares needed for our application
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json());

// Initialize Database
initDatabase(app);

// Import requestsHandler and setup with their proper request path/resource
configureRouting(app);

// Get the configured port below and use listen to expose our web app
app.set('port', process.env.PORT || 8080);
app.listen(app.get('port'));

module.exports = app;

