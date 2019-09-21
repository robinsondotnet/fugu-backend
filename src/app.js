// Import all of dependencies needed to setup our express app
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');
const neo4j = require('neo4j-driver').v1;

// Create the express app instace that will be used
const app = express();

// Setup middlewares needed for our application
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json());

// Setup Database
const driver = neo4j.driver("bolt://100.26.253.13:33991", neo4j.auth.basic("neo4j", "drives-residues-rushes"));

app.set('dbDriver', driver);

// Set port to be to used for our web app
app.set('port', process.env.PORT || 8080);

// Import requestsHandler and setup with their proper request path/resource
const homeRequestHandler = require('./routes/home');
const recipeRequestHandler = require('./routes/recipes');
app.use('/', homeRequestHandler);
app.use('/recipes', recipeRequestHandler);

// Get the configured port below and use listen to expose our web app
app.listen(app.get('port'))

app.on('exit', () => {
    driver.close();
});

module.exports = app;

