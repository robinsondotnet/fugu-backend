const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');

const indexRouter = require('./routes/index');
const recipesRouter = require('./routes/recipes');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json());
mongoose.connect('mongodb://robinson:igashinoeden2019@ds253567.mlab.com:53567/fugudb', { useNewUrlParser: true });
var db = mongoose.connection;
app.set('port', process.env.PORT || 8080);

if(!db)
    console.log("Error connecting db")
else
    console.log("Db connected successfully")

app.use('/', indexRouter);
app.use('/recipes', recipesRouter);
app.listen(app.get('port'))
