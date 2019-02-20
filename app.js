const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');
const path = require('path');

/* Global Path setup for easy require */
global.__base = __dirname + '/';

const app = express();

const config = require('./system/config.json');

// XML/HTML Rendering Engine
app.set('views', path.join(__dirname, 'ejs'));
app.set('view engine', 'ejs');

// POST request parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set('superSecret', config.settings.secret);

// API backtracking
app.use(morgan('dev'));

app.use('/soapbox-race-core/Engine.svc', require('./engine/routes'));
app.use('/runner', require('./runner/routes'));

module.exports = app;