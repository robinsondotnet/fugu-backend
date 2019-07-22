const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const recipesRouter = require('./routes/recipes');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/recipes', recipesRouter);

app.use('/', (req, res) => {
    res.status(200).send('API works successfully');
  });
  
  app.listen(3000);

module.exports = app;
